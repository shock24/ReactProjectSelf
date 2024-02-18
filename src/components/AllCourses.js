import React, { useState } from 'react'
import Course from './Course';



const AllCourses=()=>{


    //passing array of objects in 'courses'
    const [courses, setCourses] = useState([
        {title:"Java Course", description:"This is java course"},
        {title:"Django Course", description:"This is django course"},
        {title:"React.js Course", description:"This is React.js course"},
    ])
    return (
        <div>
            <h1>All courses</h1>
            <p>List of courses are as follows:</p>
            {
                courses.length>0 ? courses.map((course)=> <Course course={course} />) : "No courses available"
            }
        </div>
    )
};

export default AllCourses;