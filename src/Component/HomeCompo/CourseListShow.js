import React from "react";
import "./CourseListShow.css";



const CourseListShow = (props) => {

  // this is Course card

  const { title,  courseImg, teacher, duration, type, information } =
    props.course;
  console.log(title);
  return (
    <div className="course col-md-6 col-sm-12 col-lg-4 col-xl-3">
      <img className="" src={courseImg} alt="" />
      <h5>Course: {title}</h5>
      <hr />
      <div className="text-start">
        <b>Teacher: {teacher}</b>
        <br />
        <b>Type: {type}</b>
              <br />
              <b>Duration: { duration}</b>
        <br />
        <p>{information}</p>
        <b>Learn more...</b>
      </div>
    </div>
  );
};

export default CourseListShow;
