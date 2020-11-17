import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVideos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecomendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
