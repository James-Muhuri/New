import { useEffect, useRef, useState } from "react";

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(35px)",
        transition: `
          opacity 0.8s ease ${delay}ms,
          transform 0.8s ease ${delay}ms
        `,
      }}
    >
      {children}
    </div>
  );
}


/* =========================================================
   INFO PAGE
========================================================= */

function Info() {
  return (
    <div
      style={{
        background: "#07090d",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingTop: "110px",
          paddingBottom: "100px",

          background:
            "radial-gradient(circle at 75% 35%, rgba(0,208,132,0.13), transparent 30%), radial-gradient(circle at 20% 70%, rgba(0,208,132,0.05), transparent 25%), #07090d",
        }}
      >

        {/* BACKGROUND GRID */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.055,
            pointerEvents: "none",

            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",

            backgroundSize: "70px 70px",
          }}
        />


        <div className="container position-relative">

          <div className="row align-items-center">

            {/* LEFT */}

            <div className="col-lg-8">

              <Reveal>

                <div
                  style={{
                    color: "#00d084",
                    fontSize: "0.7rem",
                    fontWeight: "800",
                    letterSpacing: "3px",
                    marginBottom: "22px",
                  }}
                >
                  LANVAI MEDIA
                </div>


                <h1
                  style={{
                    fontSize:
                      "clamp(3rem, 7vw, 6.5rem)",
                    lineHeight: "0.94",
                    fontWeight: "800",
                    letterSpacing: "-5px",
                    marginBottom: "32px",
                  }}
                >
                  Understand
                  <br />

                  <span
                    style={{
                      color: "#00d084",
                    }}
                  >
                    Business.
                  </span>
                </h1>


                <p
                  style={{
                    maxWidth: "720px",
                    color: "#9aa4b2",
                    fontSize: "1.08rem",
                    lineHeight: "1.9",
                    marginBottom: "35px",
                  }}
                >
                  Welcome to Lanvai Media — where business news
                  becomes business intelligence.

                  <br />
                  <br />

                  We research, explain, and analyze the forces
                  shaping businesses, markets, industries, and
                  economies in Kenya and around the world.
                </p>


                <div
                  className="d-flex flex-wrap gap-3"
                >

                  <a
                    href="YOUR_YOUTUBE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg fw-bold px-4 py-3"
                    style={{
                      background: "#00d084",
                      color: "#06100b",
                      borderRadius: "8px",
                      border: "1px solid #00d084",
                    }}
                  >
                    Watch On YouTube

                    <i className="bi bi-youtube ms-2"></i>
                  </a>


                  <a
                    href="#content"
                    className="btn btn-lg px-4 py-3"
                    style={{
                      color: "#ffffff",
                      border:
                        "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                    }}
                  >
                    Explore Our Content

                    <i className="bi bi-arrow-down ms-2"></i>
                  </a>

                </div>

              </Reveal>

            </div>


            {/* RIGHT VISUAL */}

          
{/* RIGHT VISUAL */}

{/* RIGHT VISUAL */}

<div className="col-lg-4 mt-5 mt-lg-0">

  <Reveal delay={150}>

    <div
      style={{
        width: "100%",
        minHeight: "360px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >

      {/* MAIN LIGHT BEHIND LOGO */}
      <div
        style={{
          position: "absolute",
          width: "330px",
          height: "330px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,208,132,0.24) 0%, rgba(0,208,132,0.12) 28%, rgba(0,207,232,0.07) 48%, transparent 72%)",
          filter: "blur(18px)",
          opacity: 0.95,
          animation: "logoGlow 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* SECOND SOFTER HALO */}
      <div
        style={{
          position: "absolute",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,208,132,0.07) 0%, rgba(0,207,232,0.04) 35%, transparent 68%)",
          filter: "blur(30px)",
          animation: "logoGlowOuter 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* SUBTLE LIGHT CORE */}
      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,208,132,0.16), transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* LOGO */}
      <img
        src="/loogo.jpeg"
        alt="Lanvai"
        style={{
          position: "relative",
          zIndex: 2,
          width: "340px",
          height: "340px",
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
          filter:
            "drop-shadow(0 0 18px rgba(0,208,132,0.18)) drop-shadow(0 20px 45px rgba(0,0,0,0.45))",
        }}
      />

    </div>

  </Reveal>

</div>



          </div>

        </div>

      </section>


      {/* =====================================================
          CONTENT INTRODUCTION
      ===================================================== */}

      <section
        id="content"
        style={{
          background: "#0b0f15",
          padding: "110px 0",
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center"
              style={{
                maxWidth: "850px",
                margin: "0 auto 70px",
              }}
            >

              <div
                style={{
                  color: "#00d084",
                  fontSize: "0.7rem",
                  fontWeight: "800",
                  letterSpacing: "3px",
                  marginBottom: "18px",
                }}
              >
                OUR CONTENT
              </div>


              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: "800",
                  lineHeight: "1",
                  letterSpacing: "-3px",
                  marginBottom: "25px",
                }}
              >
                Two Ways To
                <br />

                <span
                  style={{
                    color: "#00d084",
                  }}
                >
                  Understand Business.
                </span>
              </h2>


              <p
                style={{
                  color: "#8994a2",
                  fontSize: "1rem",
                  lineHeight: "1.9",
                }}
              >
                Business moves quickly. Understanding it takes
                depth.

                <br />

                That's why Lanvai Media delivers content in two
                different formats — keeping you informed today
                while helping you understand what shapes
                tomorrow.
              </p>

            </div>

          </Reveal>


          {/* TWO FORMAT CARDS */}

          <div className="row g-4">

            {/* SHORT FORM */}

            <div className="col-lg-6">

              <Reveal>

                <div
                  style={{
                    height: "100%",
                    padding:
                      "clamp(30px,5vw,50px)",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(145deg,#111821,#0d1319)",
                    border:
                      "1px solid rgba(0,208,132,0.18)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >

                  <div
                    style={{
                      position: "absolute",
                      right: "-40px",
                      top: "-40px",
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background:
                        "rgba(0,208,132,0.05)",
                    }}
                  />


                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "35px",
                    }}
                  >

                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "15px",
                        background:
                          "rgba(0,208,132,0.09)",
                        color: "#00d084",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="bi bi-lightning-charge"></i>
                    </div>


                    <span
                      style={{
                        color: "#00d084",
                        border:
                          "1px solid rgba(0,208,132,0.3)",
                        padding: "7px 13px",
                        borderRadius: "50px",
                        fontSize: "0.65rem",
                        fontWeight: "800",
                        letterSpacing: "1px",
                      }}
                    >
                      SHORT-FORM
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    Daily Business
                    <br />
                    Reports
                  </h3>


                  <p
                    style={{
                      color: "#8994a2",
                      lineHeight: "1.8",
                      marginBottom: "28px",
                    }}
                  >
                    Stay informed about the business developments
                    happening right now.

                    <br />
                    <br />

                    Our daily reports break down important
                    business news, market movements, policy
                    changes, company developments, and other
                    events that could affect businesses.
                  </p>


                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                    }}
                  >

                    <i
                      className="bi bi-clock me-2"
                      style={{
                        color: "#00d084",
                      }}
                    ></i>

                    Quick. Relevant. Practical.

                  </div>

                </div>

              </Reveal>

            </div>


            {/* LONG FORM */}

            <div className="col-lg-6">

              <Reveal delay={120}>

                <div
                  style={{
                    height: "100%",
                    padding:
                      "clamp(30px,5vw,50px)",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(145deg,#111821,#0d1319)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >

                  <div
                    style={{
                      position: "absolute",
                      right: "-40px",
                      top: "-40px",
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background:
                        "rgba(255,255,255,0.025)",
                    }}
                  />


                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "35px",
                    }}
                  >

                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "15px",
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="bi bi-journal-text"></i>
                    </div>


                    <span
                      style={{
                        color: "#aab3bf",
                        border:
                          "1px solid rgba(255,255,255,0.15)",
                        padding: "7px 13px",
                        borderRadius: "50px",
                        fontSize: "0.65rem",
                        fontWeight: "800",
                        letterSpacing: "1px",
                      }}
                    >
                      LONG-FORM
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    Strategic
                    <br />
                    Intelligence
                  </h3>


                  <p
                    style={{
                      color: "#8994a2",
                      lineHeight: "1.8",
                      marginBottom: "28px",
                    }}
                  >
                    Go beyond the headline.

                    <br />
                    <br />

                    Our long-form content takes the time to
                    research, investigate, and explain the
                    deeper forces shaping businesses,
                    industries, and economies.
                  </p>


                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                    }}
                  >

                    <i
                      className="bi bi-search me-2"
                      style={{
                        color: "#00d084",
                      }}
                    ></i>

                    Deep. Analytical. Actionable.

                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAILY REPORTS
      ===================================================== */}

      <section
        style={{
          background: "#07090d",
          padding: "110px 0",
        }}
      >

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <Reveal>

                <div
                  style={{
                    color: "#00d084",
                    fontSize: "0.7rem",
                    fontWeight: "800",
                    letterSpacing: "3px",
                    marginBottom: "18px",
                  }}
                >
                  01 / SHORT-FORM CONTENT
                </div>


            <h2
  style={{
    fontSize:
      "clamp(2.5rem,5vw,4.5rem)",
    lineHeight: "1",
    fontWeight: "800",
    letterSpacing: "-3px",
  }}
>
  Know What
  <br />

  <span
    style={{
      color: "#00d084",
    }}
  >
    Matters.
  </span>
</h2>


    <p
  style={{
    color: "#8994a2",
    lineHeight: "1.85",
    marginTop: "25px",
  }}
>
  Our Daily Business Reports are designed for people who want to
  stay informed about what is happening in the business world
  without spending hours searching through business news.
</p>

<p
  style={{
    color: "#8994a2",
    lineHeight: "1.85",
  }}
>
  We cover two types of developments: significant and
  informational.
</p>

<div
  style={{
    marginTop: "30px",
    padding: "22px",
    borderRadius: "14px",
    background: "rgba(0,208,132,0.05)",
    border: "1px solid rgba(0,208,132,0.12)",
  }}
>
  <h5
    style={{
      color: "#00d084",
      fontWeight: "800",
      fontSize: "0.95rem",
      marginBottom: "10px",
    }}
  >
    Significant Developments
  </h5>

  <p
    style={{
      color: "#8994a2",
      fontSize: "0.84rem",
      lineHeight: "1.8",
      margin: 0,
    }}
  >
    These are developments that could create a significant impact
    on an industry, corporation, market, or the wider economy.
    They may signal major changes, risks, opportunities, or
    developments that businesses should pay close attention to.
  </p>
</div>

<div
  style={{
    marginTop: "15px",
    padding: "22px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.07)",
  }}
>
  <h5
    style={{
      color: "#ffffff",
      fontWeight: "800",
      fontSize: "0.95rem",
      marginBottom: "10px",
    }}
  >
    Informational Developments
  </h5>

  <p
    style={{
      color: "#8994a2",
      fontSize: "0.84rem",
      lineHeight: "1.8",
      margin: 0,
    }}
  >
    These are developments shared to keep our audience informed
    about what is happening across businesses, industries, and
    markets. They may not have a major immediate impact, but
    understanding them helps build awareness of the business
    environment.
  </p>
</div>        
                              

              </Reveal>

            </div>


            <div className="col-lg-7">

              <Reveal delay={120}>

                <div
                  style={{
                    background:
                      "linear-gradient(145deg,#111821,#0c1117)",
                    borderRadius: "20px",
                    padding:
                      "clamp(25px,5vw,45px)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >

                  {[
                    {
                      icon: "bi-newspaper",
                      title: "Business News",
                      text:
                        "Important developments affecting companies and industries.",
                    },

                    {
                      icon: "bi-graph-up-arrow",
                      title: "Market Movements",
                      text:
                        "Changes in markets and economic conditions that businesses should watch.",
                    },

                    {
                      icon: "bi-bank",
                      title: "Policy & Regulation",
                      text:
                        "Government decisions and policies that can influence businesses.",
                    },

                    {
                      icon: "bi-buildings",
                      title: "Company Developments",
                      text:
                        "Major decisions, expansions, failures, strategies, and transformations.",
                    },
                  ].map((item, index) => (

                    <div
                      key={item.title}
                      className="d-flex"
                      style={{
                        padding:
                          "22px 0",
                        borderBottom:
                          index !== 3
                            ? "1px solid rgba(255,255,255,0.07)"
                            : "none",
                      }}
                    >

                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          minWidth: "48px",
                          borderRadius: "12px",
                          background:
                            "rgba(0,208,132,0.08)",
                          color: "#00d084",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                        ></i>
                      </div>


                      <div
                        style={{
                          marginLeft: "17px",
                        }}
                      >

                        <h5
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "800",
                            marginBottom: "6px",
                          }}
                        >
                          {item.title}
                        </h5>


                        <p
                          style={{
                            color: "#75808d",
                            fontSize: "0.8rem",
                            lineHeight: "1.7",
                            margin: 0,
                          }}
                        >
                          {item.text}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LONG FORM CONTENT
      ===================================================== */}

      <section
        style={{
          background: "#0b0f15",
          padding: "120px 0",
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center"
              style={{
                maxWidth: "850px",
                margin: "0 auto 70px",
              }}
            >

              <div
                style={{
                  color: "#00d084",
                  fontSize: "0.7rem",
                  fontWeight: "800",
                  letterSpacing: "3px",
                  marginBottom: "18px",
                }}
              >
                02 / LONG-FORM CONTENT
              </div>


              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem,5vw,4.5rem)",
                  fontWeight: "800",
                  lineHeight: "1",
                  letterSpacing: "-3px",
                }}
              >
                Don't Just Know
                <br />

                <span
                  style={{
                    color: "#00d084",
                  }}
                >
                  What Happened.
                </span>
              </h2>


              <p
                style={{
                  color: "#8994a2",
                  lineHeight: "1.9",
                  marginTop: "25px",
                }}
              >
                Understand why it happened, what caused it,
                who is affected, and what it could mean for
                the future.
              </p>

            </div>

          </Reveal>


          {/* THREE PILLARS */}

          <div className="row g-4">

            {/* CASE STUDIES */}

            <div className="col-lg-4">

              <Reveal>

                <div
                  className="pillar-card"
                  style={pillarCardStyle}
                >

                  <div
                    style={numberStyle}
                  >
                    01
                  </div>


                  <div
                    style={iconBoxStyle}
                  >
                    <i className="bi bi-building"></i>
                  </div>


                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    Case Studies
                  </h3>


                  <p
                    style={pillarTextStyle}
                  >
                    We study businesses that succeeded,
                    failed, transformed, or disrupted their
                    industries.

                    <br />
                    <br />

                    From Kenyan companies to global
                    businesses, we break down the decisions,
                    strategies, mistakes, opportunities, and
                    turning points behind their journeys.
                  </p>


                  <div style={bottomLineStyle}>
                    Business Stories
                    <i className="bi bi-arrow-right"></i>
                  </div>

                </div>

              </Reveal>

            </div>


            {/* ECONOMIES */}

            <div className="col-lg-4">

              <Reveal delay={100}>

                <div
                  className="pillar-card"
                  style={pillarCardStyle}
                >

                  <div
                    style={numberStyle}
                  >
                    02
                  </div>


                  <div
                    style={iconBoxStyle}
                  >
                    <i className="bi bi-globe2"></i>
                  </div>


                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    Economies Shaping
                    Kenyan Businesses
                  </h3>


                  <p
                    style={pillarTextStyle}
                  >
                    We explore the Kenyan and global economic
                    forces influencing businesses.

                    <br />
                    <br />

                    From inflation and interest rates to
                    government policy, international trade,
                    technology, and global economic shifts,
                    we explain how macroeconomic changes
                    reach everyday businesses.
                  </p>


                  <div style={bottomLineStyle}>
                    Kenya & Global Economy
                    <i className="bi bi-arrow-right"></i>
                  </div>

                </div>

              </Reveal>

            </div>


            {/* TREND ANALYSIS */}

            <div className="col-lg-4">

              <Reveal delay={200}>

                <div
                  className="pillar-card"
                  style={pillarCardStyle}
                >

                  <div
                    style={numberStyle}
                  >
                    03
                  </div>


                  <div
                    style={iconBoxStyle}
                  >
                    <i className="bi bi-graph-up"></i>
                  </div>


                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                    }}
                  >
                    Trend Analysis
                  </h3>


                  <p
                    style={pillarTextStyle}
                  >
                    We identify trends before they become
                    obvious.

                    <br />
                    <br />

                    By studying consumer behaviour, technology,
                    markets, industries, and emerging business
                    models, we help our audience understand
                    where opportunities and risks may be heading.
                  </p>


                  <div style={bottomLineStyle}>
                    What's Coming Next
                    <i className="bi bi-arrow-right"></i>
                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section
        style={{
          background: "#07090d",
          padding: "120px 0",
        }}
      >

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <Reveal>

                <div
                  style={{
                    color: "#00d084",
                    fontSize: "0.7rem",
                    fontWeight: "800",
                    letterSpacing: "3px",
                    marginBottom: "18px",
                  }}
                >
                  WHO WE CREATE FOR
                </div>


                <h2
                  style={{
                    fontSize:
                      "clamp(2.5rem,5vw,4.5rem)",
                    fontWeight: "800",
                    lineHeight: "1",
                    letterSpacing: "-3px",
                  }}
                >
                  Knowledge For
                  <br />

                  <span
                    style={{
                      color: "#00d084",
                    }}
                  >
                    People Building.
                  </span>
                </h2>


                <p
                  style={{
                    color: "#8994a2",
                    lineHeight: "1.9",
                    marginTop: "25px",
                    maxWidth: "550px",
                  }}
                >
                  Lanvai Media exists for people who want to
                  understand business better — whether they are
                  building a company, learning how business works,
                  or making decisions about where to invest.
                </p>

              </Reveal>

            </div>


            <div className="col-lg-6">

              <div className="row g-3">

                {[
                  {
                    icon: "bi-rocket-takeoff",
                    title: "Entrepreneurs",
                    text:
                      "Learn from real businesses, strategies, failures, and opportunities.",
                  },

                  {
                    icon: "bi-mortarboard",
                    title: "Students",
                    text:
                      "Connect classroom knowledge with real-world businesses and economies.",
                  },

                  {
                    icon: "bi-piggy-bank",
                    title: "Investors",
                    text:
                      "Understand companies, markets, industries, and the forces influencing them.",
                  },

                  {
                    icon: "bi-briefcase",
                    title: "Business Professionals",
                    text:
                      "Stay informed about the markets and trends affecting your decisions.",
                  },
                ].map((item, index) => (

                  <div
                    className="col-sm-6"
                    key={item.title}
                  >

                    <Reveal delay={index * 80}>

                      <div
                        style={{
                          height: "100%",
                          padding: "25px",
                          borderRadius: "15px",
                          background: "#0d1319",
                          border:
                            "1px solid rgba(255,255,255,0.07)",
                        }}
                      >

                        <div
                          style={iconBoxStyle}
                        >
                          <i
                            className={`bi ${item.icon}`}
                          ></i>
                        </div>


                        <h5
                          style={{
                            fontWeight: "800",
                            marginBottom: "9px",
                          }}
                        >
                          {item.title}
                        </h5>


                        <p
                          style={{
                            color: "#737e8b",
                            fontSize: "0.78rem",
                            lineHeight: "1.7",
                            margin: 0,
                          }}
                        >
                          {item.text}
                        </p>

                      </div>

                    </Reveal>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          YOUTUBE CTA
      ===================================================== */}

      <section
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,208,132,0.12), transparent 50%), #0b0f15",
          padding: "130px 0",
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center"
              style={{
                maxWidth: "900px",
                margin: "auto",
              }}
            >

              <div
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  background:
                    "rgba(0,208,132,0.1)",
                  border:
                    "1px solid rgba(0,208,132,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  color: "#00d084",
                  fontSize: "2rem",
                }}
              >
                <i className="bi bi-youtube"></i>
              </div>


              <div
                style={{
                  color: "#00d084",
                  fontSize: "0.7rem",
                  fontWeight: "800",
                  letterSpacing: "3px",
                  marginBottom: "18px",
                }}
              >
                JOIN THE LANVAI COMMUNITY
              </div>


              <h2
                style={{
                  fontSize:
                    "clamp(2.7rem,6vw,5.5rem)",
                  fontWeight: "800",
                  lineHeight: "0.98",
                  letterSpacing: "-4px",
                }}
              >
                Come Learn
                <br />

                <span
                  style={{
                    color: "#00d084",
                  }}
                >
                  With Us.
                </span>
              </h2>


              <p
                style={{
                  color: "#8994a2",
                  maxWidth: "650px",
                  margin: "25px auto 35px",
                  lineHeight: "1.9",
                  fontSize: "1rem",
                }}
              >
                Whether you're an entrepreneur building your
                next company, a student preparing for your
                future, or an investor trying to understand
                where the market is going — Lanvai Media is
                here to help you understand the world of
                business.
              </p>


              <a
                href="YOUR_YOUTUBE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg fw-bold px-5 py-3"
                style={{
                  background: "#00d084",
                  color: "#06100b",
                  border:
                    "1px solid #00d084",
                  borderRadius: "8px",
                }}
              >
                Visit Our YouTube Channel

                <i
                  className="bi bi-arrow-up-right ms-2"
                ></i>
              </a>


              <div
                style={{
                  marginTop: "25px",
                  color: "#555f6c",
                  fontSize: "0.72rem",
                }}
              >
                Research. Understand. Learn. Grow.
              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          INLINE STYLES
      ===================================================== */}

      <style>
        {`

          .pillar-card {
            transition: all 0.3s ease;
          }

          .pillar-card:hover {
            transform: translateY(-8px);
            border-color: rgba(0,208,132,0.3) !important;
            box-shadow: 0 25px 70px rgba(0,0,0,0.25);
          }

      

        

      

          @media (max-width: 767px) {

            h1,
            h2,
            h3 {
              letter-spacing: -2px !important;
            }

          }

        `}
      </style>

    </div>
  );
}


