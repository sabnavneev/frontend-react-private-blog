import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogpostsPage from "./pages/BlogpostsPage";
import NavMenu from "./pages/NavMenu";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
      <NavMenu />

      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/blogposts">
            <BlogpostsPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
