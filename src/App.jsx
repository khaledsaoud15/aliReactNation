import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import GroupeHeader from "./components/GroupeHeader";
import Features from "./components/Features";
import SeeProducts from "./components/SeeProducts";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GroupeHeader />
      <Features />
      <SeeProducts/>
    </>
  );
};

export default App;
