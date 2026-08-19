const express = require("express");
const cors = require("cors");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// FIREBASE
// ===============================

const serviceAccount = require("./firebasecompany.json");

console.log("SERVICE ACCOUNT PROJECT:", serviceAccount.project_id);
console.log("SERVICE ACCOUNT EMAIL:", serviceAccount.client_email);

initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = getFirestore();

console.log("FIRESTORE PROJECT:", serviceAccount.project_id);


// ===============================
// TEST
// ===============================

app.get("/", (req, res) => {
  res.send("Lanvai backend is running");
});


// ===============================
// VISITOR
// ===============================

// ===============================
// BATCH VISITOR ACTIVITY
// ===============================

// ===============================
// SAVE 24-HOUR VISITOR ACTIVITY
// ===============================

app.post("/api/visitor/activity-day", async (req, res) => {

  try {

    const {
      userId,
      date,
      sessions,
    } = req.body;


    // ===============================
    // VALIDATION
    // ===============================

    if (!userId) {

      return res.status(400).json({
        success: false,
        message: "userId is required",
      });

    }


    if (!date) {

      return res.status(400).json({
        success: false,
        message: "date is required",
      });

    }


    if (
      !Array.isArray(sessions)
    ) {

      return res.status(400).json({
        success: false,
        message: "sessions must be an array",
      });

    }


    // ===============================
    // CALCULATE TOTALS
    // ===============================

    const visitCount =
      sessions.length;


    const totalDurationSeconds =
      sessions.reduce(
        (total, session) =>
          total +
          Number(
            session.durationSeconds || 0
          ),
        0
      );


    // ===============================
    // VISITOR DOCUMENT
    // ===============================

    const visitorRef =
      db
        .collection("visitors")
        .doc(userId);


    const visitor =
      await visitorRef.get();


    // ===============================
    // DAILY ACTIVITY DOCUMENT
    // ===============================

    const dailyActivityRef =
      visitorRef
        .collection("dailyActivity")
        .doc(date);


    // ===============================
    // SAVE DAILY ACTIVITY
    // ===============================

    await dailyActivityRef.set({

      date,

      visits:
        visitCount,

      totalDurationSeconds,

      sessions,

      submittedAt:
        FieldValue
          .serverTimestamp(),

    });


    // ===============================
    // UPDATE VISITOR TOTALS
    // ===============================

    if (!visitor.exists) {

      await visitorRef.set({

        userId,

        businessName: "",
        phone: "",
        email: "",

        totalVisits:
          visitCount,

        totalDurationSeconds,

        createdAt:
          FieldValue
            .serverTimestamp(),

        updatedAt:
          FieldValue
            .serverTimestamp(),

      });

    } else {

      await visitorRef.update({

        totalVisits:
          FieldValue
            .increment(visitCount),

        totalDurationSeconds:
          FieldValue
            .increment(
              totalDurationSeconds
            ),

        updatedAt:
          FieldValue
            .serverTimestamp(),

      });

    }


    // ===============================
    // SUCCESS
    // ===============================

    res.json({

      success: true,

      date,

      visits: visitCount,

      totalDurationSeconds,

    });


  } catch (error) {

    console.error(
      "24-hour activity error:",
      error
    );


    // IMPORTANT:
    // Browser will NOT delete
    // its LocalStorage if this fails.

    res.status(500).json({

      success: false,

      message:
        "Could not save visitor activity",

    });

  }

});


// ===============================
// SAVE BUSINESS INFORMATION
// ===============================

app.post("/api/visitor/business", async (req, res) => {

  try {

    const {
      userId,
      businessName,
      phone,
      email,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }

    await db
      .collection("visitors")
      .doc(userId)
      .set(
        {
          userId,
          
          businessName: businessName || "",
          phone: phone || "",
          email: email || "",

          updatedAt:
            FieldValue
              .serverTimestamp(),
        },
        {
          merge: true,
        }
      );

    res.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Could not save information",
    });

  }

});


// ===============================
// GET ALL VISITORS
// ===============================

app.get("/api/admin/visitors", async (req, res) => {

  try {

    const snapshot = await db.collection("visitors").get();

    const visitors = [];

    snapshot.forEach((doc) => {
      visitors.push(doc.data());
    });

    res.json(visitors);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Could not get visitors",
    });

  }

});

// ===============================
// START SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Lanvai backend running on port ${PORT}`);
});
