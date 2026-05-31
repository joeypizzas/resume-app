// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";

export function ResumePreview() {
  return (
    <div className="resume-preview">
      <PreviewHeader
        location="New York, NY"
        name="Joey Pizzas"
        phone="1234567890"
        email="joey@pizzas.com"
      ></PreviewHeader>
    </div>
  );
}
