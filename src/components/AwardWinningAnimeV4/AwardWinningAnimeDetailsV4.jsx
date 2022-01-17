import React from 'react';

const AwardWinningAnimeDetailsV4 = (props) => {
    return (
        <div>
            {props.awardWinningAnimeDetailsV4.map((anime) => {
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
 
export default AwardWinningAnimeDetailsV4;