import React from "react";
import { Navbar } from "../App";
import { Router, Link } from "@reach/router";
import IntroducingHooks from "./introducing-hooks";
import HooksAtAGlance from "./hooks-at-a-glance";
import UsingTheStateHook from "./using-the-state-hook";
import UsingTheEffectHook from "./using-the-effect-hook";

const Index = () => (
  <>
    <Link to="/hooks/introducing-hooks">
      <h2>Introducing Hooks</h2>
    </Link>
    <Link to="/hooks/hooks-at-a-glance">
      <h2>Hooks at a Glance</h2>
    </Link>
    <Link to="/hooks/using-the-state-hook">
      <h2>Using the State Hook</h2>
    </Link>
    <Link to="/hooks/using-the-effect-hook">
      <h2>Using the Effect Hook</h2>
    </Link>
  </>
);

const Hooks = () => (
  <>
    <Navbar></Navbar>
    <Router>
      <Index path="/"></Index>
      <IntroducingHooks path="/introducing-hooks"></IntroducingHooks>
      <HooksAtAGlance path="/hooks-at-a-glance"></HooksAtAGlance>
      <UsingTheStateHook path="/using-the-state-hook"></UsingTheStateHook>
      <UsingTheEffectHook path="/using-the-effect-hook"></UsingTheEffectHook>
    </Router>
  </>
);

export default Hooks;
