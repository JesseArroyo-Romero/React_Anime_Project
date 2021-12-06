import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap';

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
            {/* <div>
                <Table>
                    <thead>
                        <tr>
                            <td>Anime</td>
                            <td>Episodes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.topAnime.map((anime) => {
                            return(
                                <tr key={anime.mal_id}>
                                    <td>{anime.title}</td>
                                    <td>{anime.episodes}</td>
                                    <img src={anime.image_url}></img>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div> */}
        </div>
    )
}

export default HomePage;