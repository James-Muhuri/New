import { useState } from "react";

/* ============================================================
   SERVICES DATA
============================================================ */

const divisions = {
  marketing: {
    name: "Marketing, Branding & Growth Acceleration",
    shortName: "Marketing",
    color: "#0dcaf0",
    darkColor: "#087f9d",
    desc:
      "We don’t just market — we operate as your fully outsourced marketing department. From strategy to execution, we bring CMO-level leadership, creative excellence, and data-driven performance together under one roof — delivering growth without gaps.",
    categories: [
      {
        heading: "Digital Growth & Advertising",
        items: [
          {
            name: "Digital Campaigns That Convert",
            detail: [
              "Design and execute multi-channel and omni-channel campaigns across paid search, display, social, and programmatic.",
              "Use data-driven targeting to attract high-intent customers and maximize ROI.",
              "Continuous optimization based on real-time performance analytics to improve conversion rates.",
            ],
          },
          {
            name: "Google, YouTube, Meta, TikTok, LinkedIn & Microsoft Ads",
            detail: [
              "Launch targeted campaigns across major advertising platforms including Google, YouTube, Meta, TikTok, LinkedIn, and Microsoft Ads.",
              "Run high-intent campaigns on Google Ads including Search Ads, Shopping Ads, Performance Max, Display Banners, and Remarketing.",
              "Promote video content through YouTube Ads including TrueView Skippable Ads, In-Stream Video Ads, and Bumper Ads.",
              "Reach social audiences using Meta Ads across Facebook and Instagram including Image Ads, Video Ads, Carousel Ads, Stories Ads, Catalog Ads, and Lead Generation Ads.",
              "Engage mobile-first audiences on TikTok Ads through In-Feed Video Ads, Spark Ads, TopView Ads, and Branded Hashtag Campaigns.",
              "Generate professional B2B leads through LinkedIn Ads including Sponsored Content, Video Ads, Carousel Ads, and Lead Generation Forms.",
              "Expand reach through Microsoft Ads on Bing and partner networks.",
              "Track and optimize CTR, CPC, conversions, ROAS, and audience engagement metrics.",
            ],
          },
          {
            name: "Social Media Marketing",
            detail: [
              "Build and grow vibrant communities on Meta, X, TikTok, and LinkedIn.",
              "Craft creative storytelling that aligns with your brand values and resonates with your audience.",
              "Execute engagement strategies including influencer partnerships, contests, and live events.",
            ],
          },
          {
            name: "Content Marketing & Thought Leadership",
            detail: [
              "Develop strategic content calendars aligned with business goals.",
              "Create high-quality blogs, whitepapers, ebooks, case studies, and videos that educate and engage.",
              "Leverage content distribution channels to boost organic reach and authority.",
            ],
          },
          {
            name: "Marketing Automation & CRM Integration",
            detail: [
              "Design automated email campaigns and nurture sequences for lead conversion.",
              "Implement CRM systems and lead scoring to personalize customer journeys.",
              "Analyze campaign effectiveness to refine messaging and maximize conversions.",
            ],
          },
          {
            name: "Data Analytics & Performance Measurement",
            detail: [
              "Develop advanced analytics dashboards for real-time campaign monitoring.",
              "Conduct A/B testing and conversion rate optimization to increase ROI.",
              "Use attribution modeling to understand and improve marketing touchpoints.",
            ],
          },
        ],
      },

      {
        heading: "Broadcast & Media Advertising",
        items: [
          {
            name: "Television Advertising Campaigns",
            detail: [
              "Plan and execute national or regional TV advertising campaigns.",
              "Create compelling TV commercials that build brand awareness and drive consumer action.",
              "Handle media buying and placement across major networks and programs.",
              "Monitor campaign reach, frequency, and brand lift to optimize performance.",
            ],
          },
          {
            name: "Radio Advertising",
            detail: [
              "Develop engaging radio commercials and sponsorship segments.",
              "Target audiences through strategic station and program selection.",
              "Track listener engagement and campaign effectiveness.",
            ],
          },
        ],
      },

      {
        heading: "Creative & Branding Studio",
        items: [
          {
            name: "Brand Identity Design",
            detail: [
              "Develop logos, color palettes, typography, and brand guidelines that capture your unique essence.",
              "Craft authentic brand voices and messaging frameworks that connect emotionally with customers.",
              "Ensure brand consistency across all touchpoints for a memorable and trustworthy presence.",
            ],
          },
          {
            name: "Photography & Video Production",
            detail: [
              "Produce high-quality visual content — from product photography to cinematic brand films.",
              "Conceptualize and direct shoots that showcase your story, culture, and value proposition.",
              "Deliver polished assets optimized for web, social, and advertising platforms.",
            ],
          },
          {
            name: "Graphic Design",
            detail: [
              "Design marketing collateral including brochures, banners, billboards, infographics, and digital ads.",
              "Balance aesthetics with functionality for maximum impact and brand reinforcement.",
              "Maintain pixel-perfect quality across all print and digital materials.",
            ],
          },
          {
            name: "Brand Strategy & Positioning",
            detail: [
              "Conduct market research and competitor analysis to define unique positioning.",
              "Develop value propositions and storytelling frameworks that resonate with target audiences.",
              "Create long-term brand equity plans for sustainable market leadership.",
            ],
          },
        ],
      },

      {
        heading: "Websites, SEO & eCommerce",
        items: [
          {
            name: "Website Design & Maintenance",
            detail: [
              "Create fully custom, responsive, and scalable websites optimized for speed, usability, and conversions.",
              "Implement UX/UI best practices to ensure intuitive navigation and engaging user experiences.",
              "Provide ongoing website maintenance, updates, backups, and security monitoring.",
            ],
          },
          {
            name: "Search Engine Optimization (SEO)",
            detail: [
              "Conduct thorough keyword research to capture high-value search intent.",
              "Optimize site architecture, metadata, and content for improved rankings.",
              "Build authoritative backlinks and monitor SEO performance continuously.",
              "Implement On-Page SEO including title tags, headers, meta descriptions, and content optimization.",
              "Implement Off-Page SEO through link building, influencer outreach, and brand mentions.",
              "Perform Technical SEO including speed optimization, structured data, crawlability, and mobile-friendliness.",
              "Local SEO for businesses targeting local audiences and Google Maps.",
              "E-commerce SEO for product pages, category pages, and shopping search optimization.",
              "Content SEO including blogs, articles, and evergreen content.",
              "SEO Analytics & Monitoring using platforms such as Google Search Console, Ahrefs, or SEMrush.",
            ],
          },
          {
            name: "eCommerce Development",
            detail: [
              "Develop scalable and high-performance online stores with seamless payment gateways and order management.",
              "Integrate CRM, inventory, and customer service systems for efficient operations.",
              "Enhance user experience to drive higher average order values, repeat purchases, and long-term growth.",
            ],
          },
          {
            name: "UX/UI Consulting & Conversion Optimization",
            detail: [
              "Conduct user research and persona development to understand customer behavior.",
              "Analyze heatmaps, user flows, and usability testing for continuous improvement.",
              "Optimize landing pages and funnels to maximize lead capture and sales.",
            ],
          },
        ],
      },

      {
        heading: "Public Relations & Influencer Marketing",
        items: [
          {
            name: "Media Relations & Press Management",
            detail: [
              "Develop and distribute compelling press releases and media kits.",
              "Build relationships with journalists, bloggers, and industry publications.",
              "Manage crisis communications to protect and enhance brand reputation.",
            ],
          },
          {
            name: "Influencer Partnerships & Ambassador Programs",
            detail: [
              "Identify and engage influencers aligned with your brand values and audience.",
              "Create authentic campaigns that leverage influencer reach and trust.",
              "Manage ongoing ambassador programs to sustain brand advocacy.",
            ],
          },
          {
            name: "Event Marketing & Brand Activations",
            detail: [
              "Plan and execute experiential events, product launches, and sponsorships.",
              "Engage target audiences through immersive brand experiences.",
              "Measure event impact and leverage content for extended reach.",
            ],
          },
        ],
      },

      {
        heading: "Experiential & Offline Marketing",
        items: [
          {
            name: "Trade Shows & Exhibitions",
            detail: [
              "Design impactful booths and displays that attract and engage attendees.",
              "Coordinate logistics, staffing, and lead capture technologies.",
              "Develop follow-up strategies to convert event leads into customers.",
            ],
          },
          {
            name: "Direct Mail & Local Promotions",
            detail: [
              "Craft targeted direct mail campaigns with personalized messaging.",
              "Execute local promotions, sponsorships, and community events.",
              "Track response rates and optimize campaigns for ROI.",
            ],
          },
          {
            name: "Guerrilla Marketing & Community Engagement",
            detail: [
              "Develop creative, low-cost marketing activations that generate buzz.",
              "Leverage local partnerships and grassroots efforts to build brand loyalty.",
              "Use social amplification to maximize impact beyond physical locations.",
            ],
          },
        ],
      },
    ],
  },

  restructuring: {
    name: "Restructuring & Business Revival",
    shortName: "Restructuring",
    color: "#6610f2",
    darkColor: "#4b0db8",
    desc:
      "When your business hits turbulence, we don’t panic — we engineer the comeback. From crisis to control, we guide companies to rise stronger, sharper, and more profitable than ever.",
    categories: [
      {
        heading: "Operational Excellence",
        items: [
          {
            name: "Performance Turnaround",
            detail: [
              "Identify operational bottlenecks, redundancies, and inefficiencies.",
              "Align KPIs and dashboards to track meaningful business metrics.",
              "Analyze product and service profitability to focus on high-margin activities.",
              "Implement urgent cost control and revenue optimization strategies.",
              "Provide hands-on leadership guidance through critical transitions.",
            ],
          },
          {
            name: "Leadership Restructuring",
            detail: [
              "Transform organizational culture to foster agility and accountability.",
              "Align leadership teams with strategic goals for sustained success.",
              "Implement leadership changes to drive turnaround and growth.",
            ],
          },
          {
            name: "Interim Management",
            detail: [
              "Deploy seasoned executives with deep restructuring expertise.",
              "Stabilize operations and financials during periods of uncertainty.",
              "Drive financial strategy overhauls and stakeholder communications.",
              "Bridge leadership gaps until permanent appointments are made.",
            ],
          },
          {
            name: "Strategic Business Reviews",
            detail: [
              "Conduct end-to-end business diagnostics covering financial, operational, and organizational aspects.",
              "Evaluate product-market fit and competitive positioning.",
              "Perform SWOT analysis to uncover growth blockers and opportunities.",
              "Deliver actionable insights and a roadmap for transformation.",
            ],
          },
          {
            name: "Operational Restructuring",
            detail: [
              "Modernize supply chain, production processes, and technology platforms.",
              "Implement lean methodologies and operational excellence frameworks.",
              "Streamline workflows to boost efficiency and reduce costs.",
            ],
          },
          {
            name: "Cost Restructuring & Expense Rationalization",
            detail: [
              "Conduct detailed expense audits to identify savings opportunities.",
              "Negotiate with vendors to optimize contract terms and reduce spend.",
              "Recommend outsourcing strategies to improve cost efficiency.",
            ],
          },
          {
            name: "Stakeholder Management & Communication",
            detail: [
              "Develop communication plans for investors, creditors, and employees.",
              "Manage crisis communications to maintain stakeholder confidence.",
              "Facilitate transparent dialogue during restructuring and turnaround.",
            ],
          },
          {
            name: "Human Capital Restructuring",
            detail: [
              "Optimize workforce through redeployment, reskilling, or layoffs.",
              "Redesign organizational structures to align with strategic goals.",
              "Implement change management to ensure smooth transitions.",
            ],
          },
        ],
      },

      {
        heading: "Financial Transformation",
        items: [
          {
            name: "Debt & Financial Advisory",
            detail: [
              "Design tailored debt restructuring plans to avoid insolvency.",
              "Negotiate with banks, creditors, and investors for favorable terms.",
              "Assist in capital raising including bridge financing and equity infusions.",
              "Support compliance with financial covenants and loan agreements.",
            ],
          },
          {
            name: "Liquidity & Cash Flow Optimization",
            detail: [
              "Develop 13-week rolling cash flow models for enhanced liquidity visibility.",
              "Optimize accounts payable and receivable cycles to accelerate cash conversion.",
              "Improve inventory management to release working capital.",
              "Prioritize costs to focus resources on high-impact activities.",
            ],
          },
          {
            name: "M&A & Exit Strategy",
            detail: [
              "Plan mergers, acquisitions, or exit strategies with expert guidance.",
              "Perform valuation, due diligence, and deal structuring support.",
              "Manage stakeholder communications throughout the transaction process.",
              "Ensure seamless integration or transition to maximize value.",
            ],
          },
          {
            name: "Bankruptcy Advisory & Insolvency Support",
            detail: [
              "Advise on legal restructuring options and formal insolvency processes.",
              "Assist in managing bankruptcy filings and proceedings.",
              "Act as turnaround agents during bankruptcy to preserve business value.",
            ],
          },
          {
            name: "Risk Management & Compliance",
            detail: [
              "Assess operational, financial, and regulatory risks during restructuring.",
              "Implement controls and compliance frameworks to mitigate exposure.",
              "Prepare organizations for audits and regulatory reviews.",
            ],
          },
        ],
      },

      {
        heading: "Innovation & Growth Enablement",
        items: [
          {
            name: "Technology & Digital Transformation",
            detail: [
              "Leverage digital tools and data analytics to improve decision-making.",
              "Implement AI-driven cash flow forecasting and risk management.",
              "Modernize IT infrastructure to support scalable growth.",
            ],
          },
          {
            name: "Growth & Innovation Advisory",
            detail: [
              "Identify new market opportunities and growth avenues post-turnaround.",
              "Run innovation workshops and realign product portfolios.",
              "Support scalable business model development and commercialization.",
            ],
          },
          {
            name: "Post-Merger Integration",
            detail: [
              "Integrate operations, culture, and systems after M&A transactions.",
              "Ensure smooth transition to maximize synergies and value realization.",
              "Manage stakeholder expectations and change management post-deal.",
            ],
          },
        ],
      },
    ],
  },
};

