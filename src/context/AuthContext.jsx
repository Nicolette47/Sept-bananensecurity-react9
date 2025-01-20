import {createContext, useState} from 'react';

export const AuthContext = createContext();



export function AuthContextProvider({children}) {

    const[isAuth, toggleIsAuth] = useState(false);

    



    const data = {
        isAuth: isAuth,
        toggleIsAuth: toggleIsAuth,
    };


    return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    );
}

export default AuthContext;
