import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cookies from 'js-cookie';

import HeaderComponent from 'components/HeaderComponent';
import Home from 'pages/Home';
import Score from 'pages/Score';
import MainContext from 'contexts/MainContext';

function App() {
  return (
    <Router>
      <MainContext.Provider value={{pseudo: ''}}>
        <HeaderComponent/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/score">
            <Score/>
          </Route>
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