/* ============================================================
   INDUSTRY STRATEGIES
============================================================ */

const industryStrategies = [
  {
    id: "consumer",
    icon: "🛒",
    name: "FMCG / Consumer Goods",
    color: "#0dcaf0",
    message:
      "We help FMCG brands scale market penetration while optimizing distribution, margins, and sales efficiency.",
    marketing: [
      "Retail penetration strategy",
      "Distributor growth systems",
      "Product positioning",
      "Consumer psychology marketing",
      "Shopper marketing",
      "Trade marketing",
      "Brand awareness campaigns",
      "Product launch strategy",
      "Pricing perception optimization",
      "Retail shelf visibility strategy",
      "Packaging optimization",
      "Omnichannel campaigns",
      "Sales activation campaigns",
      "Market expansion",
    ],
    restructuring: [
      "Distribution network restructuring",
      "Route-to-market optimization",
      "Inventory management restructuring",
      "Pricing model redesign",
      "Margin improvement systems",
      "Sales team restructuring",
      "Procurement efficiency",
      "Warehouse optimization",
      "Demand forecasting systems",
      "Supply chain redesign",
    ],
  },

  {
    id: "technology",
    icon: "💻",
    name: "Technology & AI",
    color: "#6610f2",
    message:
      "We engineer scalable growth systems for technology companies while restructuring operations for sustainable scale.",
    marketing: [
      "SaaS growth marketing",
      "Product-market fit optimization",
      "User acquisition systems",
      "Funnel optimization",
      "Conversion architecture",
      "SEO systems",
      "Content authority building",
      "Community growth",
      "Performance marketing",
      "Investor brand positioning",
      "Go-to-market strategy",
    ],
    restructuring: [
      "Business model restructuring",
      "Monetization redesign",
      "Operational efficiency",
      "AI automation integration",
      "Product strategy restructuring",
      "Subscription retention systems",
      "Customer lifecycle redesign",
      "Team structure optimization",
      "Revenue architecture",
    ],
  },

  {
    id: "finance",
    icon: "🏦",
    name: "Financial Services",
    color: "#198754",
    message:
      "We help financial institutions increase trust, improve acquisition, and modernize operational systems.",
    marketing: [
      "Trust-driven brand positioning",
      "Lead generation systems",
      "Financial product education campaigns",
      "Client acquisition systems",
      "Customer retention strategy",
      "Digital onboarding optimization",
      "Referral systems",
    ],
    restructuring: [
      "Process efficiency redesign",
      "Customer experience optimization",
      "Risk workflow restructuring",
      "Branch efficiency optimization",
      "Digital transformation",
      "CRM restructuring",
      "Revenue leakage analysis",
    ],
  },

  {
    id: "retail",
    icon: "🛍️",
    name: "Retail & Supermarkets",
    color: "#fd7e14",
    message:
      "We help retailers increase customer spending while restructuring operations for profitability.",
    marketing: [
      "Foot traffic campaigns",
      "Loyalty programs",
      "Basket size optimization",
      "Seasonal campaign systems",
      "Store promotions",
      "Local area marketing",
      "Customer retention systems",
      "Pricing communication",
    ],
    restructuring: [
      "Inventory restructuring",
      "Dead stock reduction",
      "Branch profitability analysis",
      "Supplier optimization",
      "Store layout optimization",
      "Operations redesign",
      "Staff productivity systems",
      "POS analytics systems",
    ],
  },

  {
    id: "manufacturing",
    icon: "🏭",
    name: "Manufacturing Industries",
    color: "#6c757d",
    message:
      "We improve industrial efficiency while creating scalable market demand.",
    marketing: [
      "B2B acquisition",
      "Distributor marketing",
      "Industrial branding",
      "Export market positioning",
      "Dealer network marketing",
    ],
    restructuring: [
      "Production efficiency systems",
      "Cost reduction",
      "Waste reduction",
      "Supply chain restructuring",
      "Process optimization",
      "Lean operations",
      "Procurement redesign",
    ],
  },

  {
    id: "energy",
    icon: "💡",
    name: "Energy & Utilities",
    color: "#ffc107",
    message:
      "We help energy and utility organizations build trust, improve customer engagement, and strengthen operational efficiency.",
    marketing: [
      "Market education campaigns",
      "Trust-building campaigns",
      "Corporate positioning",
      "Community awareness",
    ],
    restructuring: [
      "Operational efficiency",
      "Cost optimization",
      "Route and maintenance systems",
      "Customer billing efficiency",
      "Process redesign",
    ],
  },

  {
    id: "logistics",
    icon: "🚛",
    name: "Logistics & Transportation",
    color: "#20c997",
    message:
      "We help logistics and transportation businesses win more customers while engineering efficient delivery and fleet systems.",
    marketing: [
      "B2B lead generation",
      "Fleet positioning",
      "Corporate partnerships",
      "Customer acquisition",
    ],
    restructuring: [
      "Fleet efficiency systems",
      "Delivery optimization",
      "Fuel cost reduction",
      "Route optimization",
      "Driver productivity systems",
      "Warehouse logistics redesign",
    ],
  },

  {
    id: "realestate",
    icon: "🏗️",
    name: "Real Estate & Construction",
    color: "#d63384",
    message:
      "We help property and construction businesses generate qualified demand while strengthening sales, delivery, and operational systems.",
    marketing: [
      "Property marketing",
      "Lead generation",
      "Investor positioning",
      "Project branding",
      "Trust architecture",
      "Sales funnel systems",
      "Geo-targeted marketing",
      "Real estate SEO",
    ],
    restructuring: [
      "Sales process restructuring",
      "Agent performance systems",
      "Lead management systems",
      "CRM optimization",
      "Construction cost efficiency",
      "Project delivery systems",
      "Customer journey redesign",
    ],
  },

  {
    id: "media",
    icon: "📺",
    name: "Media & Advertising",
    color: "#e83e8c",
    message:
      "We help media businesses grow audiences, diversify revenue, and build more efficient commercial operations.",
    marketing: [
      "Audience growth",
      "Monetization growth",
      "Content growth systems",
      "Brand partnerships",
    ],
    restructuring: [
      "Revenue diversification",
      "Audience retention",
      "Operational efficiency",
      "Advertising optimization",
    ],
  },

  {
    id: "ecommerce",
    icon: "🛒",
    name: "E-commerce",
    color: "#0d6efd",
    message:
      "We help e-commerce businesses improve acquisition, conversion, retention, and the economics behind sustainable digital commerce.",
    marketing: [
      "Conversion optimization",
      "Paid ads systems",
      "Retention systems",
      "Email marketing",
      "Customer lifetime value optimization",
      "SEO",
      "Marketplace optimization",
    ],
    restructuring: [
      "Fulfillment optimization",
      "Return reduction systems",
      "Inventory systems",
      "Checkout optimization",
      "Profitability redesign",
    ],
  },

  {
    id: "agriculture",
    icon: "🌾",
    name: "Agriculture & Food Supply Chain",
    color: "#198754",
    message:
      "We help agriculture and food businesses expand market access while strengthening distribution, processing, and supply chain economics.",
    marketing: [
      "Market access systems",
      "Buyer acquisition",
      "Brand positioning",
      "Export positioning",
    ],
    restructuring: [
      "Farm-to-market systems",
      "Distribution redesign",
      "Cost optimization",
      "Processing optimization",
      "Supply chain redesign",
    ],
  },

  {
    id: "healthcare",
    icon: "⚕️",
    name: "Healthcare & Medical Services",
    color: "#dc3545",
    message:
      "We help healthcare institutions build patient trust, improve operational systems, optimize patient experience, and engineer sustainable healthcare growth.",
    marketing: [
      "Patient Acquisition Strategy",
      "Medical Brand Positioning",
      "Reputation & Trust Management",
      "Online Reputation Systems",
      "Review Management",
      "Patient Testimonial Systems",
      "Authority-Building Content",
      "Local Healthcare Marketing",
      "Healthcare SEO & Search Visibility",
      "Medical SEO",
      "Google Profile Optimization",
      "Service Ranking Systems",
      "Patient Retention Systems",
      "Follow-Up Systems",
      "Patient Reminder Automation",
      "Long-Term Care Retention",
      "Loyalty Systems",
      "Specialist Service Marketing",
      "Digital Healthcare Transformation",
      "Appointment Systems",
      "Online Consultation Systems",
      "Patient CRM Systems",
      "Healthcare Automation",
    ],
    restructuring: [
      "Patient Journey Restructuring",
      "Reception Flow Optimization",
      "Waiting Time Systems",
      "Patient Communication Systems",
      "Appointment Scheduling Optimization",
      "Hospital Operations Optimization",
      "Workflow Systems",
      "Department Coordination",
      "Resource Allocation",
      "Staff Productivity",
      "Revenue Optimization",
      "Service Pricing Optimization",
      "Billing Process Improvement",
      "Revenue Leakage Identification",
      "Payment Efficiency Systems",
      "Healthcare Process Automation",
      "Automated Bookings",
      "Patient Records Systems",
      "Follow-Up Automation",
      "Queue Management",
      "Staff Performance Restructuring",
      "Doctor Scheduling",
      "Nurse Coordination",
      "Internal Communication",
      "Expansion & Branch Strategy",
      "Expansion Feasibility",
      "Branch Performance Systems",
      "Growth Architecture",
      "Medical Brand Restructuring",
      "Healthcare Reputation Repositioning",
    ],
    sectors: [
      "Hospitals",
      "Clinics",
      "Diagnostic centers",
      "Dental clinics",
      "Pharmacies",
      "Specialist practices",
      "Telemedicine",
      "Medical equipment providers",
      "Wellness centers",
      "Fertility clinics",
      "Mental wellness providers",
    ],
  },

  {
    id: "education",
    icon: "🎓",
    name: "Education & Learning Institutions",
    color: "#6f42c1",
    message:
      "We help education institutions increase enrollment, strengthen trust and positioning, improve student retention, and build efficient growth systems.",
    marketing: [
      "Student Enrollment Growth Systems",
      "University Admissions Funnels",
      "School Enrollment Campaigns",
      "Online Academy Lead Generation",
      "Institutional Brand Positioning",
      "Premium School Positioning",
      "STEM Authority Positioning",
      "International School Positioning",
      "Career-Focused Institution Branding",
      "Parent Trust Marketing",
      "Parent Communication Systems",
      "School Reputation Building",
      "Community Positioning",
      "Student Recruitment Marketing",
      "Digital Recruitment Campaigns",
      "Search Optimization",
      "Scholarship Promotions",
      "Education Event Campaigns",
      "Education SEO & Search Visibility",
      "Content Authority Systems",
      "International Student Acquisition",
      "Cross-Border Recruitment Systems",
      "Alumni & Referral Growth Systems",
    ],
    restructuring: [
      "Enrollment Funnel Optimization",
      "Inquiry Handling Systems",
      "Admissions Conversion",
      "Parent Communication",
      "Student Onboarding",
      "Operational Efficiency Restructuring",
      "Department Workflow Optimization",
      "Internal Communication Systems",
      "Process Restructuring",
      "Curriculum Market Alignment",
      "Program Positioning",
      "Demand Alignment",
      "Industry Partnerships",
      "Revenue Diversification",
      "Short Course Development",
      "Online Learning Programs",
      "Certification Programs",
      "Executive Programs",
      "Student Retention Systems",
      "Student Experience Optimization",
      "Student Support Systems",
      "Digital Transformation",
      "LMS Integration",
      "Admissions CRM",
      "Digital Enrollment",
      "Branch Expansion Strategy",
      "Market Analysis",
      "Expansion Planning",
      "Branch Profitability Systems",
      "Institutional Reputation Restructuring",
      "Trust & Authority Rebuilding",
      "Institutional Positioning",
      "Credibility Architecture",
    ],
    sectors: [
      "Schools",
      "Universities",
      "Colleges",
      "Online academies",
      "EdTech",
      "Professional training institutions",
      "Coaching centers",
      "Skill academies",
      "Tuition centers",
      "International schools",
      "Corporate learning institutions",
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function Services() {
  const [activeDivision, setActiveDivision] = useState("marketing");
  const [openCategory, setOpenCategory] = useState(0);

  const [activeIndustry, setActiveIndustry] = useState(
    industryStrategies[0]
  );

  const [strategyType, setStrategyType] = useState("marketing");

  const currentDivision = divisions[activeDivision];

  const selectDivision = (division) => {
    setActiveDivision(division);
    setOpenCategory(0);
  };

  return (
    <>
      {/* ======================================================
          INLINE STYLES
      ======================================================= */}

      <style>{`
        :root {
          --svc-black: #06111d;
          --svc-navy: #091827;
          --svc-blue: #0d6efd;
          --svc-text: #172437;
          --svc-muted: #6b7b90;
          --svc-light: #f5f8fc;
          --svc-border: #dfe6ee;
        }

        .services-page {
          overflow: hidden;
          background: #fff;
          color: var(--svc-text);
          font-family: "DM Sans", sans-serif;
        }

        .services-page h1,
        .services-page h2,
        .services-page h3,
        .services-page h4 {
          font-family: "Manrope", sans-serif;
        }

        /* ====================================================
           HERO
        ==================================================== */

       .services-hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;

  background:
    radial-gradient(
      circle at 82% 50%,
      rgba(0, 207, 232, 0.20) 0%,
      rgba(0, 208, 132, 0.11) 20%,
      rgba(0, 207, 232, 0.045) 36%,
      rgba(7, 26, 43, 0) 56%
    ),

    radial-gradient(
      circle at 18% 85%,
      rgba(0, 208, 132, 0.08) 0%,
      rgba(0, 208, 132, 0.025) 28%,
      transparent 50%
    ),

    radial-gradient(
      circle at 50% 0%,
      rgba(0, 207, 232, 0.045) 0%,
      transparent 38%
    ),

    linear-gradient(
      135deg,
      #020b13 0%,
      #061522 38%,
      #071a2b 68%,
      #031b1b 100%
    );
}

        .services-grid {
          position: absolute;
          inset: 0;
          opacity: .16;
          background-image:
            linear-gradient(
              rgba(255,255,255,.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.06) 1px,
              transparent 1px
            );
          background-size: 65px 65px;
        }

        .services-hero-content {
          position: relative;
          z-index: 2;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          color: #76aaff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .services-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: #4388ff;
        }

        .services-hero h1 {
          max-width: 950px;
          margin: 0;
          font-size: clamp(54px, 7vw, 100px);
          line-height: .98;
          letter-spacing: -5px;
          font-weight: 800;
        }

        .services-hero h1 span {
          color: #5f9bff;
        }

        .services-hero-description {
          max-width: 720px;
          margin-top: 32px;
          color: #a8b8ca;
          font-size: 18px;
          line-height: 1.8;
        }

        .services-hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 35px;
        }

        .services-hero-pill {
          padding: 9px 14px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 100px;
          color: #aab9cb;
          background: rgba(255,255,255,.04);
          font-size: 12px;
        }

    
      

     

  .services-hero-logo {
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  width: min(590px, 46vw);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.services-hero-logo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  filter:
    drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))
    drop-shadow(0 0 35px rgba(0, 207, 232, 0.10));
}

.services-hero-logo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(
    0 25px 45px rgba(0, 0, 0, .25)
  );
}

.services-hero::after {
  content: "";
  position: absolute;
  width: 620px;
  height: 620px;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(0, 207, 232, 0.10) 0%,
      rgba(0, 208, 132, 0.055) 25%,
      rgba(0, 207, 232, 0.018) 45%,
      transparent 70%
    );

  filter: blur(20px);
  pointer-events: none;
  z-index: 0;
}

        /* ====================================================
           SECTION BASICS
        ==================================================== */

        .services-section {
          padding: 120px 0;
        }

        .services-section-light {
          background: var(--svc-light);
        }

        .services-section-dark {
          color: #fff;
          background: #06111d;
        }

        .services-section-eyebrow {
          margin-bottom: 18px;
          color: var(--svc-blue);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .services-section-title {
          max-width: 800px;
          margin: 0;
          color: var(--svc-black);
          font-size: clamp(42px,5vw,68px);
          line-height: 1.03;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .services-section-title span {
          color: var(--svc-blue);
        }

        .services-section-title-light {
          color: #fff;
        }

        .services-section-intro {
          max-width: 650px;
          color: var(--svc-muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .services-section-intro-light {
          color: #92a4b9;
        }

        /* ====================================================
           DIVISION SWITCHER
        ==================================================== */

        .division-switcher {
          display: flex;
          gap: 10px;
          padding: 7px;
          border: 1px solid var(--svc-border);
          border-radius: 10px;
          background: #fff;
        }

        .division-button {
          flex: 1;
          padding: 16px 22px;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #68778a;
          font-weight: 700;
          text-align: left;
          transition: all .3s ease;
        }

        .division-button:hover {
          color: var(--svc-text);
          background: #f3f6fa;
        }

        .division-button.active {
          color: #fff;
          background: var(--division-color);
          box-shadow: 0 10px 25px rgba(0,0,0,.12);
        }

        .division-number {
          display: block;
          margin-bottom: 5px;
          opacity: .55;
          font-size: 10px;
          letter-spacing: 1px;
        }

        /* ====================================================
           DIVISION HERO CARD
        ==================================================== */

        .division-card {
          position: relative;
          overflow: hidden;
          margin-top: 25px;
          padding: 50px;
          border-radius: 12px;
          color: #fff;
          background: var(--division-color);
        }

        .division-card::after {
          position: absolute;
          content: "";
          right: -100px;
          bottom: -180px;
          width: 450px;
          height: 450px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
        }

        .division-card-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
        }

        .division-card h3 {
          margin-bottom: 20px;
          font-size: clamp(34px,4vw,52px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 800;
        }

        .division-card p {
          max-width: 780px;
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 16px;
          line-height: 1.8;
        }

        /* ====================================================
           SERVICE CATEGORIES
        ==================================================== */

        .service-category {
          overflow: hidden;
          margin-bottom: 12px;
          border: 1px solid var(--svc-border);
          border-radius: 9px;
          background: #fff;
          transition: all .25s ease;
        }

        .service-category.open {
          border-color: #b9c9db;
          box-shadow: 0 15px 40px rgba(10,35,65,.06);
        }

        .service-category-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 25px;
          border: 0;
          background: transparent;
          color: var(--svc-text);
          text-align: left;
        }

        .service-category-header:hover {
          background: #f8fafc;
        }

        .category-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .category-number {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 6px;
          color: var(--division-color);
          background: color-mix(
            in srgb,
            var(--division-color) 12%,
            white
          );
          font-size: 11px;
          font-weight: 800;
        }

        .category-heading {
          font-size: 17px;
          font-weight: 800;
        }

        .category-count {
          margin-left: 8px;
          color: #9aa8b8;
          font-size: 11px;
          font-weight: 500;
        }

        .category-chevron {
          color: #8090a2;
          font-size: 18px;
          transition: transform .3s ease;
        }

        .service-category.open .category-chevron {
          transform: rotate(180deg);
        }

        .service-items {
          padding: 0 20px 20px;
        }

        .service-item {
          margin-top: 8px;
          padding: 18px 20px;
          border: 1px solid #e8edf2;
          border-radius: 7px;
          background: #fbfcfe;
          transition: all .25s ease;
        }

        .service-item:hover {
          border-color: #ccd8e5;
          background: #fff;
          transform: translateX(3px);
        }

        .service-item-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--svc-text);
          font-size: 14px;
          font-weight: 800;
        }

        .service-item-title span {
          color: var(--division-color);
        }

        .service-detail-list {
          margin: 12px 0 0 20px;
          padding: 0;
        }

        .service-detail-list li {
          margin-bottom: 7px;
          color: #718094;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ====================================================
           SERVICE SIDE SUMMARY
        ==================================================== */

        .service-side-card {
          position: sticky;
          top: 30px;
          padding: 35px;
          border-radius: 10px;
          color: #fff;
          background: #071522;
        }

        .service-side-number {
          color: var(--division-color);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .service-side-card h3 {
          margin-top: 25px;
          font-size: 32px;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .service-side-card p {
          color: #8fa1b6;
          font-size: 14px;
          line-height: 1.8;
        }

        .service-side-list {
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
        }

        .service-side-list li {
          display: flex;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          color: #c4cfdb;
          font-size: 13px;
        }

        .service-side-list li::before {
          content: "✓";
          color: var(--division-color);
          font-weight: 800;
        }

        /* ====================================================
           INDUSTRY STRATEGIES
        ==================================================== */

        .strategy-intro {
          max-width: 780px;
          margin-bottom: 50px;
        }

        .industry-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 25px;
        }

        .industry-menu {
          padding: 10px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 10px;
          background: rgba(255,255,255,.035);
        }

        .industry-menu-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #9aaabd;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          transition: all .25s ease;
        }

        .industry-menu-button:hover {
          background: rgba(255,255,255,.05);
          color: #fff;
        }

        .industry-menu-button.active {
          color: #fff;
          background: var(--industry-color);
          box-shadow: 0 8px 25px rgba(0,0,0,.15);
        }

        .industry-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 6px;
          background: rgba(255,255,255,.07);
          font-size: 16px;
        }

        .industry-menu-button.active .industry-icon {
          background: rgba(255,255,255,.15);
        }

        .strategy-panel {
          min-height: 620px;
          padding: 45px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px;
          background: rgba(255,255,255,.035);
        }

        .strategy-panel-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 35px;
        }

        .strategy-industry-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--industry-color);
          box-shadow: 0 15px 35px rgba(0,0,0,.15);
          font-size: 28px;
        }

        .strategy-panel h3 {
          margin: 0;
          font-size: clamp(30px,4vw,48px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .strategy-message {
          max-width: 800px;
          margin-bottom: 35px;
          padding: 22px;
          border-left: 3px solid var(--industry-color);
          background: rgba(255,255,255,.045);
          color: #b9c7d7;
          font-size: 15px;
          line-height: 1.8;
        }

        .strategy-switcher {
          display: inline-flex;
          padding: 5px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 7px;
          background: rgba(0,0,0,.12);
        }

        .strategy-switch-button {
          padding: 12px 22px;
          border: 0;
          border-radius: 5px;
          background: transparent;
          color: #8092a7;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .strategy-switch-button.active {
          color: #fff;
          background: var(--industry-color);
        }

        .strategy-list {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 10px;
        }

        .strategy-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-height: 55px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 7px;
          background: rgba(255,255,255,.025);
          color: #b8c6d5;
          font-size: 13px;
          line-height: 1.5;
          transition: all .25s ease;
        }

        .strategy-list-item:hover {
          border-color: var(--industry-color);
          background: rgba(255,255,255,.05);
          transform: translateY(-2px);
        }

        .strategy-list-item::before {
          content: "→";
          flex-shrink: 0;
          color: var(--industry-color);
          font-weight: 800;
        }

        .industry-sectors {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 30px;
        }

        .industry-sector {
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 5px;
          color: #8495a9;
          font-size: 10px;
        }

        /* ====================================================
           STRATEGY CLOSING
        ==================================================== */

        .strategy-closing {
          margin-top: 60px;
          padding: 35px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 10px;
          text-align: center;
          background: rgba(255,255,255,.025);
        }

        .strategy-closing p {
          max-width: 850px;
          margin: auto;
          color: #a9b8c9;
          font-size: 18px;
          line-height: 1.8;
        }

        /* ====================================================
           CTA
        ==================================================== */

        .services-cta {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          background: #fff;
        }

        .services-cta-box {
          position: relative;
          overflow: hidden;
          padding: 70px;
          border-radius: 12px;
          color: #fff;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(13,110,253,.25),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #071522,
              #0b2138
            );
        }

        .services-cta-box h2 {
          margin: 0;
          font-size: clamp(40px,5vw,65px);
          line-height: 1.02;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .services-cta-box h2 span {
          color: #609bff;
        }

        .services-cta-box p {
          max-width: 600px;
          margin-top: 25px;
          color: #91a4ba;
          line-height: 1.7;
        }

        .services-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 24px;
          border-radius: 6px;
          color: #fff;
          background: #0d6efd;
          font-weight: 700;
          transition: all .3s ease;
        }

        .services-cta-button:hover {
          color: #fff;
          background: #3d82ff;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(13,110,253,.3);
        }

        /* ====================================================
           RESPONSIVE
        ==================================================== */

        @media (max-width: 991px) {

          .services-section {
            padding: 85px 0;
          }

          .hero-orb {
            display: none;
          }

          .industry-layout {
            grid-template-columns: 1fr;
          }

          .industry-menu {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 5px;
          }

          .service-side-card {
            position: static;
            margin-bottom: 30px;
          }

          .strategy-panel {
            min-height: auto;
          }
        }

        @media (max-width: 767px) {

          .services-hero {
            min-height: 90vh;
          }

          .services-hero h1 {
            font-size: 50px;
            letter-spacing: -3px;
          }

          .services-hero-description {
            font-size: 16px;
          }

          .services-section {
            padding: 70px 0;
          }

          .services-section-title {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .division-switcher {
            flex-direction: column;
          }

          .division-card {
            padding: 35px 25px;
          }

          .division-card h3 {
            font-size: 34px;
          }

          .service-category-header {
            padding: 18px;
          }

          .category-heading {
            font-size: 14px;
          }

          .category-count {
            display: none;
          }

          .service-items {
            padding: 0 12px 12px;
          }

          .strategy-panel {
            padding: 28px 20px;
          }

          .strategy-panel-top {
            flex-direction: column;
          }

          .strategy-list {
            grid-template-columns: 1fr;
          }

          .industry-menu {
            grid-template-columns: 1fr;
          }

          .strategy-switcher {
            width: 100%;
          }

          .strategy-switch-button {
            flex: 1;
            padding: 11px 8px;
            font-size: 10px;
          }

          .services-cta-box {
            padding: 45px 25px;
          }

          .services-cta-box h2 {
            font-size: 40px;
          }
        }
      `}</style>

      <main className="services-page">

        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="services-hero">

          <div className="services-grid"></div>

         <div className="services-hero-logo">
  <img
    src="/loogo.jpeg"
    alt="Lanvai"
  />
</div>
          <div className="container services-hero-content">

            <div className="row">

              <div className="col-lg-9">

                <div className="services-eyebrow">
                  What We Do
                </div>

                <h1>
                  Business growth
                  <br />
                  <span>engineered with purpose.</span>
                </h1>

                <p className="services-hero-description">
                  Lanvai combines marketing, strategic growth,
                  business restructuring, and industry-specific
                  intelligence to help organizations move from
                  uncertainty to measurable progress.
                </p>

                <div className="services-hero-pills">

                  <div className="services-hero-pill">
                    Research
                  </div>

                  <div className="services-hero-pill">
                    Strategy
                  </div>

                  <div className="services-hero-pill">
                  Growth
                  </div>

               

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            SERVICES INTRO
        ==================================================== */}

        <section className="services-section">

          <div className="container">

            <div className="row mb-5">

              <div className="col-lg-7">

                <div className="services-section-eyebrow">
                  OUR SERVICES
                </div>

                <h2 className="services-section-title">
                  Two disciplines.
                  <br />
                  <span>One business objective.</span>
                </h2>

              </div>

              <div className="col-lg-5">

                <p className="services-section-intro">
                  Businesses rarely have isolated problems.
                  Marketing affects revenue. Operations affect
                  growth. Structure affects performance.
                </p>

                <p className="services-section-intro">
                  That is why Lanvai brings together two core
                  disciplines: marketing and restructuring —
                  connected by research, strategy, and Growth
                  
                </p>

              </div>

            </div>


            {/* DIVISION SWITCHER */}

            <div
              className="division-switcher"
              style={{
                "--division-color":
                  currentDivision.color,
              }}
            >

              <button
                className={`division-button ${
                  activeDivision === "marketing"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectDivision("marketing")
                }
                style={{
                  "--division-color":
                    divisions.marketing.color,
                }}
              >

                <span className="division-number">
                  01
                </span>

                Marketing

              </button>


              <button
                className={`division-button ${
                  activeDivision === "restructuring"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectDivision("restructuring")
                }
                style={{
                  "--division-color":
                    divisions.restructuring.color,
                }}
              >

                <span className="division-number">
                  02
                </span>

                Business Restructuring

              </button>

            </div>


            {/* DIVISION INTRO */}

            <div
              className="division-card"
              style={{
                "--division-color":
                  currentDivision.color,
              }}
            >

              <div className="division-card-content">

                <div
                  style={{
                    marginBottom: "15px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    opacity: ".65",
                  }}
                >
                  0{activeDivision === "marketing" ? "1" : "2"}
                  &nbsp; / &nbsp;
                  CORE DISCIPLINE
                </div>

                <h3>
                  {currentDivision.name}
                </h3>

                <p>
                  {currentDivision.desc}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            SERVICE DETAILS
        ==================================================== */}

        <section className="services-section services-section-light">

          <div className="container">

            <div className="row">

              {/* LEFT */}

              <div className="col-lg-4">

                <div
                  className="service-side-card"
                  style={{
                    "--division-color":
                      currentDivision.color,
                  }}
                >

                  <div className="service-side-number">
                    0{activeDivision === "marketing" ? "1" : "2"}
                  </div>

                  <h3>
                    {currentDivision.shortName}
                  </h3>

                  <p>
                    {currentDivision.desc}
                  </p>

                  <ul className="service-side-list">

                    {currentDivision.categories.map(
                      (category) => (
                        <li key={category.heading}>
                          {category.heading}
                        </li>
                      )
                    )}

                  </ul>

                </div>

              </div>


              {/* RIGHT */}

              <div className="col-lg-8">

                <div
                  style={{
                    marginBottom: "25px",
                  }}
                >

                  <div className="services-section-eyebrow">
                    CAPABILITIES
                  </div>

                  <h2
                    style={{
                      margin: 0,
                      fontSize: "32px",
                      letterSpacing: "-1px",
                      fontWeight: 800,
                    }}
                  >
                    What we can do for your business.
                  </h2>

                </div>


                <div
                  style={{
                    "--division-color":
                      currentDivision.color,
                  }}
                >

                  {currentDivision.categories.map(
                    (category, categoryIndex) => {

                      const isOpen =
                        openCategory === categoryIndex;

                      return (
                        <div
                          className={`service-category ${
                            isOpen ? "open" : ""
                          }`}
                          key={category.heading}
                        >

                          <button
                            className="service-category-header"
                            onClick={() =>
                              setOpenCategory(
                                isOpen
                                  ? -1
                                  : categoryIndex
                              )
                            }
                          >

                            <div className="category-left">

                              <div
                                className="category-number"
                                style={{
                                  "--division-color":
                                    currentDivision.color,
                                }}
                              >
                                {String(
                                  categoryIndex + 1
                                ).padStart(2, "0")}
                              </div>

                              <div>

                                <div className="category-heading">
                                  {category.heading}

                                  <span className="category-count">
                                    {category.items.length}{" "}
                                    capabilities
                                  </span>
                                </div>

                              </div>

                            </div>

                            <div className="category-chevron">
                              {isOpen ? "−" : "+"}
                            </div>

                          </button>


                          {isOpen && (
                            <div className="service-items">

                              {category.items.map(
                                (item) => (

                                  <div
                                    className="service-item"
                                    key={item.name}
                                  >

                                    <div className="service-item-title">

                                      <span
                                        style={{
                                          color:
                                            currentDivision.color,
                                        }}
                                      >
                                        →
                                      </span>

                                      {item.name}

                                    </div>


                                    <ul className="service-detail-list">

                                      {item.detail.map(
                                        (detail, index) => (

                                          <li
                                            key={index}
                                          >
                                            {detail}
                                          </li>

                                        )
                                      )}

                                    </ul>

                                  </div>

                                )
                              )}

                            </div>
                          )}

                        </div>
                      );
                    }
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            INDUSTRY STRATEGIES
        ==================================================== */}

        <section className="services-section services-section-dark">

          <div className="container">

            <div className="strategy-intro">

              <div className="services-section-eyebrow">
                INDUSTRY STRATEGIES
              </div>

              <h2 className="services-section-title services-section-title-light">
                Strategy changes
                <br />
                <span>with the industry.</span>
              </h2>

              <p className="services-section-intro services-section-intro-light mt-4">
                We do not believe in generic business solutions.
                The economics, customers, competitive dynamics,
                operating models, and growth opportunities of every
                industry are different.
              </p>

              <p className="services-section-intro services-section-intro-light">
                Our industry strategies translate Lanvai's core
                capabilities into practical growth and
                restructuring systems built around the realities
                of each sector.
              </p>

            </div>


            <div
              className="industry-layout"
              style={{
                "--industry-color":
                  activeIndustry.color,
              }}
            >

              {/* =================================================
                  INDUSTRY MENU
              ================================================== */}

              <div className="industry-menu">

                {industryStrategies.map(
                  (industry) => (

                    <button
                      key={industry.id}
                      className={`industry-menu-button ${
                        activeIndustry.id === industry.id
                          ? "active"
                          : ""
                      }`}
                      style={{
                        "--industry-color":
                          industry.color,
                      }}
                      onClick={() => {
                        setActiveIndustry(industry);
                        setStrategyType("marketing");
                      }}
                    >

                      <span className="industry-icon">
                        {industry.icon}
                      </span>

                      <span>
                        {industry.name}
                      </span>

                    </button>

                  )
                )}

              </div>


              {/* =================================================
                  STRATEGY PANEL
              ================================================== */}

              <div
                className="strategy-panel"
                style={{
                  "--industry-color":
                    activeIndustry.color,
                }}
              >

                <div className="strategy-panel-top">

                  <div>

                    <div
                      style={{
                        marginBottom: "15px",
                        color:
                          activeIndustry.color,
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      INDUSTRY STRATEGY
                    </div>

                    <h3>
                      {activeIndustry.name}
                    </h3>

                  </div>

                  <div className="strategy-industry-icon">
                    {activeIndustry.icon}
                  </div>

                </div>


                {/* MESSAGE */}

                <div className="strategy-message">
                  <strong
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      color: "#fff",
                    }}
                  >
                    The Lanvai Perspective
                  </strong>

                  {activeIndustry.message}
                </div>


                {/* MARKETING / RESTRUCTURING */}

                <div className="strategy-switcher">

                  <button
                    className={`strategy-switch-button ${
                      strategyType === "marketing"
                        ? "active"
                        : ""
                    }`}
                    style={{
                      "--industry-color":
                        activeIndustry.color,
                    }}
                    onClick={() =>
                      setStrategyType("marketing")
                    }
                  >
                    Marketing Strategy
                  </button>

                  <button
                    className={`strategy-switch-button ${
                      strategyType === "restructuring"
                        ? "active"
                        : ""
                    }`}
                    style={{
                      "--industry-color":
                        activeIndustry.color,
                    }}
                    onClick={() =>
                      setStrategyType("restructuring")
                    }
                  >
                    Restructuring Strategy
                  </button>

                </div>


                {/* STRATEGY ITEMS */}

                <div className="strategy-list">

                  {activeIndustry[
                    strategyType
                  ].map((item, index) => (

                    <div
                      className="strategy-list-item"
                      key={`${item}-${index}`}
                      style={{
                        "--industry-color":
                          activeIndustry.color,
                      }}
                    >
                      {item}
                    </div>

                  ))}

                </div>


                {/* SECTORS */}

                {activeIndustry.sectors && (
                  <div>

                    <div
                      style={{
                        marginTop: "35px",
                        color: "#74869a",
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Sector Coverage
                    </div>

                    <div className="industry-sectors">

                      {activeIndustry.sectors.map(
                        (sector) => (

                          <span
                            className="industry-sector"
                            key={sector}
                          >
                            {sector}
                          </span>

                        )
                      )}

                    </div>

                  </div>
                )}

              </div>

            </div>


            {/* STRATEGY CLOSING */}

            <div className="strategy-closing">

              <p>
                <strong
                  style={{
                    color: "#fff",
                  }}
                >
                  Different industries require different
                  strategies.
                </strong>{" "}
                Lanvai combines industry understanding with
                marketing and restructuring expertise to build
                solutions around the actual economics and
                operating realities of your business.
              </p>

            </div>

          </div>

        </section>


        {/* ====================================================
            FINAL CTA
        ==================================================== */}

        <section className="services-cta">

          <div className="container">

            <div className="services-cta-box">

              <div className="row align-items-center">

                <div className="col-lg-8">

                  <div
                    className="services-eyebrow"
                    style={{
                      marginBottom: "18px",
                    }}
                  >
                    THE LANVAI APPROACH
                  </div>

                  <h2>
                    Don't start with
                    <br />
                    <span>activity. Start with strategy.</span>
                  </h2>

                  <p>
                    Whether the challenge is growth, market
                    positioning, operational performance, or
                    business restructuring, we begin by
                    understanding what is actually happening.
                  </p>

                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                  <a
                    href="#contact"
                    className="services-cta-button"
                  >
                    Talk To Lanvai
                    <span className="ms-2">↗</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}