/* =========================================================
   REUSABLE INLINE STYLES
========================================================= */

const pillarCardStyle = {
  height: "100%",
  padding: "clamp(28px,4vw,40px)",
  borderRadius: "20px",
  background:
    "linear-gradient(145deg,#111821,#0d1319)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  position: "relative",
  overflow: "hidden",
};


const numberStyle = {
  color: "#00d084",
  fontSize: "0.7rem",
  fontWeight: "800",
  letterSpacing: "2px",
  marginBottom: "30px",
};


const iconBoxStyle = {
  width: "55px",
  height: "55px",
  borderRadius: "14px",
  background:
    "rgba(0,208,132,0.08)",
  color: "#00d084",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.3rem",
  marginBottom: "22px",
};


const pillarTextStyle = {
  color: "#7f8996",
  fontSize: "0.84rem",
  lineHeight: "1.8",
};


const bottomLineStyle = {
  marginTop: "28px",
  paddingTop: "20px",
  borderTop:
    "1px solid rgba(255,255,255,0.07)",
  color: "#c4ccd5",
  fontSize: "0.72rem",
  fontWeight: "800",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};


export default Info;
<style>
  {`

    .pillar-card {
      transition: all 0.3s ease;
    }

    .pillar-card:hover {
      transform: translateY(-8px);
      border-color: rgba(0,208,132,0.3) !important;
      box-shadow: 0 25px 70px rgba(0,0,0,0.25);
    }

    /* =====================================================
       LANVAI LOGO LIGHTING
    ===================================================== */

    @keyframes logoGlow {
      0%,
      100% {
        transform: scale(0.96);
        opacity: 0.72;
      }

      50% {
        transform: scale(1.06);
        opacity: 1;
      }
    }

    @keyframes logoGlowOuter {
      0%,
      100% {
        transform: scale(0.94);
        opacity: 0.55;
      }

      50% {
        transform: scale(1.08);
        opacity: 0.85;
      }
    }

    @media (max-width: 767px) {

      h1,
      h2,
      h3 {
        letter-spacing: -2px !important;
      }

    }

  `}
</style>