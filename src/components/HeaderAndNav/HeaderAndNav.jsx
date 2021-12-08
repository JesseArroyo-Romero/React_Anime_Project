import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import useForm from '../LoginScreen/useForm'
import './HeaderAndNav.css'

const HeaderAndNav = (props) => {
    const {formValues, handleChange, handleSubmit} = useForm(searchForAnime)//searchForAnime)

    let navigate = useNavigate()

    async function searchForAnime() {
        console.log(formValues)
        props.searchAnimeV4(formValues.searchTerm)
        navigate("../SearchResult")
    }
    
    return (
        <div>
            <h3>Welcome to Anime Planet</h3>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Profile">Profile</Link>
                    <Link to="login">Login</Link>
                    <Link to="/" onClick={() => {props.logout()}}>Logout</Link>
                    <Link to="/AccountRegistration">Account Registration</Link>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control type="searchTerm" name="searchTerm" placeholder="Search for anime" onChange={handleChange} required={true} />
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form.Group>
                    </Form>
                </nav>
            </div>
        </div>
    );
}
 
export default HeaderAndNav;