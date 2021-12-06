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
            <h3>Top Upcoming Anime: </h3>
                {props.topAnime.map((anime) => {
                    return(
                        <div className="sideScrollOne">
                                <h6>Rank: {anime.rank}</h6>
                                {anime.title}
                                {anime.type}
                                {anime.episodes}
                                <img src={anime.image_url}></img>
                                <Link to="/AnimeDetails" onClick={() => props.view(anime.mal_id)}>Details</Link>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3>Top Anime Movies: </h3>
                {props.topAnimeMovie.map((movie) => {
                    return (
                        <div>
                            <h6>Rank: {movie.rank}</h6>
                            {movie.title}
                            {movie.type}
                            <img src={movie.image_url}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;