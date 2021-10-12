import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cookies from 'js-cookie';

import HeaderComponent from 'components/HeaderComponent';
import Home from 'pages/Home';
import Score from 'pages/Scores';
import MainContext from 'contexts/MainContext';
import FooterComponent from 'components/FooterComponent';

function App() {
  return (
    <Router>
      <MainContext.Provider value={{pseudo: ''}}>
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
