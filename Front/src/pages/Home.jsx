import { useEffect, useState } from "react";

const green = "#00d084";
const cyan = "#00cfe8";
const navy = "#071a2b";
const dark = "#07100c";
const light = "#f5faf9";
const gray = "#66727d";

const typingWords = [
  "Lanvai Marketing",
  "Lanvai Restructuring",
  "Lanvai Ad Exchange",
];

const principles = [
  {
    number: "01",
    title: "Research",
    text: "Every recommendation begins with evidence, not assumptions. Informed decisions create stronger businesses.",
  },
  {
    number: "02",
    title: "Understanding",
    text: "We take time to understand businesses, industries, customers, and challenges before proposing solutions.",
  },
  {
    number: "03",
    title: "Strategy",
    text: "Every action should have a clear purpose, measurable direction, and contribute to long-term success.",
  },
  {
    number: "04",
    title: "Clarity",
    text: "Complex business challenges deserve simple, practical, and actionable solutions that businesses can implement.",
  },
  {
    number: "05",
    title: "Impact",
    text: "Success is measured by meaningful business outcomes, sustainable growth, and lasting value—not activity alone.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Businesses supported" },
  { value: 50, suffix: "+", label: "Industries researched" },
  { value: 100, suffix: "+", label: "Marketing insights published" },
  { value: 95, suffix: "%", label: "Client satisfaction" },
];

function Counter({ value, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);

  /* TYPING EFFECT */
  useEffect(() => {
    const word = typingWords[wordIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(word.substring(0, displayText.length + 1));

        if (displayText.length === word.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayText(word.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % typingWords.length);
        }
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timer);
  }, [displayText, deleting, wordIndex]);

  /* START COUNTERS */
  useEffect(() => {
    const section = document.getElementById("stats");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ fontFamily: "Inter, Arial, sans-serif" }}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "92vh",
background: `
  radial-gradient(
    circle at 82% 50%,
    rgba(0, 207, 232, 0.28) 0%,
    rgba(0, 208, 132, 0.18) 25%,
    rgba(7, 55, 65, 0.14) 45%,
    rgba(7, 26, 43, 0) 68%
  ),
  linear-gradient(135deg, ${navy}, #031b1b)
`,
          color: "white",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
      <div
  className="container"
  style={{
    paddingTop: "80px",
    paddingBottom: "80px",
  }}
>


          <div className="row align-items-center">

          <div
  className="col-lg-8"
  style={{
    position: "relative",
    zIndex: 2,
    paddingRight: "30px",
  }}
>


              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  border: `1px solid ${green}`,
                  borderRadius: "30px",
                  color: green,
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                ● Research. Strategy. Growth.
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                  fontWeight: "800",
                  lineHeight: "1.05",
                  marginBottom: "25px",
                }}
              >
                <span style={{ color: green }}>
                  {displayText}
                  <span style={{ color: cyan }}>|</span>
                </span>

                <br />

                <span>Built Around Understanding.</span>
              </h1>

              <p
                style={{
                  color: "#cbd5dc",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  maxWidth: "650px",
                }}
              >
                We help businesses understand where they are, where the
                market is moving, and what it takes to build sustainable
                growth.
              </p>

            </div>


<div
  className="col-lg-4 mt-5 mt-lg-0"
  style={{
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "100%",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
    }}
  >
    <img
      src="/loogo.jpeg"
      alt="Lanvai Marketing and Restructuring"
      style={{
        width: "390px",
        maxWidth: "100%",
        height: "390px",
        objectFit: "contain",
        display: "block",
        filter: "drop-shadow(0 18px 35px rgba(0, 208, 132, 0.10))",
      }}
    />
  </div>

  <div
    style={{
      marginTop: "0px",
      textAlign: "center",
      color: cyan,
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "0.3px",
    }}
  >
    Research • Strategy • Growth
  </div>
