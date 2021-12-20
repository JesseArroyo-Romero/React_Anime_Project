import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'
import Rows from '../Row/Row';

// import './HomePage.css'

const HomePage = (props) =>{
    return (
        <div>
            <Container>
                <Row>
                    <Col className='text'>
                        <h1>Welcome to Anime Planet</h1>
                    </Col>
                </Row>
            </Container>
            {/* <Rows title='Top Anime'/> */}
            {/* <div className='row'>
                <h2>Top Anime</h2>
                <div className='row_posters'>
                    {props.topAnime.map((anime) => {
                        return(
                            
                                <img 
                                key={anime.mal_id} 
                                className='row_poster' 
                                src={anime.images.jpg.image_url} 
                                alt={anime.title} 
                                title={anime.synopsis}>
                                </img>
                            )
                    })}
            </div> */}


            {/* <div className='row'>
                <h2>Top Action Anime</h2>
                <div className='row_posters'>
                    {props.actionAnime.map((anime) =>{
                        return(
                                <img 
                                key={anime.mal_id} 
                                className='row_poster' 
                                src={anime.image_url} 
                                alt={anime.title} 
                                title={anime.synopsis}>
                                </img>
                        )
                    })}
                </div>
            </div> */}


            {/* <div className='row'>
                <h2>Top Shounen Anime</h2>
                <div className='row_posters'>
                    {props.shounenAnime.map((anime) =>{
                        return(
                            <img 
                            key={anime.mal_id} 
                            className='row_poster' 
                            src={anime.image_url} 
                            alt={anime.title} 
                            title={anime.synopsis}>
                            </img>
                        )
                    })}
                </div>
            </div> */}


            {/* <div className='row'>
                <h2>Top Fantasy Anime</h2>
                <div className='row_posters'>
                    {props.fantasyAnime.map((anime) =>{
                        return(
                            <img 
                            key={anime.mal_id} 
                            className='row_poster' 
                            src={anime.image_url} 
                            alt={anime.title} 
                            title={anime.synopsis}>
                            </img>
                        )
                    })}
                </div>
            </div>
            </div> */}


            <div className='background'> 
            {/* THIS USES V4 API */}
            <h3>Top Anime: </h3>
                <Table className='scroll'>
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
                                    // <div className='horizontal'>
                                    <tr key={anime.mal_id}>
                                        <td>{anime.title}</td>
                                        <td>{anime.rank}</td>
                                        <td>{anime.type}</td>
                                        <td>{anime.episodes}</td>
                                        <td><img src={anime.images.jpg.image_url}></img></td>
                                        <td><Link to="/AnimeDetailsV4" onClick={() => props.view(anime.mal_id)}>Details</Link></td>
                                    </tr>
                                    // </div>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div className='scroll'> 
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

            

            <div className='scroll'>
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
            

            <div className='scroll'>
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