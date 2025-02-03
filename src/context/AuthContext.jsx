import {createContext, useState} from 'react';
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({});



export function AuthContextProvider({children}) {

    const[state, setState] = useState({
        isAuth: false,
        user: '',
    });

    const navigate = useNavigate();

    function login() {
        setState({
            isAuth: true,
            user: "nicolette"
        })
        console.log("gebruiker is ingelogd");
        navigate('/profile');
    }

    function logout() {
        setState ({
            isAuth: false,
            user: '',
        })
        console.log("gebruiker is uitgelogd");
        navigate('/');
    }


    const data = {
        state: state,
        setState: setState,
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
