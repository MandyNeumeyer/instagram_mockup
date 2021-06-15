import React from "react"
import "./scss/main.scss"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Data from "./data.json"
import Retro from "./stories.json"

//package.json script
//"homepage":"https://MandyNeumeyer.github.io/instagram_clone",
// "predeploy":"npm run build",
// "deploy": "gh-pages -d build",

function App() {
  return (
    <div className="App">
      <Header/>
      <Main gallery={Data} retro={Retro} />
    </div>
  );
}

export default App;


