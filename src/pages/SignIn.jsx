import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';


function SignIn() {

    const {state, login} = useContext(AuthContext);
    console.log(state);


    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="login-emailfield">Emailadres:</label>
                <input type="email" id="login-emailfield" name="loginemailadres"/>

                <label htmlFor="login-passwordfield">Wachtwoord:</label>
                <input type="password" id="login-passwordfield" name="loginwachtwoord"/>

                <button type="submit">
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;