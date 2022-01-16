import React from 'react';

const AdventureAnimeDetailsV4 = (props) => {
    return (
        <div>
            {props.adventureV4.map((anime) => {
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
 
export default AdventureAnimeDetailsV4;