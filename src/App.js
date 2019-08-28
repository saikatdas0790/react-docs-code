import React from "react";
import { Router, Link } from "@reach/router";
import Hooks from "./hooks/hooks";

const Home = () => (
  <div className="App">
    <Navbar></Navbar>
  </div>
);

const Navbar = () => (
  <nav>
    <h1 style={{ display: "inline-block" }}>
      <Link to="/">Home</Link>
    </h1>{" "}
    <h1 style={{ display: "inline-block" }}>
      <Link to="/hooks">Hooks</Link>
    </h1>
  </nav>
);

function App() {
  return (
    <>
      <Router>
        <Home path="/"></Home>
        <Hooks path="/hooks/*"></Hooks>
      </Router>
    </>
  );
}

export { App as default, Navbar };
