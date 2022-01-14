import React from 'react';

const AlternateAnimeDetailsV4 = (props) => {
    return (
        <div>
            {props.animeActionV4.map((anime) => {
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
 
export default AlternateAnimeDetailsV4;