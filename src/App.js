import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainContext from 'contexts/MainContext';
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';
import Home from 'pages/Home';
import Score from 'pages/Scores';

function App() {
  const [pseudo, setPseudo] = useState(null);

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
