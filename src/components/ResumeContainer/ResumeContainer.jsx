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
        description: [
          "- Golden hands winner in tossin' pies competition (2019)",
          "- Pepperoni crown holder (2018)",
          "- University Honors (2018-2019)",
        ],
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
        description: [
          "Directly responsible for the creation of hundreds of delicious pizza pies each day.",
        ],
      },
    ],
    skills: [
      { id: crypto.randomUUID(), skill: "Kneading dough" },
      { id: crypto.randomUUID(), skill: "Tossin' pies" },
      { id: crypto.randomUUID(), skill: "Operating pizza oven" },
    ],
  });

  const updatePersonal = (field, value) =>
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));

  const updateEducation = (id, field, value) =>
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    }));

  const updateExperience = (id, field, value) =>
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    }));

  const updateSkill = (id, field, value) =>
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.id === id ? { ...s, [field]: value } : s,
      ),
    }));

  const addEducation = () =>
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
          description: [],
        },
      ],
    }));

  const removeEducation = (id) =>
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));

  const addExperience = () =>
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: [],
        },
      ],
    }));

  const removeExperience = (id) =>
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));

  const addSkill = () =>
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: crypto.randomUUID(), skill: "" }],
    }));

  const removeSkill = (id) =>
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((sk) => sk.id !== id),
    }));

  return (
    <div className="resume-container">
      <ResumeBuilder
        resumeData={resumeData}
        onUpdatePersonal={updatePersonal}
        onUpdateEducation={updateEducation}
        onUpdateExperience={updateExperience}
        onUpdateSkill={updateSkill}
        addEducation={addEducation}
        removeEducation={removeEducation}
        addExperience={addExperience}
        removeExperience={removeExperience}
        addSkill={addSkill}
        removeSkill={removeSkill}
      ></ResumeBuilder>
      <ResumePreviewContainer resumeData={resumeData}></ResumePreviewContainer>
    </div>
  );
}
