import React from 'react';
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"

const ProfilePage = (props) => {
    return (
        <React.Fragment>
            <div>
                <form>
                    <Table>
                        <tbody>
                            <tr>
                                <td>First Name: {props.user.first_name}</td>
                                <td>Last Name: {props.user.lastname}</td>
                                <td>Middle Name: {props.user.middlename}</td>
                                <td>Username: {props.user.username}</td>
                                <td>Email: {props.user.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ProfilePage