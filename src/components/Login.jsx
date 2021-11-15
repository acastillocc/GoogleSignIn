import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";

const Login = () => {
  const [user, setUser] = useState('empty');
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setUser(user.displayName)
        } else {
            setUser('');
        }
      });
  }, [])

  const SignInWithFirebase = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((re) => {
        console.log(re.user.displayName);
        setUser(re.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LogOut = () => {
    firebase.auth().signOut();
    setUser('');
  }

  if (user === 'empty') return <></>;

  if (user) {
    return (

      <div>
        <p> ¡Hola, {user}! </p>
        <center> <div className="LogOut" onClick={LogOut} >Cerrar sesión</div> </center>
      </div>
    );
  }

  return (
    <button onClick={SignInWithFirebase}> Inicia sesión con Google </button>
  );
};

export default Login;
