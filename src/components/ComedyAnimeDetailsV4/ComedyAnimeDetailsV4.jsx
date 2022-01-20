import React from 'react';

const ComedyAnimeDetailsV4 = (props) => {
    return (
        <div>
            {props.comedyAnimeDetailsV4.map((anime) => {
                    return(
                        <div>
                            <h5>{anime.title}</h5>
                            <img src={anime.images.jpg.image_url}></img>
                        </div>
                    )
                })}
        </div>
    );
}
 
export default ComedyAnimeDetailsV4;