// src/App.tsx

import React from 'react';
import './App.scss';
import Hello from './layout/hello/hello';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {


  return (
 <Router>
      <div>

        <Route exact path="/hello" component={Hello} />
        {/* <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/register" component={SignUp} /> */}
      </div>
    
    </Router>
  )
}

export default App;
