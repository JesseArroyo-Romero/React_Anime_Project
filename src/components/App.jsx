import React, { useEffect, useState} from 'react';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import LoginScreen from './LoginScreen/LoginScreen';
import HomePage from './HomePage/HomePage';
import AccountRegistration from './AccountRegistration/AccountRegistration';
import HeaderAndNav from './HeaderAndNav/HeaderAndNav';


function App() {

    const [loadData, setLoadData] = useState(false)
    const [user, setUser] = useState({})
    const [topAnime, setTopAnime] = useState({})
    const [currentAnime, setCurrentAnime] = useState('')

    useEffect(() => {
        getTopAnime()
    })

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
            console.log("get user jwt call", user)
            console.log(jwt)
        } catch (error) {
            console.log("Error in decoding JWT token: ", error)
            setUser({})
        }
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
        let response = await axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
        setTopAnime(response.data.top)
        console.log(response.data.top)
    }

    // const getCurrentAnime = async (anime) => {
    //     setCurrentAnime(anime)
    // }

    return (
        <div>
            <Router>
                <HeaderAndNav logOut={logOut}/>
                <Routes>
                    <Route path="/Profile" element={<ProfilePage user={user} />} />
                    <Route path="/login" element={<LoginScreen loginUserCall={loginUser} />} />
                    <Route path="/" element={<HomePage topAnime={topAnime} />} />
                    <Route path="/AccountRegistration" element={<AccountRegistration accountCreation={registerUser} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App