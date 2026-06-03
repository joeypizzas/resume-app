// ResumeContainer component

import "./ResumeContainer.css";
import { ResumeBuilder } from "../ResumeBuilder/ResumeBuilder.jsx";
import { ResumePreviewContainer } from "../ResumePreviewContainer/ResumePreviewContainer.jsx";

export function ResumeContainer() {
  /* const [resumeData, setResumeData] = useState({
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
  }); */

  return (
    <div className="resume-container">
      <ResumeBuilder></ResumeBuilder>
      <ResumePreviewContainer></ResumePreviewContainer>
    </div>
  );
}
