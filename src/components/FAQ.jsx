import React, { useState } from "react";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import "../styles/FAQ.css";

const faqData = [
  {
    category: "Ideation & Validation",
    questions: [
      { q: "How do I know if my startup idea is unique or has market potential?", a: "Conduct competitor research and identify your unique value proposition." },
      { q: "What methods can I use to validate my business idea before launching?", a: "Use surveys, interviews, and small-scale pilots to test customer interest." },
      { q: "How do I conduct market research with minimal investment?", a: "Leverage free online surveys, Google Trends, and competitor analysis tools." },
      { q: "What is customer discovery, and how do I perform it effectively?", a: "Engage with potential users to understand their needs and pain points before product development." },
      { q: "How can I protect my startup idea from being copied by others?", a: "Sign NDAs, secure trademarks, and avoid publicly disclosing your business model too early." },
    ],
  },
  {
    category: "Customer Segmentation & Market Understanding",
    questions: [
      { q: "What is customer segmentation, and why is it important for startups?", a: "Segmentation helps identify and target specific customer groups effectively." },
      { q: "How do I identify my target audience or early adopters?", a: "Analyze demographics, behaviors, and pain points to find your ideal users." },
      { q: "What are the best tools or frameworks for customer segmentation (e.g., demographic, psychographic, behavioral)?", a: "Use Google Analytics, HubSpot, or surveys to categorize audiences by behavior and preference." },
      { q: "How can I create customer personas for my product or service?", a: "Combine qualitative interviews and data analytics to build persona profiles." },
      { q: "How do I test whether my product truly solves customer pain points?", a: "Collect user feedback and run beta programs to evaluate satisfaction." },
    ],
  },
  {
    category: "Company Registration & Legal Setup",
    questions: [
      { q: "What are the different types of business entities in India (Proprietorship, LLP, Pvt Ltd, OPC)?", a: "They differ in liability, compliance, and taxation; LLP and Pvt Ltd are most common for startups." },
      { q: "Which business structure is best suited for my startup?", a: "Choose based on funding goals and compliance — Pvt Ltd for scalability, LLP for simplicity." },
      { q: "How do I register my startup under the Startup India initiatives?", a: "Register on startupindia.gov.in with your business documents and incorporation details." },
      { q: "What documents are required for company registration in India?", a: "PAN, Aadhaar, address proof, DSC, and MoA/AoA documents are required." },
      { q: "What are the steps to obtain a GST, PAN, and Udyam (MSME) registration?", a: "Apply online via GST portal, NSDL for PAN, and MSME registration portal." },
      { q: "What are the benefits of registering a Private Limited Company versus an LLP?", a: "Pvt Ltd offers better funding access and credibility; LLP has less compliance burden." },
      { q: "How do I handle compliance, annual filings, and tax obligations?", a: "Use CA services or online compliance platforms for ROC and tax filings." },
      { q: "How can startups avail exemptions under DPIIT or MSME schemes?", a: "Apply for DPIIT recognition to access tax benefits and funding opportunities." },
    ],
  },
  {
    category: "Intellectual Property & Branding",
    questions: [
      { q: "What is Intellectual Property Rights (IPR), and why is it important for startups?", a: "IPR protects your ideas, inventions, and brand from unauthorized use." },
      { q: "How can I register a trademark, patent, or copyright for my startup?", a: "Apply online via IPIndia portal or hire a legal consultant for assistance." },
      { q: "What’s the difference between a brand name, logo, and trademark?", a: "A trademark legally protects your brand name and logo from duplication." },
      { q: "How long does it take to get a patent approved in India?", a: "It can take 18–36 months, depending on the type and complexity of the application." },
    ],
  },
  {
    category: "Business Model & Planning",
    questions: [
      { q: "What is a business model, and how do I choose the right one?", a: "Select a model that aligns with your product, audience, and revenue goals." },
      { q: "How do I prepare a business plan or investor pitch deck?", a: "Include problem, solution, market size, traction, and financial projections." },
      { q: "What are key components of a business model canvas?", a: "Value proposition, customer segments, key partners, resources, and revenue streams." },
      { q: "How do I identify my revenue streams and cost structure?", a: "Analyze your product’s pricing, customer LTV, and operational costs." },
      { q: "How do I determine the right pricing strategy for my product or service?", a: "Use competitive benchmarking and value-based pricing models." },
    ],
  },
  {
    category: "Funding & Financial Management",
    questions: [
      { q: "What are the stages of startup funding (pre-seed, seed, Series A, etc.)?", a: "Funding stages depend on business maturity — from idea to growth scaling." },
      { q: "How can I approach investors or angel networks for funding?", a: "Prepare a strong pitch deck, validate traction, and network at startup events." },
      { q: "What are the government schemes available for startups (like SIDBI, MSME, NIDHI, Startup India Seed Fund)?", a: "Multiple central and state schemes offer grants, equity, and credit support." },
    ],
  },
  {
    category: "Team & Operations",
    questions: [
      { q: "How do I find a suitable co-founder or build a founding team?", a: "Look for complementary skills and shared vision through events or incubators." },
      { q: "What key roles should be prioritized in the early stages?", a: "Focus on tech, marketing, and operations — the three startup pillars." },
    ],
  },
  {
    category: "Growth & Marketing",
    questions: [
      { q: "What is traction, and how do I measure it?", a: "Track key metrics like user growth, retention, and monthly recurring revenue." },
      { q: "How do I acquire my first 100 customers?", a: "Leverage referrals, social proof, and partnerships for early traction." },
      { q: "What digital marketing strategies work best for startups?", a: "Use SEO, email campaigns, and social media ads for visibility." },
    ],
  },
  {
    category: "Incubation, Acceleration & Networking",
    questions: [
      { q: "What is the role of incubators and accelerators?", a: "They provide mentorship, funding, and workspace for early-stage startups." },
      { q: "How can I find mentors or industry experts to guide my startup?", a: "Join startup networks like TiE, Nasscom, or LinkedIn communities." },
      { q: "What are the benefits of joining a co-working space or startup hub?", a: "Networking, shared resources, and exposure to investor ecosystems." },
    ],
  },
  {
    category: "Technology & Innovation",
    questions: [
      { q: "How do I develop an MVP (Minimum Viable Product)?", a: "Focus on core features that solve the main problem first." },
      { q: "What are common mistakes to avoid in early product development?", a: "Overbuilding features before validation or ignoring user feedback." },
      { q: "What tools can I use for project management, CRM, and collaboration?", a: "Use Notion, Trello, Slack, or HubSpot for smooth team management." },
    ],
  },
  {
    category: "Sustainability & Social Impact",
    questions: [
      { q: "How can I align my business with UN Sustainable Development Goals (SDGs)?", a: "Identify relevant SDGs and integrate measurable impact metrics." },
      { q: "How do I measure and report my startup’s social or environmental impact?", a: "Use ESG frameworks and sustainability reporting tools like GRI." },
    ],
  },
  {
    category: "Exit & Future Growth",
    questions: [
      { q: "What is an exit strategy, and when should I plan for it?", a: "Plan early to attract investors and ensure long-term sustainability." },
      { q: "What are the common exit routes — acquisition, merger, or IPO?", a: "Choose based on market timing, valuation, and scalability." },
      { q: "How do I ensure business continuity after founder transition or acquisition?", a: "Set up governance frameworks and documentation for smooth transition." },
    ],
  },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData.flatMap((cat) => cat.questions)
      : faqData.find((cat) => cat.category === selectedCategory)?.questions || [];

  const searchedFAQs = filteredFAQs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedFAQs =
    selectedCategory === "All" ? searchedFAQs.slice(0, 6) : searchedFAQs;

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-controls">
        <input
          type="text"
          className="faq-search"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="faq-search-icon" />
      </div>

      <div className="faq-categories">
        {["All", ...faqData.map((cat) => cat.category)].map((cat) => (
          <button
            key={cat}
            className={`faq-category ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(null);
              setSearchQuery("");
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {displayedFAQs.length > 0 ? (
          displayedFAQs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))
        ) : (
          <p className="faq-no-results">No matching results found.</p>
        )}
      </div>
    </section>
  );
}
