import React from "react";
import {Form} from "react-bootstrap";

function PostListing(){

    return (
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="Describe what your service is about" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Choose Category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Choose Category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter the price ou want to sell your service for" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your business address" />
        </Form.Group>

        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>


        </div>
    );
    
}

export default PostListing;