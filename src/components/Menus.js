import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menus=()=>{

    const [activeLink, setActiveLink] = useState('home')
    const handleActive=(e)=>{
        setActiveLink(e.target.id)
    }

    return(
        <ListGroup>
            <Link className={`list-group-item list-group-item-action ${activeLink==='home' ? 'active' : ''}`} tag="a" to="/" action onClick={handleActive} id='home'>Home</Link>  {/* Using 'Link' and 'to' will prevent page from reloading */}
            <Link className={`list-group-item list-group-item-action ${activeLink==='addCourse' ? 'active' : ''}`} tag="a" to="/add-course" action onClick={handleActive} id='addCourse'>Add Course</Link>
            <Link className={`list-group-item list-group-item-action ${activeLink==='viewCourse' ? 'active' : ''}`} tag="a" to="/view-courses" action onClick={handleActive} id='viewCourse'>View Courses</Link>
            <Link className={`list-group-item list-group-item-action ${activeLink==='about' ? 'active' : ''}`} tag="a" to="#" action onClick={handleActive} id='about'>About</Link>
            <Link className={`list-group-item list-group-item-action ${activeLink==='contact' ? 'active' : ''}`} tag="a" to="#" action onClick={handleActive} id='contact'>Contact Us</Link>
        </ListGroup>
    )
};

export default Menus;