import { useEffect, useRef, useState } from "react";

/* =========================================================
   COLORS
========================================================= */

const GREEN = "#00D084";
const NAVY = "#06243A";
const CYAN = "#00B8D9";
const TEXT = "#263746";
const MUTED = "#667785";
const LIGHT = "#F5FBFA";
const WHITE = "#FFFFFF";

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 1800;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* =========================================================
   SCROLL REVEAL
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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(25px)",
        transition: `opacity .7s ease ${delay}ms,
                     transform .7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SMALL SECTION LABEL
========================================================= */

function Label({ children }) {
  return (
    <div
      style={{
        color: GREEN,
        fontSize: ".72rem",
        fontWeight: 800,
        letterSpacing: "2.5px",
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  const principles = [
    {
      number: "01",
      title: "Research",
      icon: "bi-search",
      text:
        "Every recommendation begins with evidence, not assumptions. Informed decisions create stronger businesses.",
    },
    {
      number: "02",
      title: "Understanding",
      icon: "bi-eye",
      text:
        "We take time to understand businesses, industries, customers, and challenges before proposing solutions.",
    },
    {
      number: "03",
      title: "Strategy",
      icon: "bi-compass",
      text:
        "Every action should have a clear purpose, measurable direction, and contribute to long-term success.",
    },
    {
      number: "04",
      title: "Clarity",
      icon: "bi-bullseye",
      text:
        "Complex business challenges deserve simple, practical, and actionable solutions that businesses can implement.",
    },
    {
      number: "05",
      title: "Impact",
      icon: "bi-graph-up-arrow",
      text:
        "Success is measured by meaningful business outcomes, sustainable growth, and lasting value—not activity alone.",
    },
  ];

  const stats = [
    {
      target: 50,
      suffix: "+",
      icon: "bi-buildings",
      label: "Businesses Supported",
    },
    {
      target: 50,
      suffix: "+",
      icon: "bi-globe2",
      label: "Industries Researched",
    },
    {
      target: 100,
      suffix: "+",
      icon: "bi-journal-text",
      label: "Marketing Insights Published",
    },
    {
      target: 95,
      suffix: "%",
      icon: "bi-heart",
      label: "Client Satisfaction",
    },
  ];

  return (
    <main
      style={{
        background: WHITE,
        color: TEXT,
        overflow: "hidden",
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "82vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "100px 0",
          background:
            "radial-gradient(circle at 80% 35%, rgba(0,208,132,.12), transparent 28%), linear-gradient(135deg, #FFFFFF 0%, #F2FBFA 100%)",
        }}
      >

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: ".35",
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(6,36,58,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(6,36,58,.035) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="container position-relative">

  <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <Reveal>

                <Label>
                  ABOUT LANVAI
                </Label>

                <h1
                  style={{
                    fontSize:
                      "clamp(3rem, 7vw, 6.3rem)",
                    lineHeight: ".95",
                    fontWeight: 800,
                    letterSpacing: "-5px",
                    color: NAVY,
                    marginBottom: "30px",
                  }}
                >
                  Understanding
                  <br />

                  <span style={{ color: GREEN }}>
                    Before Action.
                  </span>
                </h1>

                <p
                  style={{
                    maxWidth: "680px",
                    color: MUTED,
                    fontSize: "1.08rem",
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  Lanvai is a research-driven business
                  intelligence company Helping businesses growth through research, strategy, amrketing, restructuring and Elite Advertising
                </p>

              </Reveal>

            </div>


            {/* LOGO */}

         {/* LOGO */}

<div className="col-lg-5 d-none d-lg-flex justify-content-center">

  <Reveal delay={150}>

    <div
      style={{
        width: "100%",
        minHeight: "520px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >

      {/* LARGE LOGO — NO CIRCLE */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "520px",
          height: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <img
          src="/loogo.jpeg"
          alt="Lanvai"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter:
              "drop-shadow(0 20px 40px rgba(6,36,58,.14))",
          }}
        />

      </div>

    </div>

  </Reveal>

</div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION / VALUES
      ===================================================== */}

      <section
        style={{
          padding: "110px 0",
          background: LIGHT,
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "750px" }}
            >

              <Label>
                WHAT DEFINES US
              </Label>

              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem, 5vw, 4.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  color: NAVY,
                  margin: 0,
                }}
              >
                Built On A Clear
                <span style={{ color: GREEN }}>
                  {" "}Purpose.
                </span>
              </h2>

            </div>

          </Reveal>


          <div className="row g-4">

            {[
              {
                icon: "🎯",
                label: "OUR MISSION",
                title: "Mission",
                text:
                  "To help businesses make better decisions through research, strategic intelligence, and practical execution.",
              },
              {
                icon: "👁️",
                label: "OUR VISION",
                title: "Vision",
                text:
                  "To become Africa's most trusted business intelligence and strategy company, empowering organizations to grow with confidence through better understanding.",
              },
              {
                icon: "💎",
                label: "OUR VALUES",
                title: "Values",
                text:
                  "Innovation, Integrity, Accessibility, Excellence, and Collaboration.",
                extra:
                  "These values guide everything we do at Lanvai, from product development to customer service.",
              },
            ].map((item, index) => (

              <div className="col-lg-4" key={item.title}>

                <Reveal delay={index * 100}>

                  <div
                    style={{
                      height: "100%",
                      padding: "38px",
                      background: WHITE,
                      border:
                        "1px solid rgba(6,36,58,.08)",
                      borderRadius: "18px",
                      boxShadow:
                        "0 15px 45px rgba(6,36,58,.05)",
                    }}
                  >

                    <div
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "14px",
                        background:
                          "rgba(0,208,132,.09)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.35rem",
                        marginBottom: "28px",
                      }}
                    >
                      {item.icon}
                    </div>

                    <Label>
                      {item.label}
                    </Label>

                    <h3
                      style={{
                        color: NAVY,
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        margin: "10px 0 18px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: MUTED,
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>

                    {item.extra && (
                      <p
                        style={{
                          color: "#8795A1",
                          lineHeight: 1.7,
                          fontSize: ".9rem",
                          marginTop: "18px",
                          marginBottom: 0,
                        }}
                      >
                        {item.extra}
                      </p>
                    )}

                  </div>

                </Reveal>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE LANVAI
      ===================================================== */}

      <section
        style={{
          padding: "110px 0",
          background: WHITE,
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center mx-auto"
              style={{
                maxWidth: "900px",
                marginBottom: "70px",
              }}
            >

              <Label>
                WHY CHOOSE LANVAI
              </Label>

              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem, 5vw, 4.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  color: NAVY,
                  margin: 0,
                }}
              >
                Every Great Strategy
                <br />
                Begins With{" "}
                <span style={{ color: GREEN }}>
                  Understanding.
                </span>
              </h2>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.9,
                  marginTop: "25px",
                }}
              >
                Businesses operate in different industries,
                serve different customers, and face different
                challenges. That is why no two businesses should
                ever receive the same strategy.
              </p>

            </div>

          </Reveal>


          {/* MARKETING */}

          <Reveal>

            <div
              className="row align-items-center mb-5 pb-lg-5"
              style={{
                borderBottom:
                  "1px solid rgba(6,36,58,.09)",
              }}
            >

              <div className="col-lg-5 mb-4 mb-lg-0">

                <Label>
                  MARKETING
                </Label>

                <h3
                  style={{
                    fontSize:
                      "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    lineHeight: 1.1,
                    color: NAVY,
                    margin: 0,
                  }}
                >
                  Marketing Built On Strategy,
                  Not Assumptions
                </h3>

              </div>


              <div className="col-lg-7">

                <p style={bodyText}>
                  Many businesses do not struggle because
                  they lack marketing. They struggle because
                  they lack clarity.
                </p>

                <p style={bodyText}>
                  Too often, businesses invest in campaigns
                  before anyone takes the time to understand
                  their industry, customers, competitors, or
                  the real challenges limiting growth.
                </p>

                <p style={bodyText}>
                  At Lanvai, marketing begins with research.
                  We study markets, customer behaviour,
                  competitive positioning, and business
                  objectives before recommending any strategy.
                </p>

                <div style={highlight}>
                  Businesses don't need more activity—they need
                  clarity and strategies that create measurable
                  growth.
                </div>

              </div>

            </div>

          </Reveal>


          {/* RESTRUCTURING */}

          <Reveal>

            <div className="row align-items-center">

              <div className="col-lg-5 mb-4 mb-lg-0">

                <Label>
                  BUSINESS RESTRUCTURING
                </Label>

                <h3
                  style={{
                    fontSize:
                      "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    lineHeight: 1.1,
                    color: NAVY,
                    margin: 0,
                  }}
                >
                  Structures That Work
                  In Practice
                </h3>

              </div>


              <div className="col-lg-7">

                <p style={bodyText}>
                  Many businesses do not struggle because
                  they lack opportunities. They struggle because
                  they lack the structure required to turn those
                  opportunities into sustainable growth.
                </p>

                <p style={bodyText}>
                  Too often, restructuring focuses on reports
                  and charts before understanding how the
                  business truly operates.
                </p>

                <p style={bodyText}>
                  At Lanvai, restructuring begins with
                  understanding. We take time to understand
                  people, operations, systems, culture, and
                  workflows before recommending change.
                </p>

                <div style={highlight}>
                  Businesses don't need more reports—they need
                  structures that work.
                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section
        style={{
          padding: "110px 0",
          background: LIGHT,
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "800px" }}
            >

              <Label>
                WHAT WE STAND FOR
              </Label>

              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem, 5vw, 4.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  color: NAVY,
                  marginBottom: "20px",
                }}
              >
                Our{" "}
                <span style={{ color: GREEN }}>
                  Principles
                </span>
              </h2>

              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.8,
                }}
              >
                Every decision, every strategy, and every
                solution is guided by a simple philosophy:
                understand first, then act with purpose.
              </p>

            </div>

          </Reveal>


          <div
            style={{
              borderTop:
                "1px solid rgba(6,36,58,.1)",
            }}
          >

            {principles.map((principle, index) => (

              <Reveal
                key={principle.number}
                delay={index * 70}
              >

                <div
                  className="row align-items-center py-4"
                  style={{
                    borderBottom:
                      "1px solid rgba(6,36,58,.1)",
                  }}
                >

                  <div className="col-2 col-lg-1">

                    <span
                      style={{
                        color: "#8B9AA6",
                        fontWeight: 700,
                      }}
                    >
                      {principle.number}
                    </span>

                  </div>


                  <div className="col-2 col-lg-1">

                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: WHITE,
                        border:
                          "1px solid rgba(0,208,132,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: GREEN,
                      }}
                    >
                      <i
                        className={`bi ${principle.icon}`}
                      />
                    </div>

                  </div>


                  <div className="col-8 col-lg-3">

                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: NAVY,
                        margin: 0,
                      }}
                    >
                      {principle.title}
                    </h3>

                  </div>


                  <div className="col-12 col-lg-7 mt-3 mt-lg-0">

                    <p
                      style={{
                        color: MUTED,
                        lineHeight: 1.7,
                        fontSize: ".92rem",
                        margin: 0,
                      }}
                    >
                      {principle.text}
                    </p>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section
        style={{
          padding: "110px 0",
          background:
            "linear-gradient(135deg, #06243A 0%, #08364A 65%, #056C63 100%)",
          color: WHITE,
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "750px" }}
            >

              <Label>
                OUR IMPACT
              </Label>

              <h2
                style={{
                  fontSize:
                    "clamp(2.5rem, 5vw, 4.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  margin: 0,
                }}
              >
                Numbers That{" "}
                <span style={{ color: GREEN }}>
                  Matter.
                </span>
              </h2>

            </div>

          </Reveal>


          <div className="row g-3">

            {stats.map((stat) => (

              <div
                className="col-6 col-lg-3"
                key={stat.label}
              >

                <div
                  className="text-center p-4"
                  style={{
                    minHeight: "230px",
                    border:
                      "1px solid rgba(255,255,255,.12)",
                    borderRadius: "16px",
                    background:
                      "rgba(255,255,255,.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >

                  <i
                    className={`bi ${stat.icon}`}
                    style={{
                      color: GREEN,
                      fontSize: "1.4rem",
                      marginBottom: "18px",
                    }}
                  />

                  <div
                    style={{
                      fontSize:
                        "clamp(2.7rem, 5vw, 4.5rem)",
                      fontWeight: 800,
                      letterSpacing: "-3px",
                    }}
                  >
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                  </div>

                  <div
                    style={{
                      color: "rgba(255,255,255,.7)",
                      fontSize: ".7rem",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginTop: "10px",
                    }}
                  >
                    {stat.label}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        style={{
          padding: "100px 0",
          background: WHITE,
        }}
      >

        <div className="container">

          <Reveal>

            <div
              className="text-center"
              style={{
                border:
                  "1px solid rgba(0,208,132,.25)",
                borderRadius: "22px",
                background:
                  "linear-gradient(135deg, #F4FCFA, #FFFFFF)",
                padding: "70px 30px",
                boxShadow:
                  "0 20px 60px rgba(6,36,58,.07)",
              }}
            >

              <Label>
                UNDERSTAND. STRATEGIZE. GROW.
              </Label>

              <h2
                style={{
                  fontSize:
                    "clamp(2.3rem, 5vw, 4.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  color: NAVY,
                  marginTop: "15px",
                }}
              >
                Better Decisions
                <br />
                Begin With{" "}
                <span style={{ color: GREEN }}>
                  Understanding.
                </span>
              </h2>

              <p
                style={{
                  color: MUTED,
                  maxWidth: "600px",
                  margin: "20px auto 30px",
                  lineHeight: 1.8,
                }}
              >
                We help businesses understand where they are,
                where they need to go, and what it takes to get
                there.
              </p>

              <a
                href="/contact"
                className="btn btn-lg px-4 py-3 fw-bold"
                style={{
                  background: GREEN,
                  border: `1px solid ${GREEN}`,
                  color: NAVY,
                  borderRadius: "10px",
                }}
              >
                Work With Lanvai
                <i className="bi bi-arrow-right ms-2"></i>
              </a>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          INLINE STYLING
      ===================================================== */}

      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
          }

          a {
            transition: all .25s ease;
          }

          a:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,208,132,.2);
          }

          ::selection {
            background: ${GREEN};
            color: ${NAVY};
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

    </main>
  );
}


/* =========================================================
   SHARED INLINE STYLES
========================================================= */

const bodyText = {
  color: MUTED,
  lineHeight: 1.85,
};

const highlight = {
  borderLeft: `3px solid ${GREEN}`,
  paddingLeft: "20px",
  marginTop: "25px",
  color: NAVY,
  fontWeight: 700,
  lineHeight: 1.7,
};

export default About;