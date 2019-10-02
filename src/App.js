import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";

// <Navbar />
// <TabPanel />
// <Login />
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
