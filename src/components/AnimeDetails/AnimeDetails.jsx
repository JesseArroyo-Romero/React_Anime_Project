import React from "react";
import Table from "react-bootstrap/Table";

const AnimeDetails = (props) => {
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
    </div>
  )
}

export default AnimeDetails;