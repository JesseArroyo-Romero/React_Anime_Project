import React from "react";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from "../LoginScreen/useForm";


const AnimeDetails = (props) => {

  const {formValues, handleChange, handleSubmit } = useForm(addReview);
  
  function addReview() {
    try{
        props.addProductReview(formValues)
    
    } catch (error) {
        console.error(error.message)
    }
  }
  

  return (
    <div>
      <Table>
            <tbody>
            <tr><td>{props.details.title}</td></tr>
            <tr><td><img src={props.details.image_url}></img></td></tr>
            <tr><td>Episodes: {props.details.episodes}</td></tr>
            {/* <tr><td>Description: {props.details.description}</td></tr>
            <tr><td>Price: {props.details.price}</td></tr>
            <tr><td>Rating: {props.productReviews.rating} </td></tr>
            <tr><td>Customer Reviews: {props.productReviews.review}</td></tr> */}
            
            </tbody>    
          </Table>
        {/* <h4>Review Products Here</h4>
      <Form onSubmit= {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">          
          <Form.Control type="review" name="review" placeholder="Write Review Here" onChange= {handleChange} required= {true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">  
        <Form.Select aria-label="Default select example">
            <option>Rate Product Here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
        </Form.Select>
        </Form.Group>
        
        <Button variant="primary" type="submit" >
           Submit
        </Button>
       </Form>
    </div>
    
  );
}; */}
</div>
  )}

  

  


export default AnimeDetails;
