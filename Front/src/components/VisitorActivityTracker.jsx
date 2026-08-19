import { useEffect } from "react";


// =====================================================
// STORAGE
// =====================================================

const USER_ID_KEY =
  "lanvai_user_id";

const ACTIVITY_KEY =
  "lanvai_visitor_activity";


// =====================================================
// SETTINGS
// =====================================================

// 30 minutes of inactivity means
// the previous visit/session has ended.

const SESSION_TIMEOUT =
  30 * 60 * 1000;


// Activity is submitted after
// 24 hours of accumulation.

const TWENTY_FOUR_HOURS =
  24 * 60 * 60 * 1000;


// We update the current session
// every 30 seconds.

const HEARTBEAT_INTERVAL =
  30 * 1000;


// =====================================================
// GET EXISTING USER ID
// =====================================================

function getUserId() {

  let userId =
    localStorage.getItem(
      USER_ID_KEY
    );


  if (!userId) {

    userId =
      "lv_" +
      crypto.randomUUID();

    localStorage.setItem(
      USER_ID_KEY,
      userId
    );

  }


  return userId;

}


// =====================================================
// GET TODAY
// =====================================================

function getToday() {

  const now =
    new Date();

  return (
    now.getFullYear() +
    "-" +
    String(
      now.getMonth() + 1
    ).padStart(2, "0") +
    "-" +
    String(
      now.getDate()
    ).padStart(2, "0")
  );

}


// =====================================================
// GET STORED ACTIVITY
// =====================================================

function getStoredActivity() {

  const stored =
    localStorage.getItem(
      ACTIVITY_KEY
    );


  if (!stored) {

    return {

      userId:
        getUserId(),

      periodStartedAt:
        new Date().toISOString(),

      sessions: [],

    };

  }


  try {

    const activity =
      JSON.parse(stored);


    // Make sure the old data
    // belongs to this browser/user.

    if (
      !activity.userId
    ) {

      activity.userId =
        getUserId();

    }


    if (
      !Array.isArray(
        activity.sessions
      )
    ) {

      activity.sessions = [];

    }


    return activity;

  } catch {

    return {

      userId:
        getUserId(),

      periodStartedAt:
        new Date().toISOString(),

      sessions: [],

    };

  }

}


// =====================================================
// SAVE ACTIVITY
// =====================================================

function saveActivity(
  activity
) {

  localStorage.setItem(
    ACTIVITY_KEY,
    JSON.stringify(
      activity
    )
  );

}


// =====================================================
// VISITOR ACTIVITY TRACKER
// =====================================================

function VisitorActivityTracker() {

  useEffect(() => {

    let activity =
      getStoredActivity();


    let currentSession =
      null;


    let lastActivityTime =
      Date.now();


    // =================================================
    // START A NEW SESSION
    // =================================================

    const startSession = () => {

      currentSession = {

        startedAt:
          new Date().toISOString(),

        durationSeconds:
          0,

      };


      activity.sessions.push(
        currentSession
      );


      saveActivity(
        activity
      );

    };


    // =================================================
    // RECORD USER ACTIVITY
    // =================================================

    const registerActivity = () => {

      const now =
        Date.now();


      /*
      If there is no current session,
      create one.

      If more than 30 minutes have
      passed since activity, create
      a new session.
      */

      if (
        !currentSession ||
        now -
          lastActivityTime >
          SESSION_TIMEOUT
      ) {

        startSession();

      }


      lastActivityTime =
        now;

    };


    // =================================================
    // START FIRST SESSION
    // =================================================

    startSession();


    // =================================================
    // USER INTERACTION EVENTS
    // =================================================

    window.addEventListener(
      "mousemove",
      registerActivity
    );

    window.addEventListener(
      "keydown",
      registerActivity
    );

    window.addEventListener(
      "click",
      registerActivity
    );

    window.addEventListener(
      "scroll",
      registerActivity
    );

    window.addEventListener(
      "touchstart",
      registerActivity
    );


    // =================================================
    // HEARTBEAT
    // =================================================

    const heartbeat =
      setInterval(() => {

        if (
          !currentSession
        ) {

          return;

        }


        const now =
          Date.now();


        /*
        Only add time while the
        visitor has been active.

        If they have been inactive
        for more than 30 minutes,
        stop counting the session.
        */

        if (
          now -
            lastActivityTime <=
          SESSION_TIMEOUT
        ) {

          currentSession.durationSeconds +=
            HEARTBEAT_INTERVAL /
            1000;


          saveActivity(
            activity
          );

        }

      }, HEARTBEAT_INTERVAL);


    // =================================================
    // SUBMIT 24-HOUR ACTIVITY
    // =================================================

    const submitActivity =
      async () => {

        const stored =
          localStorage.getItem(
            ACTIVITY_KEY
          );


        if (!stored) {

          return;

        }


        let storedActivity;


        try {

          storedActivity =
            JSON.parse(
              stored
            );

        } catch {

          return;

        }


        if (
          !storedActivity.periodStartedAt
        ) {

          return;

        }


        const startedAt =
          new Date(
            storedActivity
              .periodStartedAt
          ).getTime();


        const now =
          Date.now();


        const elapsed =
          now -
          startedAt;


        /*
        Do nothing until
        24 hours have passed.
        */

        if (
          elapsed <
          TWENTY_FOUR_HOURS
        ) {

          return;

        }


        // =============================================
        // SEND TO BACKEND
        // =============================================

        try {

          const response =
            await fetch(
              "/api/visitor/activity-day",
              {

                method:
                  "POST",

                headers: {

                  "Content-Type":
                    "application/json",

                },

                body:
                  JSON.stringify({

                    userId:
                      storedActivity
                        .userId,

                    date:
                      getToday(),

                    sessions:
                      storedActivity
                        .sessions,

                  }),

              }
            );


          const data =
            await response.json();


          // ===========================================
          // SUCCESS
          // ===========================================

          if (
            response.ok &&
            data.success
          ) {

            /*
            ONLY NOW do we remove
            the accumulated activity.
            */

            localStorage.removeItem(
              ACTIVITY_KEY
            );


            console.log(
              "Lanvai visitor activity successfully saved."
            );

          } else {

            /*
            Backend did not confirm
            successful saving.

            KEEP LOCAL STORAGE.
            */

            console.error(
              "Visitor activity was not saved. Keeping LocalStorage."
            );

          }

        } catch (error) {

          /*
          Network/server problem.

          KEEP LOCAL STORAGE so
          the data is not lost.
          */

          console.error(
            "Visitor activity upload failed:",
            error
          );

        }

      };


    // =================================================
    // CHECK EVERY MINUTE
    // =================================================

    const uploadTimer =
      setInterval(
        submitActivity,
        60 * 1000
      );


    /*
    Also check immediately in case
    the browser was closed and then
    reopened after 24 hours.
    */

    submitActivity();


    // =================================================
    // CLEANUP
    // =================================================

    return () => {

      clearInterval(
        heartbeat
      );


      clearInterval(
        uploadTimer
      );


      window.removeEventListener(
        "mousemove",
        registerActivity
      );

      window.removeEventListener(
        "keydown",
        registerActivity
      );

      window.removeEventListener(
        "click",
        registerActivity
      );

      window.removeEventListener(
        "scroll",
        registerActivity
      );

      window.removeEventListener(
        "touchstart",
        registerActivity
      );

    };

  }, []);


  // This component displays
  // nothing on the website.

  return null;

}


export default VisitorActivityTracker;