import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Queue from "./components/Queue";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/queue" exact component={Queue}></Route>
        <Route path="/favorites" exact component={Favorites}></Route>
      </Switch>
    </Router>
  );

  //   <React.Fragment>
  //     <Router>
  //       <Navbar />
  //       <Switch>
  //         <Route path="/" exact component={SongList}></Route>
  //         <Route path="/queue" exact component={Queue}></Route>
  //         {/* <Queue /> */}
  //       </Switch>
  //     </Router>
  //   </React.Fragment>
  // );
}

export default App;
