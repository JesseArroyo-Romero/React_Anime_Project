import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table'


const Replies = (props) => {
    
    const [replies, setReplies] = useState([])
    
    useEffect(() => {
        getReplies(props.id)
    }, [replies])

    const getReplies = async (id) => {
        console.log(id)
        try {
            let response = await axios.get(`http://127.0.0.1:8000/replies/anime/${id}/`)
            console.log(response.data)
            setReplies(response.data)
        } catch (error) {
            console.log("retrieving replies", error)
        }
    }
    
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>
                            Replies
                        </td>
                    </tr>
                </thead>
                {replies.map((element) => {
                    return(
                        <tr>
                            <td>{element.text}</td>
                        </tr>
                    )
                })}
            </Table>
        </div>
    );
}
 
export default Replies;