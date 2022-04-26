import "./App.css"
import { Routes, Route } from "react-router-dom"
import HeaderComp from "./components/Header"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import Bollywood from "./components/Bollywood/Bollywood"
import Technology from "./components/Technology/Technology"
import Hollywood from "./components/Hollywood/Hollywood"
import Fitness from "./components/Fitness/Fitness"
import Food from "./components/Food/Food"
import { ArticleData } from "./components/Context/ContextData"
import ShowArticle from "./components/ShowArticle/ShowArticle"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
// import { useState } from "react"

function App() {
  // const [darkMode, setDarkMode] = useState(false)

  // let Dark = {
  //   backgroundColor: "black",
  //   color: "white",
  // }

  return (
    // <div className={darkMode ? `App Dark` : `App`}>
    <div className="App">
      <HeaderComp />
      {/* <button onClick={() => setDarkMode(!darkMode)} className="darkModeBtn">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
      <ArticleData>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
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
      </ArticleData>
    </div>
  )
}

export default App
