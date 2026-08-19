import { useEffect, useState } from "react";

const USER_ID_KEY = "lanvai_user_id";
const PROMPT_STATUS_KEY =
  "lanvai_contact_prompt_status";

const FIRST_PROMPT_DELAY = 3 * 60 * 1000; // 3 minutes
const PROMPT_INTERVAL = 30 * 60 * 1000; // 30 minutes


function Visitor() {

  const [showModal, setShowModal] =
    useState(false);

  const [isVisible, setIsVisible] =
    useState(false);

  const [businessName, setBusinessName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  /*
  =========================================================
  GET OR CREATE USER ID
  =========================================================
  */

  const getUserId = () => {

    let userId =
      localStorage.getItem(
        USER_ID_KEY
      );

    if (!userId) {

      userId =
        "lv_" + crypto.randomUUID();

      localStorage.setItem(
        USER_ID_KEY,
        userId
      );
    }

    return userId;
  };


  /*
  =========================================================
  GET PROMPT STATUS
  =========================================================
  */

  const getPromptStatus = () => {

    const stored =
      localStorage.getItem(
        PROMPT_STATUS_KEY
      );

    if (!stored) {

      return {
        submitted: false,
        declinedAt: null
      };

    }

    try {

      const status =
        JSON.parse(stored);

      return {

        submitted:
          status.submitted === true,

        declinedAt:
          status.declinedAt || null

      };

    } catch {

      return {
        submitted: false,
        declinedAt: null
      };

    }
  };


  /*
  =========================================================
  SAVE PROMPT STATUS
  =========================================================
  */

  const savePromptStatus = (
    status
  ) => {

    localStorage.setItem(
      PROMPT_STATUS_KEY,
      JSON.stringify(status)
    );

  };


  /*
  =========================================================
  OPEN MODAL WITH ANIMATION
  =========================================================
  */

  const openModal = () => {

    setShowModal(true);

    /*
    Give React one frame to render
    the modal before starting the
    fade-in animation.
    */

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        setIsVisible(true);

      });

    });

  };


  /*
  =========================================================
  CLOSE MODAL WITH ANIMATION
  =========================================================
  */

  const closeModal = (
    callback
  ) => {

    setIsVisible(false);

    /*
    Wait for the fade-out animation
    before completely removing
    the modal from the DOM.
    */

    setTimeout(() => {

      setShowModal(false);

      if (callback) {
        callback();
      }

    }, 350);

  };


  /*
  =========================================================
  CHECK WHETHER MODAL SHOULD SHOW
  =========================================================
  */

  const checkPrompt = () => {

    const status =
      getPromptStatus();


    /*
    =====================================================
    ALREADY SUBMITTED
    =====================================================
    */

    if (status.submitted) {

      return;

    }


    /*
    =====================================================
    NEVER DECLINED
    =====================================================

    Do NOT immediately show it.

    The initial 3-minute timer handles
    the first appearance.
    */

    if (!status.declinedAt) {

      return;

    }


    /*
    =====================================================
    DECLINED BEFORE
    =====================================================
    */

    const declinedAt =
      new Date(
        status.declinedAt
      ).getTime();

    const now =
      Date.now();

    const timePassed =
      now - declinedAt;


    /*
    =====================================================
    30 MINUTES HAVE PASSED
    =====================================================
    */

    if (
      timePassed >=
      PROMPT_INTERVAL
    ) {

      openModal();

    }

  };


  /*
  =========================================================
  INITIAL 3-MINUTE DELAY
  =========================================================
  */

  useEffect(() => {

    getUserId();


    /*
    Check whether this visitor has
    already submitted their details.

    If they have, nothing happens.
    */

    const status =
      getPromptStatus();

    if (status.submitted) {

      return;

    }


    /*
    IMPORTANT:

    We DO NOT call checkPrompt()
    immediately.

    Instead we wait 3 minutes.
    */

    const firstPromptTimer =
      setTimeout(() => {

        /*
        Check again in case something
        changed during those 3 minutes.
        */

        const latestStatus =
          getPromptStatus();

        if (
          !latestStatus.submitted &&
          !latestStatus.declinedAt
        ) {

          openModal();

        }

      }, FIRST_PROMPT_DELAY);


    /*
    =====================================================
    AFTER THE FIRST PROMPT
    =====================================================

    Check every minute so that if the
    visitor declines, the modal can
    return after 30 minutes.
    */

    const interval =
      setInterval(() => {

        checkPrompt();

      }, 60 * 1000);


    return () => {

      clearTimeout(
        firstPromptTimer
      );

      clearInterval(
        interval
      );

    };

  }, []);


  /*
  =========================================================
  DECLINE / MAYBE LATER
  =========================================================
  */

  const handleDecline = () => {

    savePromptStatus({

      submitted: false,

      declinedAt:
        new Date().toISOString()

    });


    closeModal();


    console.log(
      "Lanvai contact modal declined."
    );

  };


  /*
  =========================================================
  SUBMIT
  =========================================================
  */

  const handleSubmit = async (
    event
  ) => {

    event.preventDefault();

    setError("");


    /*
    =====================================================
    VALIDATION
    =====================================================
    */

    if (!businessName.trim()) {

      setError(
        "Please enter your business name."
      );

      return;

    }

    if (!phone.trim()) {

      setError(
        "Please enter your phone number."
      );

      return;

    }

    if (!email.trim()) {

      setError(
        "Please enter your email address."
      );

      return;

    }


    setLoading(true);


    try {

      const userId =
        getUserId();


      /*
      =====================================================
      SEND TO BACKEND
      =====================================================
      */

      const response =
        await fetch(
          "/api/visitor/business",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

              userId,

              businessName:
                businessName.trim(),

              phone:
                phone.trim(),

              email:
                email.trim()

            })

          }
        );


      const data =
        await response.json();


      /*
      =====================================================
      SUCCESS
      =====================================================
      */

      if (
        response.ok &&
        data.success
      ) {

        /*
        Mark permanently completed.
        */

        savePromptStatus({

          submitted: true,

          declinedAt: null

        });


        closeModal();


        console.log(
          "Lanvai visitor information saved."
        );

      } else {

        setError(
          data.message ||
          "We could not save your information. Please try again."
        );

      }

    } catch (error) {

      console.error(
        "Visitor information error:",
        error
      );

      setError(
        "Something went wrong. Please check your connection and try again."
      );

    } finally {

      setLoading(false);

    }

  };


  /*
  =========================================================
  NOTHING TO DISPLAY
  =========================================================
  */

  if (!showModal) {

    return null;

  }


  /*
  =========================================================
  MODAL
  =========================================================
  */

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,

        /*
        Fade the background in
        */

        backgroundColor:
          isVisible
            ? "rgba(0, 0, 0, 0.45)"
            : "rgba(0, 0, 0, 0)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        zIndex: 99999,

        padding: "20px",

        transition:
          "background-color 350ms ease",

        boxSizing: "border-box"
      }}
    >

      <div
        style={{

          width: "100%",

          maxWidth: "500px",

          backgroundColor: "#ffffff",

          borderRadius: "20px",

          padding: "35px",

          boxShadow:
            "0 25px 70px rgba(0,0,0,0.22)",

          position: "relative",

          /*
          Soft fade + upward movement
          */

          opacity:
            isVisible ? 1 : 0,

          transform:
            isVisible
              ? "translateY(0) scale(1)"
              : "translateY(18px) scale(0.98)",

          transition:
            "opacity 350ms ease, transform 350ms ease",

          boxSizing: "border-box"

        }}
      >


        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          type="button"
          onClick={handleDecline}
          style={{

            position: "absolute",

            top: "15px",

            right: "17px",

            width: "34px",

            height: "34px",

            border: "none",

            borderRadius: "50%",

            backgroundColor:
              "#f5f5f5",

            color: "#555",

            fontSize: "21px",

            lineHeight: "1",

            cursor: "pointer",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            transition:
              "background-color 200ms ease"

          }}

          aria-label="Close"
        >

          ×

        </button>


        {/* =================================================
            HEADER
        ================================================= */}

        <div
          style={{
            marginBottom: "25px",
            paddingRight: "30px"
          }}
        >

          <div
            style={{
              display: "inline-block",

              padding:
                "6px 11px",

              borderRadius:
                "20px",

              backgroundColor:
                "#eef8f4",

              color:
                "#1a936f",

              fontSize: "12px",

              fontWeight: "700",

              marginBottom: "13px"
            }}
          >

            LET'S CONNECT

          </div>


          <h2
            style={{

              margin: 0,

              color: "#0b2545",

              fontSize: "28px",

              lineHeight: "1.2",

              fontWeight: "700"

            }}
          >

            Let’s get to know
            your business

          </h2>


          <p
            style={{

              marginTop: "12px",

              marginBottom: 0,

              color: "#666",

              fontSize: "15px",

              lineHeight: "1.6"

            }}
          >

            Tell us a little about
            your business so we can
            understand what you're
            looking for and serve you
            better.

          </p>

        </div>


        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
        >


          {/* BUSINESS NAME */}

          <div
            style={{
              marginBottom: "17px"
            }}
          >

            <label
              style={{

                display: "block",

                marginBottom: "7px",

                fontWeight: "600",

                color: "#222",

                fontSize: "14px"

              }}
            >

              Business Name

            </label>


            <input

              type="text"

              value={businessName}

              onChange={(e) =>
                setBusinessName(
                  e.target.value
                )
              }

              placeholder="Enter your business name"

              style={{

                width: "100%",

                padding:
                  "13px 14px",

                border:
                  "1px solid #ddd",

                borderRadius:
                  "9px",

                fontSize: "15px",

                outline: "none",

                boxSizing:
                  "border-box"

              }}

            />

          </div>


          {/* PHONE */}

          <div
            style={{
              marginBottom: "17px"
            }}
          >

            <label
              style={{

                display: "block",

                marginBottom: "7px",

                fontWeight: "600",

                color: "#222",

                fontSize: "14px"

              }}
            >

              Phone Number

            </label>


            <input

              type="tel"

              value={phone}

              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }

              placeholder="Enter your phone number"

              style={{

                width: "100%",

                padding:
                  "13px 14px",

                border:
                  "1px solid #ddd",

                borderRadius:
                  "9px",

                fontSize: "15px",

                outline: "none",

                boxSizing:
                  "border-box"

              }}

            />

          </div>


          {/* EMAIL */}

          <div
            style={{
              marginBottom: "17px"
            }}
          >

            <label
              style={{

                display: "block",

                marginBottom: "7px",

                fontWeight: "600",

                color: "#222",

                fontSize: "14px"

              }}
            >

              Email Address

            </label>


            <input

              type="email"

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

              placeholder="Enter your email address"

              style={{

                width: "100%",

                padding:
                  "13px 14px",

                border:
                  "1px solid #ddd",

                borderRadius:
                  "9px",

                fontSize: "15px",

                outline: "none",

                boxSizing:
                  "border-box"

              }}

            />

          </div>


          {/* ERROR */}

          {error && (

            <div
              style={{

                marginBottom: "15px",

                color: "#b42318",

                backgroundColor:
                  "#fff1f0",

                padding:
                  "10px 12px",

                borderRadius: "8px",

                fontSize: "14px"

              }}
            >

              {error}

            </div>

          )}


          {/* SUBMIT */}

          <button

            type="submit"

            disabled={loading}

            style={{

              width: "100%",

              padding: "14px",

              border: "none",

              borderRadius: "9px",

              backgroundColor:
                "#1a936f",

              color: "#ffffff",

              fontSize: "16px",

              fontWeight: "700",

              cursor:
                loading
                  ? "not-allowed"
                  : "pointer",

              opacity:
                loading
                  ? 0.7
                  : 1,

              transition:
                "transform 200ms ease, opacity 200ms ease"

            }}

          >

            {loading
              ? "Saving..."
              : "Continue"}

          </button>


          {/* MAYBE LATER */}

          <button

            type="button"

            onClick={handleDecline}

            style={{

              width: "100%",

              marginTop: "12px",

              padding: "12px",

              border: "none",

              background: "transparent",

              color: "#777",

              fontSize: "14px",

              cursor: "pointer"

            }}

          >

            Maybe later

          </button>


          {/* SMALL NOTE */}

          <p
            style={{

              textAlign: "center",

              marginTop: "8px",

              marginBottom: 0,

              color: "#999",

              fontSize: "12px",

              lineHeight: "1.5"

            }}
          >

            Once you provide your details,
            you won't be asked again.

          </p>


        </form>

      </div>

    </div>

  );

}

export default Visitor;