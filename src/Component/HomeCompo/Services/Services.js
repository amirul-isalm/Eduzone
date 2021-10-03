import React from 'react';
import LoadData from '../../DataLoad';
import CourseListShow from '../CourseListShow';
import "./Services.css"



const Services = () => {
  const [data] = LoadData();
  

  return (
    <div className="mt-5 pt-5">
      <div>
        <h1>Our Services</h1>
        <hr />
      </div>
      <div className="row mt-5 ">
        {data.map((course) => (
          <CourseListShow key={course.id} course={course}></CourseListShow>
        ))}
      </div>
    </div>
  );
};

export default Services;