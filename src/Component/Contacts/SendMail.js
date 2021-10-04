import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SendMail = () => {
  
  // This is mail submission from 

    return (
      <div className="w-75 mx-auto bg-info p-5 m-5 rounded-3">
        <h2>
          <u>Send Mail</u>
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button> Send</Button>
        </Form>
      </div>
    );
};

export default SendMail;