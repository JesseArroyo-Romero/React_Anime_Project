import React, { useEffect, useState} from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import LoginScreen from './LoginScreen/LoginScreen';
import HomePage from './HomePage/HomePage';
import AccountRegistration from './AccountRegistration/AccountRegistration';
import HeaderAndNav from './HeaderAndNav/HeaderAndNav';
import AnimeDetails from './AnimeDetails/AnimeDetails';
import AnimeDetailsV4 from './AnimeDetailsV4/AnimeDetailsV4';
import SearchResult from './SearchResult/SearchResult';


function App() {

    const [loadData, setLoadData] = useState(false)
    const [user, setUser] = useState({})
    const [topAnime, setTopAnime] = useState([])
    const [actionAnime, setActionAnime] = useState([])
    const [shounenAnime, setShounenAnime] = useState([])
    const [fantasyAnime, setFantasyAnime] = useState([])
    const [animeDetails, setAnimeDetails] = useState([])
    const [animeDetailsV3, setAnimeDetailsV3] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [comments, setComments] = useState([])
    const [replies, setReplies] = useState([])

    let combinedList = [...actionAnime, ...shounenAnime, ...fantasyAnime]

    useEffect(() => {
        getTopAnime()
        getActionAnimeV3()
        getShounenAnimeV3()
        getFantasyAnimeV3()
    }, [])

    const loginUser = async (loginUser) => {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser)
        localStorage.setItem('token', response.data.access)
        getUserJWT();
    }

    const getUserJWT = () => {
        const jwt = localStorage.getItem('token')
        try {
            const user = jwtDecode(jwt) 
            setUser(user)
            getUserInfo(user.user_id)
            console.log("get user jwt call", user)
            console.log(jwt)
        } catch (error) {
            console.log("Error in decoding JWT token: ", error)
            setUser({})
        }
    }

    const getUserInfo = async (user) => {
        const jwt = localStorage.getItem('token')
        let logged = await axios.get(`http://127.0.0.1:8000/api/auth/user/${user}`, {headers:{Authorization:'Bearer ' + jwt}})
        setUser(logged.data)
        console.log('user info', logged.data)
    }

    const logOut = () => {
        localStorage.removeItem("token");
        setUser({})
        console.log("Logged user out")
    }

    const registerUser = async (objectBeingPassedIn) => {
        let newUser = {
            firstName: objectBeingPassedIn.first_name,
            lastName: objectBeingPassedIn.last_name,
            middleName: objectBeingPassedIn.middle_name,
            username: objectBeingPassedIn.username,
            password: objectBeingPassedIn.password,
            email: objectBeingPassedIn.email
        }
        await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser)
    }

    const getTopAnime = async () => {
        //USING V4
        let response = await axios.get('https://api.jikan.moe/v4/top/anime')
        setTopAnime(response.data.data)
        console.log("V4 top anime", response.data.data)
    }


    const seeAnimeDetailsV4 = (anime) => {
        let details = topAnime.filter((detailsOfAnime) => detailsOfAnime.mal_id === anime)
        setAnimeDetails(details[0])
        console.log("V4 Details", details[0])
    }

    const getActionAnimeV3 = async () => {
        //USING V3************
        let response = await axios.get('https://api.jikan.moe/v3/search/anime?genre=1&genre_exclude=12&order_by=score&moreinfo')
        setActionAnime(response.data.results)
        console.log("Action Anime", actionAnime)
    }

    const getShounenAnimeV3 = async () => {
        //USING V3************
        let response = await axios.get('https://api.jikan.moe/v3/search/anime?genre=27&genre_exclude=12&order_by=score&moreinfo')
        setShounenAnime(response.data.results)
        console.log("Shounen Anime", shounenAnime)
    }

    const getFantasyAnimeV3 = async () => {
        //USING V3************
        let response = await axios.get('https://api.jikan.moe/v3/search/anime?genre_exclude=12&order_by=score&moreinfo&genre=10')
        setFantasyAnime(response.data.results)
    }
    
    const seeAnimeDetailsV3 = (anime) => {
        let details = combinedList.filter((detailsOfAnime) => detailsOfAnime.mal_id === anime)
        setAnimeDetailsV3(details[0])
    }

    const searchAnimeV4 = async (searchTerm) => {
        let response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&genre_exclude=12`)
        setSearchResult(response.data.data)
    }

    const postComments = async (comment) => {
        const jwt = localStorage.getItem('token')
        console.log(comment)
        let response = await axios.post('http://127.0.0.1:8000/comments/', comment, {headers:{Authorization:'Bearer ' + jwt}})
        console.log(response.data)
    }

    const getComments = async (id) => {
        console.log(id)
        try{
            let response = await axios.get(`http://127.0.0.1:8000/comments/anime/${id}/`)
            console.log(response.data)
            setComments(response.data)
        } catch (error) {
            console.log("retrieving comments", error)
        }
    }

    const postReply = async (reply) => {
        const jwt = localStorage.getItem('token')
        console.log(reply)
        let response = await axios.post('http://127.0.0.1:8000/replies/', reply, {headers:{Authorization:'Bearer ' + jwt}})
        console.log(response.data)
    }

    const getReplies = async (id) => {
        console.log(id)
        try {
            let response = await axios.get(`http://127.0.0.1:8000/replies/${id}/`)
            console.log(response.data)
            setReplies(response.data)
        } catch (error) {
            console.log("retrieving replies", error)
        }
    }

    return (
        <div>
            <Router>
                <HeaderAndNav logOut={logOut} searchAnimeV4={searchAnimeV4}/>
                <Routes>
                    <Route path="/Profile" element={<ProfilePage user={user} />} />
                    <Route path="/login" element={<LoginScreen loginUserCall={loginUser} />} />
                    <Route path="/" element={<HomePage 
                                                            topAnime={topAnime} 
                                                            actionAnime={actionAnime} 
                                                            shounenAnime={shounenAnime}
                                                            fantasyAnime={fantasyAnime} 
                                                            view={seeAnimeDetailsV4}
                                                            viewV3={seeAnimeDetailsV3}
                                                            />} 
                                                            />
                    <Route path="/AccountRegistration" element={<AccountRegistration accountCreation={registerUser} />} />
                    <Route path="/AnimeDetailsV4" element={<AnimeDetailsV4 
                                                            details={animeDetails} 
                                                            postCommentsV4={postComments}
                                                            getCommentsV4={getComments}
                                                            commentsV4={comments}
                                                            userV4={user}
                                                            />} 
                                                            />
                    <Route path="/AnimeDetails" element={<AnimeDetails
                                                            detailsV3={animeDetailsV3} 
                                                            postComments={postComments} 
                                                            user={user} 
                                                            getComments={getComments} 
                                                            comments={comments}
                                                            replies={replies}
                                                            getReplies={getReplies}
                                                            postReply={postReply}
                                                            />} 
                                                            />
                    <Route path="/SearchResult" element={<SearchResult searchResult={searchResult} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App