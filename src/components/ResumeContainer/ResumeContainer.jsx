// ResumeContainer component

import "./ResumeContainer.css";
import { useState } from "react";
import { ResumeBuilder } from "../ResumeBuilder/ResumeBuilder.jsx";
import { ResumePreviewContainer } from "../ResumePreviewContainer/ResumePreviewContainer.jsx";

export function ResumeContainer() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "Joey Pizzas",
      email: "joey@pizzas.com",
      phone: "1234567890",
      location: "New York, NY",
    },
    education: [
      {
        id: crypto.randomUUID(),
        school: "International Academy of Pizza Pies",
        degree: "BS, Pizza Pie Sciences",
        startDate: "09/2015",
        endDate: "05/2019",
        location: "Naples, IT",
        description:
          "- Golden hands winner in tossin' pies competition (2019) - Pepperoni crown holder (2018) - University Honors (2018-2019)",
      },
    ],
    experience: [
      {
        id: crypto.randomUUID(),
        company: "Joey's Pizza Pies",
        position: "Head pie guy",
        startDate: "08/2019",
        endDate: "04/2026",
        location: "New York, NY",
        description:
          "Directly responsible for the creation of hundreds of delicious pizza pies each day.",
      },
    ],
    skills: [
      { id: crypto.randomUUID(), skill: "Kneading dough" },
      { id: crypto.randomUUID(), skill: "Tossin' pies" },
      { id: crypto.randomUUID(), skill: "Operating pizza oven" },
    ],
  });

  return (
    <div className="resume-container">
      <ResumeBuilder></ResumeBuilder>
      <ResumePreviewContainer></ResumePreviewContainer>
    </div>
  );
}
