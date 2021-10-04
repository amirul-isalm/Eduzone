import React from "react";
import "../HomeCompo/Services/Services.css";
const AboutCourse = () => {
  // this is course about top section

  return (
    <div className="mt-5 pt-5">
      <h1>About Us</h1>
      <hr />
      <div className="row py-5">
        <div className="col-sm-12 col-md-6 col-lg-4 about">
          <h2>Best Multi-Tier Courses</h2>
          <p>Education System</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 about">
          <h2>Easy to Use Video Panels</h2>
          <p>Best LMS System</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 about">
          <h2>Multi Purpose Dashboard</h2>
          <p>Online Education</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutCourse;
