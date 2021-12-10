import React, { useEffect, useState } from 'react';

const CommentsV3 = (props) => {

    const [comment, setComment] = useState([' '])
    const [anime, setAnime] = useState()
    const [user, setUser] = useState({})

    useEffect(() => {
        setAnime(props.anime)
    }, [props])

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        let newComment = {user:user, comments:comment, anime_id:anime}
        event.preventDefault()
        props.postComments(newComment)
    }

    return (
        <div>
            {props.comments}
            <form onSubmit={handleSubmit}>
            <table>
                <th>Comments</th>
                <tbody>
                {props.comments}
                    {/* {props.postComments.map(function(comment){
                        return (
                            <tr>
                                <td>{comment.comment}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
            <input type="text"/>
            <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}
 
export default CommentsV3;