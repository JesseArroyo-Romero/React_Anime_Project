import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const AdventureAnimeV4 = (props) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {props.adventureV4.map((anime) => {
                        return(
                            <div>
                                <tr>
                                    <Link to="/AdventureAnimeDetailsV4" onClick={() => props.viewV4(anime.mal_id)}>{anime.title}</Link>
                                    <td><img src={anime.images.jpg.image_url}></img></td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}
 
export default AdventureAnimeV4;