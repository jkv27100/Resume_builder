import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import TagInputField from "../../components/TagInputField/TagInputField";
import { setResumeDetails } from "../../store/ResumeSlice";

import "./style.css";
import { useState } from "react";
import { ResumeDetails } from "../../types";

function BuildResume() {
  const [tags, setTags] = useState<string[]>([]);
  const initialState: ResumeDetails = {
    fullName: "",
    email: "",
    address: "",
    phone: "",
    companyName: "",
    YOE: "",
    designation: "",
    instituteName: "",
    YOP: "",
    degree: "",
    skills: [],
  };
  const [formData, setFormData] = useState<ResumeDetails>(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;

    const newFromData: ResumeDetails = {
      ...formData,
      [key]: value,
      skills: [...tags],
    };
    setFormData(newFromData);
  };

  const handleResumeBuild = () => {
    dispatch(setResumeDetails(formData));
    navigate("/view-resume");
  };

  return (
    <div className="container">
      <div className="header-section">
        <h2>Build Your Resume</h2>
      </div>
      <div className="form-container">
        <Form className="signup-form">
          <Form.Group>
            <Form.Control
              className="name-input"
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="email-input"
              type="email"
              placeholder="sample@example.com"
              name="email"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="address-input"
              type="text"
              placeholder="address"
              name="address"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="phone-input"
              type="text"
              placeholder="Phone"
              name="phone"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <h3>Experience</h3>
            <br />
            <Form.Control
              className="company-input"
              type="text"
              placeholder="Company name"
              name="companyName"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="year-input"
              type="text"
              placeholder="Year of experience"
              name="YOE"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="designation-input"
              type="text"
              placeholder="Designation"
              name="designation"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />

            <h3>Education</h3>
            <br />
            <Form.Control
              className="edu-input"
              type="text"
              placeholder="Institute name"
              name="instituteName"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="year-input"
              type="text"
              placeholder="Year of passing"
              name="YOP"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <Form.Control
              className="degree-input"
              type="text"
              placeholder="Degree"
              name="degree"
              required
              onChange={handleChange}
            ></Form.Control>
            <br />
            <h3>Skills</h3>
            <TagInputField tags={tags} setTags={setTags} />

            <Button
              className="submit-button"
              value="build"
              variant="primary"
              onClick={handleResumeBuild}
            >
              Build
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default BuildResume;
