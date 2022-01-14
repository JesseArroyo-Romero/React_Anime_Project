import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';


const ActionAnimeV4 = (props) => {
    
    return ( 
        <div>
            <Table>
                <thead>
                    <tr>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {props.actionAnimeV4.map((anime) => {
                        return(
                            <div>
                                <tr>
                                    <td>{anime.title}</td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}
 
export default ActionAnimeV4;