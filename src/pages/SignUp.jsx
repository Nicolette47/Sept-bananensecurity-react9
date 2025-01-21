import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';


function SignUp() {

    const {state, login} = useContext(AuthContext);
    console.log(state);


    function handleSubmit(e) {
        e.preventDefault();
        console.log("ik registreer me nu");
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username-field">Gebruikersnaam</label>
            <input type="text" id="username-field" name="gebruikersnaam"/>

            <label htmlFor="email-field">Emailadres</label>
            <input type="email" id="email-field" name="emailadres"/>

            <label htmlFor="password-field">Wachtwoord</label>
            <input type="password" id="password-field" name="wachtwoord"/>

            <button type="submit">
                Inloggen
            </button>
        </form>

        <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;