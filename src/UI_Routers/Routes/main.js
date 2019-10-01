import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScreenInterfaces from '../../UI_Pages/ScreenInterfaces/ScreenInterfaces';

class Main extends React.Component {
    render() {
        return (
            <div className="App">
              <Router>
                <Route exact path={`/ScreenInterfaces/:path`} component={ScreenInterfaces} />
              </Router>
            </div>
          );
        
    }
}
export default Main;