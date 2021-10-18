import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cookies from 'js-cookie';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import MainContext from 'contexts/MainContext';
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';
import Home from 'pages/Home';
import Score from 'pages/Scores';

function App() {
  const [pseudo, setPseudo] = useState(null);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCe3esxkhi91zgGGzF-WcJVtvVT-A-EotM",
    authDomain: "phbord-7f029.firebaseapp.com",
    databaseURL: "https://phbord-7f029.firebaseio.com",
    projectId: "phbord-7f029",
    storageBucket: "phbord-7f029.appspot.com",
    messagingSenderId: "1020923944028",
    appId: "1:1020923944028:web:acfef14c207fa9588b5a99",
    measurementId: "G-H2GTH1Y7YQ"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();
  console.log('=====>',app);
  console.log('=====>',db);

  return (
    <Router>
      <MainContext.Provider value={{
        pseudo: pseudo,
        setPseudo: (id) => setPseudo(id)
      }}>
        <HeaderComponent/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/scores">
            <Score/>
          </Route>
        </Switch>
        <FooterComponent/>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
