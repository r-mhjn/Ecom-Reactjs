import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import OrderScreen from "./Screens/OrderScreen";

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
        <Route path="/order" exact component={OrderScreen} />
      </Router>
    </div>
  );
}

export default App;
