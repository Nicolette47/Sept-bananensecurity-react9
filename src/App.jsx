import React, {useContext, } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from './context/AuthContext';


function App() {

const {state} = useContext(AuthContext);
console.log(state);


    return (
        <>
            <div className="content">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/profile"
                        element={state.isAuth ? <Profile/> : <Navigate to="/SignIn" />}
                        />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </div>
        </>
    )
        ;
}

export default App;
