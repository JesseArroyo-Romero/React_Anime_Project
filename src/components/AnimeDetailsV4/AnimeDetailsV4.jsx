import React, { useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
const AnimeDetailsV4 = (props) => {

    const [comment, setComment] = useState([' '])
    const [anime, setAnime] = useState()
  
    useEffect(() => {
        setAnime(props.details.mal_id)
        props.getCommentsV4(props.details.mal_id)
    }, [])
  
    const handleChange = (event) => {
        setComment(event.target.value)
    }
  
    const handleSubmit = (event) => {
        let newComment = {user:props.userV4.id, comments:comment, anime_id:anime}
        event.preventDefault()
        props.postCommentsV4(newComment)
    }

    return(
        <div>
            <Table>
                <tbody>
                    <tr><td>{props.details.title}</td></tr>
                    <tr><td><img src={props.details.images.jpg.image_url}></img></td></tr>
                    <tr><td>Rank: {props.details.rank} | Score: {props.details.score} | {props.details.episodes} Episodes | {props.details.type}</td></tr>
                    <tr><td>Genres: {props.details.genres.map((genre) => {
                            return(
                                <td>{genre.name},</td>
                            )
                        })} 
                        </td>
                    </tr>
                    <tr><td>Status: {props.details.status}</td></tr>
                    <tr><td>Rated: {props.details.rating}</td></tr>
                    <tr><td>{props.details.synopsis}</td></tr>
                </tbody>
            </Table>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange}/>
                    <Button type="submit">Submit Comment</Button>
                </form>
            </div>
            <div>
                <Table>
                <thead>
                    <tr>
                    <td>Comments</td>
                    </tr>
                </thead>
                <tbody>
                    {props.commentsV4.map((element) => {
                    return(
                        <tr>
                        <td>{element.comments}</td>
                        </tr>
                    )
                    })}
                </tbody>
                </Table>
            </div>
        </div>
    )
}
export default AnimeDetailsV4