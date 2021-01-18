import * as React from "react";
import MainPage from "./pages/main/MainPage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeModules } from "./appModules";

makeModules();

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}
