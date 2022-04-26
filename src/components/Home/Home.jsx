import React from "react"
import { ArticleData } from "../Context/ContextData"
// import LatestTwo from "./LatestTwo"
// import { LatestAllData } from "../Context/ContextData"
import LatestAll from "./LatestAll"
import LatestOne from "./LatestOne"
import LatestThree from "./LatestThree"
// import { MainData } from "../Context/ContextData"
import MainGallery from "./MainGallery"

const Home = () => {
  return (
    <div className="mainContainer">
      <ArticleData>
        <MainGallery />
        <LatestAll />
        <LatestOne />
        <LatestThree />
      </ArticleData>
    </div>
  )
}

export default Home
