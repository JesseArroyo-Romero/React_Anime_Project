import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';
import useForm from './useForm'

const LoginScreen = (props) => {
    const {formValues, handleChange, handleSubmit} = useForm(Register);

    let navigate = useNavigate();
    
    async function Register() {
        console.log("from login" + formValues)
        props.loginUserCall(formValues)
        navigate("../Profile")
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Enter UserName" onChange={handleChange} required={true} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} required={true} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginScreen