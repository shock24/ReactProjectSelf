import React from 'react'
import {
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';

const Course=({course})=>{
    return(
        <div>
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle style={{fontWeight: 'bold'}}>{course.title}</CardSubtitle>
                    <CardText>
                        {course.description}
                    </CardText>
                    <Container className="text-center">
                        <Button color='warning'>Update</Button>
                        <Button color='danger' style={{marginLeft: '20px'}}>Delete</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
};

export default Course;