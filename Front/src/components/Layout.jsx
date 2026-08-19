import { Link } from "react-router-dom";
import Visitor from "./Visitor";
function Layout({ children }) {

    
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07090d",
        color: "#ffffff",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          background: "rgba(7, 9, 13, 0.94)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
          zIndex: 1000,
        }}
      >

        <div className="container">

          {/* LOGO + BRAND */}

          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >

            {/* Logo */}

  <div style={logoGlowStyle}>
  <div className="lanvai-logo-glow"></div>

  <img
    src="/loogo.jpeg"
    alt="Lanvai"
    style={logoGlowImageStyle}
  />
</div>

            {/* Name */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.1",
              }}
            >

              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                LANVAI
              </span>

              <span
                style={{
                  fontSize: "0.62rem",
                  color: "#8d98a6",
                  marginTop: "5px",
                  letterSpacing: "0.5px",
                }}
              >
                Your business growth partner
              </span>

            </div>

          </Link>

          {/* MOBILE BUTTON */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#lanvaiNavbar"
            aria-controls="lanvaiNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              borderColor:
                "rgba(255,255,255,0.2)",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGATION */}

          <div
            className="collapse navbar-collapse"
            id="lanvaiNavbar"
          >

            <ul
              className="navbar-nav ms-auto align-items-lg-center"
              style={{
                gap: "5px",
              }}
            >

              {/* HOME */}

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-3"
                  style={{
                    color: "#a6afbb",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Home
                </Link>
              </li>

              {/* SERVICES */}

              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link px-3"
                  style={{
                    color: "#a6afbb",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Services
                </Link>
              </li>

              {/* ABOUT */}

              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link px-3"
                  style={{
                    color: "#a6afbb",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  About Us
                </Link>
              </li>

              {/* INFORMATION */}

              <li className="nav-item">
                <Link
                  to="/info"
                  className="nav-link px-3"
                  style={{
                    color: "#a6afbb",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Information
                </Link>
              </li>

              {/* CONTACT */}

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link px-3"
                  style={{
                    color: "#a6afbb",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Contact
                </Link>
              </li>

              {/* CTA */}

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

                <Link
                  to="/contact"
                  className="btn px-4 py-2 fw-bold"
                  style={{
                    background: "#00d084",
                    border: "1px solid #00d084",
                    color: "#06100b",
                    borderRadius: "7px",
                  }}
                >
                  Work With Us
                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

   <Visitor />

<main>
  {children}
</main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        style={{
          background: "#05070a",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >

        <div className="container py-5">

          <div className="row g-5">

            {/* =================================================
                COLUMN 1 — BRAND
            ================================================= */}

            <div className="col-lg-5">

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >

                <div className="d-flex align-items-center">

                  {/* LOGO */}

 <div style={logoGlowStyle}>
  <div className="lanvai-logo-glow"></div>

  <img
    src="/loogo.jpeg"
    alt="Lanvai"
    style={logoGlowImageStyle}
  />
</div>

                  {/* BRAND */}

                  <div>

                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        letterSpacing: "3px",
                      }}
                    >
                      LANVAI
                    </div>

                    <div
                      style={{
                        color: "#7f8996",
                        fontSize: "0.7rem",
                        marginTop: "4px",
                      }}
                    >
                      Your business growth partner
                    </div>

                  </div>

                </div>

              </Link>


              <p
                className="mt-4"
                style={{
                  maxWidth: "470px",
                  color: "#7f8996",
                  lineHeight: "1.8",
                  fontSize: "0.9rem",
                }}
              >
                Lanvai is a research-driven business intelligence
                and strategy company helping businesses make
                better decisions through marketing,
                restructuring, market intelligence, and
                advertising solutions.
              </p>


              {/* SOCIAL ICONS */}

             
                          {/* SOCIAL MEDIA */}

<div className="d-flex flex-wrap gap-2 mt-4">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/lanvai-company-8413453b5/?isSelfProfile=true"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    style={socialFooterStyle}
  >
    <i className="bi bi-linkedin"></i>
  </a>

  {/* Instagram */}

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/19NU3YXABm/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    style={socialFooterStyle}
  >
    <i className="bi bi-facebook"></i>
  </a>


  {/* YouTube */}
  <a
    href="https://www.youtube.com/@Lanvaiofficial"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    style={socialFooterStyle}
  >
    <i className="bi bi-youtube"></i>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@lanvaiofficial"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    style={socialFooterStyle}
  >
    <i className="bi bi-tiktok"></i>
  </a>

  {/* Reddit */}
  <a
    href="https://www.reddit.com/user/LanvaiOfficial/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Reddit"
    style={socialFooterStyle}
  >
    <i className="bi bi-reddit"></i>
  </a>

</div>
            </div>


            {/* =================================================
                COLUMN 2 — QUICK LINKS
            ================================================= */}

            <div className="col-6 col-lg-3">

              <h5
                className="fw-bold mb-4"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Quick Links
              </h5>

              <div className="d-flex flex-column gap-3">

                <Link
                  to="/"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  Services
                </Link>

                <Link
                  to="/about"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  About Us
                </Link>

                <Link
                  to="/info"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  Information
                </Link>

                <Link
                  to="/contact"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  Contact
                </Link>

              </div>

            </div>


            {/* =================================================
                COLUMN 3 — SERVICES
            ================================================= */}

            <div className="col-6 col-lg-4">

              <h5
                className="fw-bold mb-4"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Our Services
              </h5>

              <div className="d-flex flex-column gap-3">

                <Link
                  to="/services"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  <i
                    className="bi bi-megaphone me-2"
                    style={{
                      color: "#00d084",
                    }}
                  ></i>

                  Marketing
                </Link>


                <Link
                  to="/services"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  <i
                    className="bi bi-diagram-3 me-2"
                    style={{
                      color: "#00d084",
                    }}
                  ></i>

                  Business Restructuring
                </Link>


                <Link
                  to="/services"
                  style={{
                    color: "#7f8996",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                  }}
                >
                  <i
                    className="bi bi-broadcast-pin me-2"
                    style={{
                      color: "#00d084",
                    }}
                  ></i>

                  Ad Exchange
                </Link>

              </div>

            </div>

          </div>


          {/* =================================================
              FOOTER BOTTOM
          ================================================= */}

          <hr
            className="my-5"
            style={{
              borderColor:
                "rgba(255,255,255,0.08)",
            }}
          />

          <div
            className="d-flex justify-content-between flex-wrap gap-3"
            style={{
              color: "#4e5966",
              fontSize: "0.75rem",
            }}
          >

            <span>
              © {new Date().getFullYear()} Lanvai.
              All rights reserved.
            </span>

            <span>
              Research. Strategy. Impact.
            </span>

          </div>

          {/* =====================================================
    FLOATING WHATSAPP BUTTON
===================================================== */}

<a
  href="https://wa.me/254758887164?text=Hello%20Lanvai%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Lanvai on WhatsApp"
  className="lanvai-whatsapp"
>
  <span className="lanvai-whatsapp-pulse"></span>

  <span className="lanvai-whatsapp-icon">
    <i className="bi bi-whatsapp"></i>
  </span>

  <span className="lanvai-whatsapp-text">
    <strong>Chat with us</strong>
    <small>We’re here to help</small>
  </span>
</a>

        </div>

        
      </footer>


      {/* =====================================================
          INLINE ANIMATIONS
      ===================================================== */}

      <style>
        {`

          .navbar .nav-link {
            transition: color 0.25s ease;
          }

          .navbar .nav-link:hover {
            color: #00d084 !important;
          }

          footer a {
            transition: color 0.25s ease;
          }

          footer a:hover {
            color: #00d084 !important;
          }

          .navbar-brand:hover {
            color: #ffffff !important;
          }
            /* =====================================================
   LANVAI LOGO LIGHT
===================================================== */

/* =====================================================
   LARGE LANVAI LOGO LIGHT
===================================================== */

.lanvai-logo-glow {
  position: absolute;

  width: 150px;
  height: 150px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(0, 208, 132, 0.38) 0%,
      rgba(0, 208, 132, 0.22) 22%,
      rgba(0, 208, 132, 0.12) 40%,
      rgba(0, 208, 132, 0.055) 58%,
      rgba(0, 208, 132, 0.018) 72%,
      transparent 82%
    );

  filter: blur(10px);

  opacity: 0.8;

  animation: lanvaiLogoGlow 4.5s ease-in-out infinite;

  pointer-events: none;

  z-index: 1;
}


@keyframes lanvaiLogoGlow {

  0% {
    transform: scale(0.88);
    opacity: 0.58;
  }

  50% {
    transform: scale(1.12);
    opacity: 1;
  }

  100% {
    transform: scale(0.88);
    opacity: 0.58;
  }

}


/* =====================================================
   LOGO HOVER
===================================================== */

.navbar-brand:hover .lanvai-logo-glow {
  animation-duration: 2.2s;
  opacity: 1;
}


.navbar-brand:hover img {
  transform: scale(1.06);

  filter:
    drop-shadow(0 0 10px rgba(0,208,132,0.9))
    drop-shadow(0 0 25px rgba(0,208,132,0.55))
    drop-shadow(0 0 45px rgba(0,208,132,0.25));
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 767px) {

  .navbar-brand .lanvai-logo-glow {
    width: 120px;
    height: 120px;
  }

}

/* =====================================================
   FLOATING WHATSAPP BUTTON
===================================================== */

.lanvai-whatsapp {
  position: fixed;

  right: 24px;
  bottom: 24px;

  z-index: 9999;

  display: flex;
  align-items: center;

  min-width: 190px;
  height: 64px;

  padding: 7px 17px 7px 7px;

  background: #00d084;
  color: #06100b;

  border-radius: 50px;

  text-decoration: none;

  box-shadow:
    0 10px 30px rgba(0, 208, 132, 0.28),
    0 5px 15px rgba(0, 0, 0, 0.25);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  animation: lanvaiWhatsappFloat 3s ease-in-out infinite;
}


/* =====================================================
   WHATSAPP ICON
===================================================== */

.lanvai-whatsapp-icon {
  position: relative;

  width: 50px;
  height: 50px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #06100b;
  color: #00d084;

  border-radius: 50%;

  font-size: 25px;

  z-index: 2;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    color 0.3s ease;
}


/* =====================================================
   TEXT
===================================================== */

.lanvai-whatsapp-text {
  display: flex;
  flex-direction: column;

  margin-left: 11px;

  line-height: 1.2;
}

.lanvai-whatsapp-text strong {
  font-size: 14px;
  font-weight: 800;

  color: #06100b;
}

.lanvai-whatsapp-text small {
  margin-top: 4px;

  font-size: 11px;
  font-weight: 600;

  color: rgba(6, 16, 11, 0.68);
}


/* =====================================================
   PULSE EFFECT
===================================================== */

.lanvai-whatsapp-pulse {
  position: absolute;

  left: 7px;
  top: 7px;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  border: 2px solid rgba(0, 208, 132, 0.8);

  animation: lanvaiWhatsappPulse 2.2s ease-out infinite;

  pointer-events: none;
}


/* =====================================================
   HOVER
===================================================== */

.lanvai-whatsapp:hover {
  transform: translateY(-5px) scale(1.02);

  background: #16e094;

  color: #06100b;

  text-decoration: none;

  box-shadow:
    0 15px 40px rgba(0, 208, 132, 0.38),
    0 8px 20px rgba(0, 0, 0, 0.28);

  animation-play-state: paused;
}

.lanvai-whatsapp:hover .lanvai-whatsapp-icon {
  transform: rotate(-8deg) scale(1.08);

  background: #06100b;
  color: #00d084;
}


/* =====================================================
   FLOATING ANIMATION
===================================================== */

@keyframes lanvaiWhatsappFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

}


/* =====================================================
   PULSE ANIMATION
===================================================== */

@keyframes lanvaiWhatsappPulse {

  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  70% {
    transform: scale(1.55);
    opacity: 0;
  }

  100% {
    transform: scale(1.55);
    opacity: 0;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .lanvai-whatsapp {
    right: 16px;
    bottom: 17px;

    min-width: 58px;
    width: 58px;
    height: 58px;

    padding: 4px;

    justify-content: center;

    border-radius: 50%;
  }

  .lanvai-whatsapp-icon {
    width: 50px;
    height: 50px;

    font-size: 23px;
  }

  .lanvai-whatsapp-text {
    display: none;
  }

  .lanvai-whatsapp-pulse {
    left: 4px;
    top: 4px;

    width: 50px;
    height: 50px;
  }

}
        `}

      </style>

    </div>
  );
}

export default Layout;
const socialFooterStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "9px",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#8b95a3",
  textDecoration: "none",
  transition: "all 0.25s ease",
};

    const logoGlowStyle = {
  position: "relative",
  width: "58px",
  height: "58px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const logoGlowImageStyle = {
  height: "76px",
  width: "76px",
  objectFit: "contain",
  display: "block",
  position: "relative",
  zIndex: 2,

  filter:
    "drop-shadow(0 0 8px rgba(0,208,132,0.75)) " +
    "drop-shadow(0 0 22px rgba(0,208,132,0.42)) " +
    "drop-shadow(0 0 40px rgba(0,208,132,0.18))",

  transition: "all 0.5s ease",
};