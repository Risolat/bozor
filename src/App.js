import React from "react"
import "./App.css"
import Header from "./components/Header/Header.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import SiteNaviagtion from "./components/SiteNavigation/SiteNavigation.js"
import Hero from "./components/Hero/Hero.js"
import Brends from "./components/Brends/Brends"
import Xits from "./components/Xits/Xits"
import Ad from "./components/Ad/Ad.js"
import Products from "./components/Products/Products"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import sms from "./images/sms.svg"

function App() {
  return (
    <div className="app__container">
      <div className="app">
        <Header />
        <SiteNaviagtion />
        <div className="hero-container">
          <Sidebar />
          <Hero />
        </div>
        <Brends />
        <Xits />
        <Ad />
        <Products />
        <About />
        <Footer />
      </div>
      <button className="app__container-btn">
        <img src={sms} alt="sms" />
      </button>
    </div>
  )
}

export default App
