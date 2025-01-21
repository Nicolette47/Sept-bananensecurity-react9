import {createContext, useState} from 'react';
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({});



export function AuthContextProvider({children}) {

    const[isAuth, toggleIsAuth] = useState(false);

    const navigate = useNavigate();

    function login() {
        toggleIsAuth(true)
        console.log("gebruiker is ingelogd");
        navigate('/profile');
    }

    function logout() {
        toggleIsAuth(false)
        console.log("gebruiker is uitgelogd");
        navigate('/');
    }


    const data = {
        isAuth: isAuth,
        toggleIsAuth: toggleIsAuth,
        login: login,
        logout: logout,
    };


    return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    );
}

export default AuthContext;
