import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
    console.log(props.searchResult)

    return(
        <div>
                {/* USING V4********* */}
                <Table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Rating</td>
                            <td>Score</td>
                            <td>Type</td>
                            <td>Episodes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.searchResult.map((anime) => {
                            return(
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rated}</td>
                                        <td>{anime.score}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.images.webp.image_url}></img></td>
                                        <td><Link to="/AnimeDetails" onClick={() => props.viewV3(anime.mal_id)}>Details</Link></td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
    )
}
export default SearchResult