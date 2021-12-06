import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AccountRegistration extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            username: '',
            password: '',
            email: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.accountCreation(this.state)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Middle Name or Initial:</Form.Label>
                        <Form.Control type="text" name="middleName" onChange={this.handleChange} value={this.state.middleName} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    </Form.Group>

                    <Button type="submit">Create Profile</Button>
                </Form>
            </div>
        )
    }
}

export default AccountRegistration