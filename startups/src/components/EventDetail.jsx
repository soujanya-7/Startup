import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/EventDetail.css";

const eventsData = [
  {
    id: 1,
    title: "AI Challenge 2025",
    organiser: "Google Developers Club",
    deadline: "Nov 5, 2025",
    status: "Active",
    description:
      "The AI Challenge 2025 is designed to test innovation in artificial intelligence and machine learning. Participants will build and deploy AI models to solve real-world challenges.",
    poster: "/images/aichallenge.jpg",
    link: "https://example.com/ai-challenge",
  },
  {
    id: 2,
    title: "Hackathon Horizon",
    organiser: "CodeWave Community",
    deadline: "Nov 20, 2025",
    status: "Deadline Extended",
    description:
      "Hackathon Horizon pushes boundaries of innovation. Collaborate, code, and create impactful solutions with developers worldwide.",
    poster: "/images/hackathon.jpg",
    link: "https://example.com/hackathon",
  },
  {
    id: 3,
    title: "Design Fiesta",
    organiser: "UX Visionaries",
    deadline: "Oct 15, 2025",
    status: "Closed",
    description:
      "A celebration of creativity! Join this competition to showcase your UI/UX design skills, pitch new product ideas, and learn from professionals.",
    poster: "/images/designfiesta.jpg",
    link: "https://example.com/design-fiesta",
  },
  {
    id: 4,
    title: "TechSpark 2025",
    organiser: "Innovation Hub",
    deadline: "Dec 10, 2025",
    status: "Active",
    description:
      "TechSpark is a national-level innovation event focusing on IoT, Cloud, and AI-based startups. Build teams and present your ideas to top industry experts.",
    poster: "/images/techspark.jpg",
    link: "https://example.com/techspark",
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id.toString() === id);

  if (!event) {
    return <div className="event-not-found">Event not found</div>;
  }

  return (
    <div className="event-detail-container">
      <div className="event-poster">
        <img src={event.poster} alt={event.title} />
      </div>
      <div className="event-info">
        <h1 className="event-title">{event.title}</h1>

        <div
          className={`event-status ${
            event.status === "Active"
              ? "status-active"
              : event.status === "Closed"
              ? "status-closed"
              : "status-extended"
          }`}
        >
          {event.status}
        </div>

        <p className="event-organiser">
          <strong>Organised by:</strong> {event.organiser}
        </p>
        <p className="event-deadline">
          <strong>Deadline:</strong> {event.deadline}
        </p>

        <p className="event-description">{event.description}</p>

        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
        >
          View More
        </a>

        <Link to="/opportunities" className="back-link">
          ← Back to Opportunities
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
