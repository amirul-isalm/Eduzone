
import LoadData from '../DataLoad';
import CourseListShow from './CourseListShow';

const CourseList = () => {
    const [data] = LoadData()


    return (
        <div className='mx-3 mb-5'>
        <h1>Our Online Courses</h1>
        <hr />
        <br />
        <br />

        <div className="row ">
          {data.slice(0, 4).map((course) => (
            <CourseListShow key={course.id} course={course}></CourseListShow>
          ))}
        </div>
      </div>
    );
};

export default CourseList;