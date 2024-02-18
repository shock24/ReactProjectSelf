import React from 'react';
import './App.css';
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from "./components/Header";
import Menus from './components/Menus';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const btnHandle=()=>{
    toast.info("This is my first message", {
      position: 'top-center'
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact/>
                <Route path="/add-course" Component={AddCourse} exact/>
                <Route path="/view-courses" Component={AllCourses} exact/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
