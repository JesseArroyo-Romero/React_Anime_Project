import React from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const AwardWinningAnimeV4 = (props) => {

    useEffect(() => {
        props.getAwardWinningAnimeV4()
    }, [])

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {props.awardWinningAnimeV4.map((anime) => {
                        return(
                            <div>
                                <tr>
                                    <Link to="/AwardWinningAnimeDetailsV4" onClick={() => props.viewV4(anime.mal_id)}>{anime.title}</Link>
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
 
export default AwardWinningAnimeV4;