import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  /* =========================================================
     LANVAI CONTACT DETAILS
     Change your social media links ONLY HERE
  ========================================================= */

  const contactDetails = {
    phone: "+254 758 88 7164",
    phoneRaw: "254758887164",
    email: "lanvaicompany@gmail.com",

    socialMedia: {
      facebook: "https://www.facebook.com/share/19NU3YXABm/",
     
      linkedin: "https://www.linkedin.com/in/lanvai-company-8413453b5/?isSelfProfile=true",
   
      youtube: "https://www.youtube.com/@Lanvaiofficial",
      tiktok: "https://www.tiktok.com/@lanvaiofficial",
      reddit: "https://www.reddit.com/user/LanvaiOfficial",
    },
  };

  /* =========================================================
     COPY EMAIL
  ========================================================= */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  /* =========================================================
     SOCIAL MEDIA DATA
  ========================================================= */

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: "f",
      description: "Follow Lanvai on Facebook",
      link: contactDetails.socialMedia.facebook,
      className: "facebook",
    },
  
    {
      name: "LinkedIn",
      icon: "in",
      description: "Connect with Lanvai on LinkedIn",
      link: contactDetails.socialMedia.linkedin,
      className: "linkedin",
    },
 
    {
      name: "YouTube",
      icon: "▶",
      description: "Watch Lanvai on YouTube",
      link: contactDetails.socialMedia.youtube,
      className: "youtube",
    },
    {
      name: "TikTok",
      icon: "♪",
      description: "Follow Lanvai on TikTok",
      link: contactDetails.socialMedia.tiktok,
      className: "tiktok",
    },
    {
      name: "Reddit",
      icon: "●",
      description: "Join the Lanvai community on Reddit",
      link: contactDetails.socialMedia.reddit,
      className: "reddit",
    },
  ];

  return (
    <div className="contact-page">

      {/* =====================================================
          PAGE STYLES
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .contact-page {
          --navy: #071a2d;
          --navy-light: #0d2944;
          --green: #8bd450;
          --green-dark: #6eaf3c;
          --white: #ffffff;
          --light: #f5f8f4;
          --text: #263746;
          --muted: #6b7a88;

          min-height: 100vh;
          background: var(--light);
          color: var(--text);
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(139, 212, 80, 0.18),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              var(--navy) 0%,
              #0b2944 55%,
              #103853 100%
            );

          padding: 110px 25px 120px;
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(139, 212, 80, 0.18);
          border-radius: 50%;
          right: -100px;
          top: -100px;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          right: -220px;
          top: -180px;
        }

        .contact-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1150px;
          margin: 0 auto;
        }

        .contact-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          color: var(--green);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;

          margin-bottom: 22px;
        }

        .contact-label::before {
          content: "";
          width: 35px;
          height: 2px;
          background: var(--green);
        }

        .contact-hero h1 {
          max-width: 800px;
          margin: 0;

          color: white;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .contact-hero h1 span {
          color: var(--green);
        }

        .contact-hero p {
          max-width: 680px;
          margin: 28px 0 0;

          color: rgba(255, 255, 255, 0.76);
          font-size: 18px;
          line-height: 1.8;
        }

        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .contact-content {
          max-width: 1150px;
          margin: -55px auto 0;
          padding: 0 25px 90px;

          position: relative;
          z-index: 5;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        /* =====================================================
           CONTACT CARDS
        ===================================================== */

        .contact-card {
          background: white;
          border-radius: 18px;
          padding: 38px;

          border: 1px solid rgba(7, 26, 45, 0.07);

          box-shadow:
            0 20px 60px rgba(7, 26, 45, 0.08);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 25px 70px rgba(7, 26, 45, 0.12);
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 15px;

          margin-bottom: 28px;
        }

        .card-icon {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;

          background: rgba(139, 212, 80, 0.16);
          color: var(--navy);

          font-size: 22px;
          font-weight: 900;
        }

        .card-heading h2 {
          margin: 0;
          color: var(--navy);
          font-size: 23px;
          font-weight: 850;
        }

        .card-heading p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 14px;
        }

        /* =====================================================
           CONTACT INFORMATION
        ===================================================== */

        .contact-method {
          display: flex;
          align-items: center;
          gap: 17px;

          padding: 18px 0;

          border-bottom: 1px solid #edf1ed;

          text-decoration: none;

          transition: padding-left 0.25s ease;
        }

        .contact-method:last-child {
          border-bottom: none;
        }

        .contact-method:hover {
          padding-left: 7px;
        }

        .method-icon {
          width: 45px;
          height: 45px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          background: var(--navy);
          color: var(--green);

          font-size: 18px;
          font-weight: 800;
        }

        .method-info {
          min-width: 0;
        }

        .method-label {
          display: block;

          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;

          margin-bottom: 4px;
        }

        .method-value {
          display: block;

          color: var(--navy);
          font-size: 16px;
          font-weight: 750;

          word-break: break-word;
        }

        .copy-button {
          margin-left: auto;

          border: none;
          background: #f0f5ee;
          color: var(--navy);

          padding: 8px 12px;
          border-radius: 8px;

          cursor: pointer;

          font-size: 12px;
          font-weight: 800;

          transition: all 0.2s ease;
        }

        .copy-button:hover {
          background: var(--green);
        }

        /* =====================================================
           WHATSAPP CTA
        ===================================================== */

        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          width: 100%;

          margin-top: 25px;
          padding: 15px 20px;

          border-radius: 10px;

          background: var(--green);
          color: var(--navy);

          text-decoration: none;

          font-size: 15px;
          font-weight: 850;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .whatsapp-button:hover {
          transform: translateY(-2px);
          background: #9be460;
        }

        /* =====================================================
           SOCIAL MEDIA
        ===================================================== */

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 13px;

          min-height: 72px;

          padding: 13px;

          border: 1px solid #e8eee7;
          border-radius: 12px;

          background: #fbfdfb;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .social-card:hover {
          transform: translateY(-3px);
          background: white;
          border-color: var(--green);
        }

        .social-icon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          background: var(--navy);
          color: white;

          font-size: 16px;
          font-weight: 900;
        }

        .social-name {
          display: block;

          color: var(--navy);
          font-size: 14px;
          font-weight: 800;
        }

        .social-description {
          display: block;

          margin-top: 3px;

          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
        }

        .social-arrow {
          margin-left: auto;

          color: #9ba8b2;

          font-size: 16px;

          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .social-card:hover .social-arrow {
          color: var(--navy);
          transform: translate(2px, -2px);
        }

        /* =====================================================
           CTA SECTION
        ===================================================== */

        .contact-cta {
          margin-top: 25px;

          padding: 50px 45px;

          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              var(--navy),
              #103753
            );

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;

          overflow: hidden;
          position: relative;
        }

        .contact-cta::after {
          content: "";
          position: absolute;

          width: 250px;
          height: 250px;

          border: 1px solid rgba(139, 212, 80, 0.18);
          border-radius: 50%;

          right: -80px;
          top: -100px;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          margin: 0 0 10px;

          color: white;

          font-size: 30px;
          line-height: 1.2;
          font-weight: 850;
        }

        .cta-content p {
          margin: 0;

          color: rgba(255, 255, 255, 0.68);

          font-size: 15px;
          line-height: 1.7;
        }

        .cta-button {
          position: relative;
          z-index: 2;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 15px 24px;

          border-radius: 9px;

          background: var(--green);
          color: var(--navy);

          text-decoration: none;

          font-size: 14px;
          font-weight: 850;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: #9be460;
        }

        /* =====================================================
           COPIED MESSAGE
        ===================================================== */

        .copied-message {
          position: fixed;

          bottom: 25px;
          right: 25px;

          z-index: 100;

          padding: 13px 18px;

          background: var(--navy);
          color: white;

          border-left: 4px solid var(--green);
          border-radius: 8px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

          font-size: 13px;
          font-weight: 700;

          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 850px) {

          .contact-hero {
            padding: 80px 22px 100px;
          }

          .contact-hero h1 {
            letter-spacing: -2px;
          }

          .contact-content {
            padding-left: 18px;
            padding-right: 18px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 38px 30px;
          }

        }

        @media (max-width: 520px) {

          .contact-hero {
            padding: 65px 18px 90px;
          }

          .contact-hero p {
            font-size: 16px;
          }

          .contact-content {
            margin-top: -40px;
          }

          .contact-card {
            padding: 25px 20px;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .method-value {
            font-size: 14px;
          }

          .copy-button {
            padding: 7px 9px;
          }

          .contact-cta {
            padding: 32px 25px;
          }

          .cta-content h2 {
            font-size: 25px;
          }

          .cta-button {
            width: 100%;
          }
        }

      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-inner">

          <div className="contact-label">
            Get in touch
          </div>

          <h1>
            Let&apos;s build something
            <span> meaningful.</span>
          </h1>

          <p>
            Whether you are looking for strategic insight, business
            intelligence, marketing support, restructuring, or simply
            want to connect with Lanvai, we would love to hear from you.
          </p>

        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <main className="contact-content">

        <div className="contact-grid">

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <section className="contact-card">

            <div className="card-heading">

              <div className="card-icon">
                ✦
              </div>

              <div>
                <h2>Contact Lanvai</h2>

                <p>
                  Reach us directly
                </p>
              </div>

            </div>

            {/* PHONE */}

            <a
              className="contact-method"
              href={`tel:+${contactDetails.phoneRaw}`}
            >

              <div className="method-icon">
                ☎
              </div>

              <div className="method-info">

                <span className="method-label">
                  Phone
                </span>

                <span className="method-value">
                  {contactDetails.phone}
                </span>

              </div>

            </a>

            {/* EMAIL */}

            <div className="contact-method">

              <div className="method-icon">
                @
              </div>

              <div className="method-info">

                <span className="method-label">
                  Email
                </span>

                <span className="method-value">
                  {contactDetails.email}
                </span>

              </div>

              <button
                className="copy-button"
                onClick={copyEmail}
                type="button"
              >
                {copied ? "Copied" : "Copy"}
              </button>

            </div>

            {/* WHATSAPP */}

            <a
              className="whatsapp-button"
              href={`https://wa.me/${contactDetails.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>◉</span>
              Chat with us on WhatsApp
              <span>↗</span>
            </a>

          </section>

          {/* =================================================
              SOCIAL MEDIA
          ================================================= */}

          <section className="contact-card">

            <div className="card-heading">

              <div className="card-icon">
                ◎
              </div>

              <div>
                <h2>Follow Lanvai</h2>

                <p>
                  Connect with us online
                </p>
              </div>

            </div>

            <div className="social-grid">

              {socialPlatforms.map((social) => (

                <a
                  key={social.name}
                  href={social.link}
                  className={`social-card ${social.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <div className="social-icon">
                    {social.icon}
                  </div>

                  <div>
                    <span className="social-name">
                      {social.name}
                    </span>

                    <span className="social-description">
                      {social.description}
                    </span>
                  </div>

                  <span className="social-arrow">
                    ↗
                  </span>

                </a>

              ))}

            </div>

          </section>

        </div>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="contact-cta">

          <div className="cta-content">

            <h2>
              Have an idea or a business challenge?
            </h2>

            <p>
              Start a conversation with Lanvai and let&apos;s
              explore what we can build together.
            </p>

          </div>

          <a
            className="cta-button"
            href={`mailto:${contactDetails.email}`}
          >
            Send us an email
            <span>↗</span>
          </a>

        </section>

      </main>

      {/* =====================================================
          COPY NOTIFICATION
      ===================================================== */}

      {copied && (
        <div className="copied-message">
          Email address copied to clipboard.
        </div>
      )}

    </div>
  );
};

export default Contact;