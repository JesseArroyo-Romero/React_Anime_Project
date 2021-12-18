import React, { useState, useEffect} from 'react';

function Rows({ title }) {
    const [topAnime, setTopAnime] = useState([])

    

    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Rows;