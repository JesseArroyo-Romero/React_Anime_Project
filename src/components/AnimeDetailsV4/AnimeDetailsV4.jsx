import React from "react";
import Table from "react-bootstrap/Table";

const AnimeDetailsV4 = (props) => {
    const { details } = props

    return(
        <div>
            <Table>
                <tbody>
                    <tr><td>{details.title}</td></tr>
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
        </div>
    )
}
export default AnimeDetailsV4