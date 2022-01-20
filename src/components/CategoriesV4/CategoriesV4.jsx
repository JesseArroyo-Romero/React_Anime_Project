import React from 'react';
import { Link } from 'react-router-dom'

const CategoriesV4 = (props) => {
    return ( 
        <div>
            <div>
                <Link to="/ActionAnimeV4">Action</Link>
            </div>
            <div>
                <Link to="/AdventureAnimeV4">Adventure</Link>
            </div>
            <div>
                <Link to='/AwardWinningAnimeV4'>Award Winning</Link>
            </div>
            <div>
                <Link to='/ComedyAnimeV4'>Comedy</Link>
            </div>
        </div>
     );
}
 
export default CategoriesV4;