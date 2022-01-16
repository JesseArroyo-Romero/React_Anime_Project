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
import EditProfile from './EditProfile/EditProfile';
import './App.css'
import CategoriesV4 from './CategoriesV4/CategoriesV4';
import ActionAnimeV4 from './ActionAnimeV4/ActionAnimeV4';
import AlternateAnimeDetailsV4 from './AlternateAnimeDetailsV4/AlternateAnimeDetailsV4';
import AdventureAnimeV4 from './AdventureAnimeV4/AdventureAnimeV4';
import AdventureAnimeDetailsV4 from './AdventureAnimeDetailsV4/AdventureAnimeDetailsV4';


function App() {
    const [loadData, setLoadData] = useState(false)
    const [user, setUser] = useState({})
    const [topAnime, setTopAnime] = useState([])
    const [actionAnime, setActionAnime] = useState([])
    const [actionAnimeV4, setActionAnimeV4] =useState([])
    const [actionAnimeDetailsV4, setActionAnimeDetailsV4] = useState({})
    const [shounenAnime, setShounenAnime] = useState([])
    const [fantasyAnime, setFantasyAnime] = useState([])
    const [animeDetails, setAnimeDetails] = useState([])
    const [animeDetailsV3, setAnimeDetailsV3] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [comments, setComments] = useState([])
    const [adventureV4, setAdventureV4] = useState([])
    const [adventureDetailsV4, setAdventureDetailsV4] = useState({})
    const [awardWinningAnimeV4, setAwardWinningAnimeV4] = useState([])


    useEffect(() => {
        getTopAnime()
        getActionAnimeV3()
        getShounenAnimeV3()
        getFantasyAnimeV3()
        getActionAnimeV4()
        getAdventureAnimeV4()
    }, [])

    let combinedList = [...actionAnime, ...shounenAnime, ...fantasyAnime]

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
        console.log(objectBeingPassedIn)
        let newUser = {
            username:objectBeingPassedIn.username,
            password:objectBeingPassedIn.password,
            email:objectBeingPassedIn.email,
            first_name:objectBeingPassedIn.firstName,
            last_name:objectBeingPassedIn.lastName,
            middle_name:objectBeingPassedIn.middleName,
        }
        try {
          let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', JSON.stringify(newUser), {
              headers:{
                  'content-type': 'application/json'
              }
          })
          console.log(response.data)
            
        } catch (error) {
            console.log(error.message)
            
        }
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

    const seeActionAnimeDetailsV4 = (anime) => {
        let details = actionAnimeV4.data.filter((detailsOfAnime) => detailsOfAnime.mal_id === anime)
        setActionAnimeDetailsV4(details)
        console.log("details V4", actionAnimeDetailsV4)
    }

    const seeAdventureAnimeDetailsV4 = (anime) => {
        let details = adventureV4.filter((detailsOfAnime) => detailsOfAnime.mal_id === anime)
        setAdventureDetailsV4(details)
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

    const editProfile = async (userObject) => {
        const jwt = localStorage.getItem('token')
        let id = user.id
        console.log(id)
        let response = await axios.put(`http://127.0.0.1:8000/api/auth/edit/${id}`, userObject, {headers:{Authorization:'Bearer ' + jwt}})
        setUser(response.data)
    }

    const getActionAnimeV4 = async () => {
        let response = await axios.get('https://api.jikan.moe/v4/anime?genres=1')
        setActionAnimeV4(response.data)
        console.table("Category action", actionAnimeV4.data)
    }

    const getAdventureAnimeV4 = async () => {
        let response = await axios.get('https://api.jikan.moe/v4/anime?genres=2')
        setAdventureV4(response.data.data)
        console.log('Adventure', response.data.data)
    }

    const getAwardWinningAnimeV4 = async () => {

    }

    return (
        <div>
            <Router>
                <HeaderAndNav logOut={logOut} searchAnimeV4={searchAnimeV4}/>
                <Routes>
                    <Route path="/Profile" element={<ProfilePage user={user} deets={user}/>} />
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
                    <Route path="/AccountRegistration" element={<AccountRegistration 
                                                            accountCreation={registerUser} 
                                                            />} 
                                                            />
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
                                                            postReply={postReply}
                                                            />} 
                                                            />
                    <Route path="/SearchResult" element={<SearchResult 
                                                            searchResult={searchResult} 
                                                            />} 
                                                            />
                    <Route path="/EditProfile" element={<EditProfile 
                                                            edit={user} 
                                                            editCall={editProfile}
                                                            />} 
                                                            />
                    <Route path="/CategoriesV4" element={<CategoriesV4 />} 
                                                            />
                    <Route path="/ActionAnimeV4" element={<ActionAnimeV4 
                                                            actionAnimeV4={actionAnimeV4.data}
                                                            viewV4={seeActionAnimeDetailsV4}
                                                            />} 
                                                            />
                    <Route path="/AdventureAnimeV4" element={<AdventureAnimeV4 
                                                            adventureV4={adventureV4}
                                                            viewV4={seeAdventureAnimeDetailsV4}
                                                            />}
                                                            />
                    <Route path="/AlternateAnimeDetailsV4" element={<AlternateAnimeDetailsV4 
                                                            animeActionV4={actionAnimeDetailsV4}
                                                            />}
                                                            />
                    <Route path="AdventureAnimeDetailsV4" element={<AdventureAnimeDetailsV4                                                            
                                                            adventureV4={adventureDetailsV4}
                                                            />}
                                                            />

                </Routes>
            </Router>
        </div>
    )
}

export default App