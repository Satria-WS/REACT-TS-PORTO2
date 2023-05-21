import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App: React.FC = () => {
  return (
    <div className="">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
};

export default App;
