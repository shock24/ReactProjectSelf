import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

const AddCourse=()=>{
    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill course detail</h1>
            <Form>
                <FormGroup>
                    <label for='userId'>Course Id</label>
                    <Input type='text' placeholder='Enter here' name='userId' id='userId'></Input>
                </FormGroup>

                <FormGroup>
                    <label for='title'>Course Title</label>
                    <Input type='text' placeholder='Enter title here' id='title' name='title'></Input>
                </FormGroup>

                <FormGroup>
                    <label for='description'>Course Description</label>
                    <Input type='textarea' placeholder='Enter description here' id='description' name='description' style={{height: 150}}></Input>
                </FormGroup>

                <Container className='text-center'>
                    <Button color='success'>Add Course</Button>
                    <Button color='warning' style={{marginLeft: 3}}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
};

export default AddCourse;