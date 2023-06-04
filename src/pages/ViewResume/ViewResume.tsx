import { useSelector } from "react-redux";
import { RootState } from "../../store";

import "./style.css";

function ViewResume() {
  const formData = useSelector((state: RootState) => state.ResumeReducer);

  return (
    <div className="main_container">
      <div className="viewer_container">
        <h3>General Info</h3>
        <div className="general_info">
          <div className="row1">
            <p>
              Full Name: <span>{formData.fullName}</span>
            </p>
            <p>
              Email: <span>{formData.email}</span>
            </p>
          </div>
          <div className="row2">
            <p>
              Phone: <span>{formData.phone}</span>
            </p>
            <p>
              Address: <span>{formData.address}</span>
            </p>
          </div>
        </div>
        <h3>Experience</h3>
        <div className="general_info">
          <div className="row1">
            <p>
              Company Name: <span>{formData.companyName}</span>
            </p>
            <p>
              Years Of Experience: <span>{formData.YOE}</span>
            </p>
          </div>
          <div className="row2">
            <p>
              Designation: <span>{formData.designation}</span>
            </p>
            <p>
              Skills:{" "}
              {formData.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>
        </div>
        <h3>Education</h3>
        <div className="general_info">
          <div className="row1">
            <p>
              Institute: <span>{formData.instituteName}</span>
            </p>
            <p>
              Degree: <span>{formData.degree}</span>
            </p>
          </div>
          <div className="row2">
            <p>
              Passing Year: <span>{formData.YOE}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResume;
