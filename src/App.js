import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// Components

import HeaderComp from "./components/Header"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import Bollywood from "./components/Bollywood/Bollywood"
import Technology from "./components/Technology/Technology"
import Hollywood from "./components/Hollywood/Hollywood"
import Fitness from "./components/Fitness/Fitness"
import Food from "./components/Food/Food"
import ShowArticle from "./components/ShowArticle/ShowArticle"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Footer from "./components/Footer"

// Darkmode Context

import { ContextTheme } from "./components/Context/ContextTheme"

// Styles

import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useContext(ContextTheme)

  const handleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={`App ${darkMode ? `Dark` : ""}`}>
      <HeaderComp />
      <button
        onClick={handleTheme}
        className={`darkModeBtn ${darkMode ? `Dark2` : "Light"}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ScrollToTop>
        {
          // to automatically scroll to the top of the page on each route change.
        }
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path="/show" element={<ShowArticle />} />
          <Route path="/article/:id" element={<ShowArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  )
}

export default App
