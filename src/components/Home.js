import React from 'react'
import {Container, Button} from 'reactstrap';

const Home=()=>{
    return (
        <div>
            <div className="container-fluid bg-light text-dark p-5 text-center">
                <div className="container bg-light">
                    <h1 className="fw-bold">React Project</h1>
                    <p>This is react project for learning purpose</p>
                </div>
                <Container>
                    <Button color='primary' outline>Start Using</Button>
                </Container>
            </div>
        </div>
    )
};

export default Home;