</div>



          </div>

        </div>
      </section>


      {/* =====================================================
          MEDIA INTRO
      ===================================================== */}

      <section
        id="media"
        style={{
          background: "white",
          padding: "90px 0",
        }}
      >

        <div className="container">

          <div className="row mb-5">

            <div className="col-lg-7">

              <small
                style={{
                  color: green,
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                WHAT LANVAI DOES
              </small>

              <h2
                style={{
                  color: navy,
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginTop: "15px",
                }}
              >
                Strategy, Structure &
                <span style={{ color: green }}> Market Reach.</span>
              </h2>

            </div>

            <div className="col-lg-5">

              <p
                style={{
                  color: gray,
                  lineHeight: "1.8",
                  marginTop: "15px",
                }}
              >
                Lanvai brings together marketing, business restructuring,
                and advertising through a research-driven approach designed
                to help businesses understand their challenges and identify
                the right opportunities for growth.
              </p>

            </div>

          </div>


          {/* SERVICES */}

          <div className="row g-4">

            {/* MARKETING */}

            <div className="col-lg-4">

              <div
                style={{
                  height: "100%",
                  padding: "35px",
                  borderRadius: "18px",
                  background: dark,
                  color: "white",
                  borderTop: `4px solid ${green}`,
                }}
              >

                <small style={{ color: green, fontWeight: "800" }}>
                  01 — MARKETING
                </small>

                <div
                  style={{
                    fontSize: "2rem",
                    color: green,
                    margin: "25px 0",
                  }}
                >
                  ↗
                </div>

                <h3 style={{ fontSize: "2rem", fontWeight: "800" }}>
                  Lanvai
                  <br />
                  <span style={{ color: green }}>
                    Marketing
                  </span>
                </h3>

                <p
                  style={{
                    color: "#aeb9c2",
                    lineHeight: "1.8",
                  }}
                >
                  We build research-driven marketing strategies that
                  help businesses understand their customers, strengthen
                  their positioning, reach the right audiences, and
                  accelerate sustainable growth.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-4">

                  {[
                    "Research",
                    "Branding",
                    "Digital Growth",
                    "Advertising",
                    "SEO",
                    "Content",
                  ].map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "20px",
                        border: "1px solid #345",
                        fontSize: "12px",
                        color: "#cbd5dc",
                      }}
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* RESTRUCTURING */}

            <div className="col-lg-4">

              <div
                style={{
                  height: "100%",
                  padding: "35px",
                  borderRadius: "18px",
                  background: navy,
                  color: "white",
                  borderTop: `4px solid ${cyan}`,
                }}
              >

                <small style={{ color: cyan, fontWeight: "800" }}>
                  02 — RESTRUCTURING
                </small>

                <div
                  style={{
                    fontSize: "2rem",
                    color: cyan,
                    margin: "25px 0",
                  }}
                >
                  +
                </div>

                <h3 style={{ fontSize: "2rem", fontWeight: "800" }}>
                  Lanvai
                  <br />
                  <span style={{ color: cyan }}>
                    Restructuring
                  </span>
                </h3>

                <p
                  style={{
                    color: "#c1cbd3",
                    lineHeight: "1.8",
                  }}
                >
                  We help businesses identify operational weaknesses,
                  improve financial performance, redesign systems,
                  strengthen leadership, and build structures capable
                  of supporting sustainable growth.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-4">

                  {[
                    "Turnaround",
                    "Operations",
                    "Finance",
                    "Leadership",
                    "Efficiency",
                    "Growth",
                  ].map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "20px",
                        border: "1px solid #456",
                        fontSize: "12px",
                        color: "#d3dde3",
                      }}
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* AD EXCHANGE */}

            <div className="col-lg-4">

              <div
                style={{
                  height: "100%",
                  padding: "35px",
                  borderRadius: "18px",
                  background: light,
                  color: navy,
                  border: `1px solid ${cyan}`,
                  borderTop: `4px solid ${cyan}`,
                }}
              >

                <small style={{ color: "#078da5", fontWeight: "800" }}>
                  03 — AD EXCHANGE
                </small>

                <div
                  style={{
                    fontSize: "2rem",
                    color: "#078da5",
                    margin: "25px 0",
                  }}
                >
                  ◎
                </div>

                <h3 style={{ fontSize: "2rem", fontWeight: "800" }}>
                  Lanvai
                  <br />
                  <span style={{ color: "#078da5" }}>
                    Ad Exchange
                  </span>
                </h3>

                <p
                  style={{
                    color: gray,
                    lineHeight: "1.8",
                  }}
                >
                  We connect advertisers with relevant publishers
                  and audiences, creating targeted advertising
                  opportunities that improve reach, relevance,
                  and commercial results.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-4">

                  {[
                    "Advertisers",
                    "Publishers",
                    "Audiences",
                    "Campaigns",
                    "Reach",
                    "Results",
                  ].map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "20px",
                        background: "white",
                        border: "1px solid #d7e1e5",
                        fontSize: "12px",
                        color: gray,
                      }}
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>


          <div
            style={{
              marginTop: "50px",
              padding: "20px",
              borderLeft: `4px solid ${green}`,
              background: light,
              color: navy,
              fontWeight: "700",
            }}
          >
            We don't just provide services —
            <span style={{ color: green }}>
              {" "}we build solutions around understanding.
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE LANVAI
      ===================================================== */}

      <section
        style={{
          background: navy,
          color: "white",
          padding: "90px 0",
        }}
      >

        <div className="container">

          <div className="row mb-5">

            <div className="col-lg-6">

              <small
                style={{
                  color: green,
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                WHY CHOOSE LANVAI
              </small>

              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginTop: "15px",
                }}
              >
                Businesses Need
                <span style={{ color: green }}> Clarity.</span>
              </h2>

            </div>

            <div className="col-lg-5 ms-auto">

              <p
                style={{
                  color: "#c2cdd5",
                  lineHeight: "1.8",
                }}
              >
                We believe meaningful growth begins with understanding.
                Before recommending action, we take time to understand
                the business behind the challenge.
              </p>

            </div>

          </div>


          <div className="row g-4">

            {/* MARKETING */}

            <div className="col-lg-6">

              <div
                style={{
                  padding: "35px",
                  background: "#0b2630",
                  borderRadius: "18px",
                  border: "1px solid rgba(0,208,132,.25)",
                }}
              >

                <div
                  style={{
                    color: green,
                    marginBottom: "20px",
                    fontWeight: "700",
                  }}
                >
                  01 — MARKETING
                </div>

                <h3 style={{ fontWeight: "800" }}>
                  Marketing Built On Strategy,
                  <br />
                  Not Assumptions.
                </h3>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  Many businesses do not struggle because they lack
                  marketing. They struggle because they lack clarity.
                </p>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  Too often, businesses invest in campaigns before anyone
                  takes the time to understand their industry, customers,
                  competitors, or the real challenges limiting growth.
                </p>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  At Lanvai, marketing begins with research. We study
                  markets, customer behaviour, competitive positioning,
                  and business objectives before recommending any strategy.
                </p>

                <div
                  style={{
                    marginTop: "25px",
                    padding: "18px",
                    borderLeft: `3px solid ${green}`,
                    color: green,
                  }}
                >
                  Businesses don’t need more activity—they need clarity
                  and strategies that create measurable growth.
                </div>

              </div>

            </div>


            {/* RESTRUCTURING */}

            <div className="col-lg-6">

              <div
                style={{
                  padding: "35px",
                  background: "#0b2630",
                  borderRadius: "18px",
                  border: `1px solid ${cyan}`,
                }}
              >

                <div
                  style={{
                    color: cyan,
                    marginBottom: "20px",
                    fontWeight: "700",
                  }}
                >
                  02 — BUSINESS RESTRUCTURING
                </div>

                <h3 style={{ fontWeight: "800" }}>
                  Structures That
                  <br />
                  Work In Practice.
                </h3>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  Many businesses do not struggle because they lack
                  opportunities. They struggle because they lack the
                  structure required to turn those opportunities into
                  sustainable growth.
                </p>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  Too often, restructuring focuses on reports and charts
                  before understanding how the business truly operates.
                </p>

                <p style={{ color: "#c3ced5", lineHeight: "1.8" }}>
                  At Lanvai, restructuring begins with understanding.
                  We take time to understand people, operations, systems,
                  culture, and workflows before recommending change.
                </p>

                <div
                  style={{
                    marginTop: "25px",
                    padding: "18px",
                    borderLeft: `3px solid ${cyan}`,
                    color: cyan,
                  }}
                >
                  Businesses don’t need more reports—they need structures
                  that work.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section
        id="principles"
        style={{
          background: light,
          padding: "90px 0",
        }}
      >

        <div className="container">

          <div className="row mb-5">

            <div className="col-lg-7">

              <small
                style={{
                  color: green,
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                WHAT WE STAND FOR
              </small>

              <h2
                style={{
                  color: navy,
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginTop: "15px",
                }}
              >
                Our
                <span style={{ color: green }}> Principles.</span>
              </h2>

            </div>

            <div className="col-lg-5">

              <p
                style={{
                  color: gray,
                  lineHeight: "1.8",
                }}
              >
                Every decision, every strategy, and every solution is
                guided by a simple philosophy:
              </p>

              <strong style={{ color: navy }}>
                Understand first, then act with purpose.
              </strong>

            </div>

          </div>


          <div className="row g-3">

            {principles.map((principle) => (

              <div
                className="col-md-6 col-lg"
                key={principle.number}
              >

                <div
                  style={{
                    height: "100%",
                    background: "white",
                    padding: "25px",
                    borderRadius: "15px",
                    border: "1px solid #dce8e8",
                    borderTop: `3px solid ${green}`,
                  }}
                >

                  <div
                    style={{
                      color: cyan,
                      fontWeight: "800",
                    }}
                  >
                    {principle.number}
                  </div>

                  <div
                    style={{
                      color: green,
                      fontSize: "1.5rem",
                      margin: "15px 0",
                    }}
                  >
                    →
                  </div>

                  <h3
                    style={{
                      color: navy,
                      fontSize: "1.3rem",
                      fontWeight: "800",
                    }}
                  >
                    {principle.title}
                  </h3>

                  <p
                    style={{
                      color: gray,
                      lineHeight: "1.7",
                      fontSize: ".9rem",
                    }}
                  >
                    {principle.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section
        id="stats"
        style={{
          background: dark,
          color: "white",
          padding: "90px 0",
        }}
      >

        <div className="container">

          <div className="row mb-5">

            <div className="col-lg-6">

              <small
                style={{
                  color: green,
                  fontWeight: "800",
                  letterSpacing: "2px",
                }}
              >
                LANVAI BY THE NUMBERS
              </small>

              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginTop: "15px",
                }}
              >
                Insight With
                <span style={{ color: cyan }}> Measurable Impact.</span>
              </h2>

            </div>

            <div className="col-lg-5 ms-auto">

              <p
                style={{
                  color: "#c2cdd5",
                  lineHeight: "1.8",
                }}
              >
                Our work is ultimately measured by the businesses,
                industries, and people we help move forward.
              </p>

            </div>

          </div>


          <div className="row g-3">

            {stats.map((stat, index) => (

              <div
                className="col-6 col-lg-3"
                key={stat.label}
              >

                <div
                  style={{
                    padding: "30px 20px",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                >

                  <div
                    style={{
                      color: green,
                      fontSize: "2.8rem",
                      fontWeight: "800",
                    }}
                  >
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      started={statsStarted}
                    />
                  </div>

                  <div
                    style={{
                      color: "#c5d0d7",
                      marginTop: "10px",
                    }}
                  >
                    {stat.label}
                  </div>

                  <div
                    style={{
                      color: cyan,
                      marginTop: "15px",
                      fontSize: "12px",
                    }}
                  >
                    0{index + 1}
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
          background: "white",
          padding: "80px 0",
        }}
      >

        <div className="container">

          <div
            style={{
              background: `linear-gradient(135deg, ${navy}, #063c3c)`,
              borderRadius: "20px",
              padding: "50px",
              color: "white",
            }}
          >

            <div className="row align-items-center">

              <div className="col-lg-8">

                <small
                  style={{
                    color: green,
                    fontWeight: "800",
                    letterSpacing: "2px",
                  }}
                >
                  THE LANVAI APPROACH
                </small>

                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    marginTop: "15px",
                  }}
                >
                  Understand First.
                  <br />
                  <span style={{ color: cyan }}>
                    Grow With Purpose.
                  </span>
                </h2>

                <p style={{ color: "#c5d0d7" }}>
                  Better decisions start with better understanding.
                </p>

              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

           <a
  href="/services"
  style={{
    display: "inline-block",
    padding: "14px 25px",
    background: green,
    color: navy,
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "800",
  }}
>
  Discover Our services
  <span style={{ marginLeft: "10px" }}>
    ↗
  </span>
</a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}