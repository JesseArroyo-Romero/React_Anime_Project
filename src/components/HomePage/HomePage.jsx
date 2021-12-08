import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import './HomePage.css'

const HomePage = (props) =>{
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Anime Planet</h1>
                    </Col>
                </Row>
            </Container>
            <div>
            {/* THIS USES V4 API */}
            <h3>Top Anime: </h3>
                <Table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Rank</td>
                            <td>Type</td>
                            <td>Episodes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.topAnime.map((anime) => {
                            return(
                                
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rank}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.images.jpg.image_url}></img></td>
                                        <td><Link to="/AnimeDetailsV4" onClick={() => props.view(anime.mal_id)}>Details</Link></td>
                                    </tr>
                                
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div>
                {/* USING V3********* */}
                <h3>Top Action Anime: </h3>
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
                        {props.actionAnime.map((anime) => {
                            return(
                                
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rated}</td>
                                        <td>{anime.score}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.image_url}></img></td>
                                        <td><Link to="/AnimeDetails" onClick={() => props.viewV3(anime.mal_id)}>Details</Link></td>
                                    </tr>
                                
                            )
                        })}
                    </tbody>
                </Table>
            </div>

            {/* BREAK */}

            <div>
                {/* USING V3********* */}
                <h3>Top Shounen Anime: </h3>
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
                        {props.shounenAnime.map((anime) => {
                            return(
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rated}</td>
                                        <td>{anime.score}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.image_url}></img></td>
                                        <td><Link to="/AnimeDetails" onClick={() => props.viewV3(anime.mal_id)}>Details</Link></td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            
            {/* BREAK */}

            <div>
                {/* USING V3********* */}
                <h3>Top Fantasy Anime: </h3>
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
                        {props.fantasyAnime.map((anime) => {
                            return(
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rated}</td>
                                        <td>{anime.score}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.image_url}></img></td>
                                        <td><Link to="/AnimeDetails" onClick={() => props.viewV3(anime.mal_id)}>Details</Link></td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default HomePage;