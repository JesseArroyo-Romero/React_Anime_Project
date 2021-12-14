import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Replies from '../Replies/Replies'
import axios from "axios";

const AnimeDetails = (props) => {

  const [comment, setComment] = useState([' '])
  const [anime, setAnime] = useState()
  const [reply, setReply] = useState([' '])

  useEffect(() => {
      setAnime(props.detailsV3.mal_id)
      props.getComments(props.detailsV3.mal_id)
  }, [])

  const handleChange = (event) => {
      setComment(event.target.value)
  }

  const handleSubmit = (event) => {
      let newComment = {user:props.user.id, comments:comment, anime_id:anime}
      event.preventDefault()
      props.postComments(newComment)
  }

  const handleSubmitReplies = (event, id) => {
      event.preventDefault()
      let newReply = {comments: id, text: reply}
      props.postReply(newReply)
  }

  const handleChangeReplies = (event) => {
    setReply(event.target.value)
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Type</td>
            <td>Episodes</td>
            <td>Score</td>
            <td>Synopsis</td>
            <td>Airing</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{props.detailsV3.title}<img src={props.detailsV3.image_url}></img></td>
          <td>{props.detailsV3.type}</td>
          <td>{props.detailsV3.episodes}</td>
          <td>{props.detailsV3.score}</td>
          <td>{props.detailsV3.synopsis}</td>
          <td>{props.detailsV3.airing}</td>
        </tr>            
        </tbody>    
      </Table>
      
      
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}/>
        <button type="submit">Submit Comment</button>
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
            {props.comments.map((element) => {
              return(
                <div>
                  <tr>
                    <td>{element.comments}</td>
                  </tr>
                  <Form className="reply" type="submit" onSubmit={event => handleSubmitReplies(event, element.id)} return false>
                    <input className="Reply" name="reply" onChange={handleChangeReplies} placeholder="Reply" type="text" />
                    <Button type="submit">Reply</Button>
                  </Form>
                  <Replies id={element.id}/>
                </div>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default AnimeDetails;