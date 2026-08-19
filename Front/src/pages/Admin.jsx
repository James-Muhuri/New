import { useEffect, useState } from "react";

function Admin() {

  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/api/admin/visitors")

      .then((response) => response.json())

      .then((data) => {

        setVisitors(data);
        setLoading(false);

      })

      .catch((error) => {

        console.error(error);
        setLoading(false);

      });

  }, []);


  // ===============================
  // TOTAL VISITS
  // ===============================

  const totalVisits = visitors.reduce(
    (total, visitor) => total + (visitor.totalVisits || 0),
    0
  );


  if (loading) {

    return (
      <div
        style={{
          background: "#07090d",
          color: "white",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        Loading visitors...
      </div>
    );

  }


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#07090d",
        color: "white",
        padding: "40px",
      }}
    >

      {/* ===============================
          HEADER
      =============================== */}

      <h1>Lanvai Admin</h1>

      <p style={{ color: "#8d98a6" }}>
        Website visitor information
      </p>


      {/* ===============================
          SUMMARY
      =============================== */}

      <div className="row g-4 mt-3">

        <div className="col-md-4">

          <div
            style={{
              background: "#0d1117",
              padding: "25px",
              borderRadius: "12px",
            }}
          >

            <p style={{ color: "#8d98a6" }}>
              Visitors
            </p>

            <h2>
              {visitors.length}
            </h2>

          </div>

        </div>


        <div className="col-md-4">

          <div
            style={{
              background: "#0d1117",
              padding: "25px",
              borderRadius: "12px",
            }}
          >

            <p style={{ color: "#8d98a6" }}>
              Total Visits
            </p>

            <h2>
              {totalVisits}
            </h2>

          </div>

        </div>


        <div className="col-md-4">

          <div
            style={{
              background: "#0d1117",
              padding: "25px",
              borderRadius: "12px",
            }}
          >

            <p style={{ color: "#8d98a6" }}>
              Businesses
            </p>

            <h2>

              {
                visitors.filter(
                  (visitor) => visitor.businessName
                ).length
              }

            </h2>

          </div>

        </div>

      </div>


      {/* ===============================
          VISITORS
      =============================== */}

      <div className="mt-5">

        <h3 className="mb-4">
          Visitors
        </h3>


        {visitors.map((visitor, index) => (

          <div
            key={visitor.userId || index}
            style={{
              background: "#0d1117",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "25px",
              marginBottom: "20px",
            }}
          >

            {/* USER */}

            <div className="row">

              <div className="col-lg-4">

                <h5>
                  {visitor.businessName || "Anonymous Visitor"}
                </h5>

                <p
                  style={{
                    color: "#8d98a6",
                    marginBottom: "5px",
                  }}
                >
                  User ID
                </p>

                <small>
                  {visitor.userId}
                </small>

              </div>


              {/* CONTACT */}

              <div className="col-lg-4">

                <p style={{ marginBottom: "5px" }}>
                  <strong>Phone:</strong>{" "}
                  {visitor.phone || "Not provided"}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {visitor.email || "Not provided"}
                </p>

              </div>


              {/* VISITS */}

              <div className="col-lg-4">

                <p>
                  <strong>Total Visits:</strong>{" "}
                  {visitor.totalVisits || 0}
                </p>

              </div>

            </div>


        

       

      
          </div>

        ))}

      </div>

    </div>

  );

}

export default Admin;