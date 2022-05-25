import React, { useContext, useState, useEffect } from "react"

import axios from "axios"
import { Link } from "react-router-dom"

import LatestTop from "./LatestTop"
import LatestTwo from "./LatestTwo"
import PrepbytesImage from "../../assests/ad1.png"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestOne() {
  const [showLoad, setShowLoad] = useState(false)
  const [darkMode] = useContext(ContextTheme)
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9000/").then((req, res) => {
      const data = req.data.filter((item) => item.id >= 6 && item.id <= 9)
      setArticle(data)
      // console.log("from node", data)
    })
  }, [])

  return (
    <div className="latestGridContainer">
      <div className="latestHeader">
        <h1>Latest Articles</h1>
        <hr />
      </div>
      <div className="latestArticlesContainer">
        <div className="latestOneContainer">
          <hr />
          {article.map((item) => {
            return item.id >= 6 && item.id <= 8 ? (
              <div
                className="latestOneArticle"
                key={Math.floor(Math.random() * 1000)}
              >
                <Link to={`/article/${item.id}`} className="link">
                  <img src={item.src} alt={item.alt} />
                </Link>
                <div className="LatestOneText">
                  <Link to={`/article/${item.id}`} className="link">
                    <h2>{item.title}</h2>
                  </Link>
                  <p>{item.details}</p>
                  <br />
                  <p>{item.info}</p>
                </div>
                {/* <hr /> */}
              </div>
            ) : null
          })}
          {!showLoad ? (
            <button
              className={` loadContainer ${darkMode ? "Dark" : "Light2"}`}
              onClick={() => setShowLoad(!showLoad)}
            >
              <span className="loadMoreSpan">&nbsp;</span>
              LOAD MORE
            </button>
          ) : null}
          {showLoad
            ? article.map((item) => {
                return item.id === 9 ? (
                  <div
                    className="latestOneArticle"
                    key={Math.floor(Math.random() * 1000)}
                  >
                    <Link to={`/article/${item.id}`} className="link">
                      <img src={item.src} alt={item.alt} />
                    </Link>
                    <div className="LatestOneText">
                      <Link to={`/article/${item.id}`} className="link">
                        <h2>{item.title}</h2>
                      </Link>
                      <p>{item.details}</p>
                      <br />
                      <p>{item.info}</p>
                    </div>
                    {/* <hr /> */}
                  </div>
                ) : null
              })
            : null}
        </div>
        <div className="ad">
          <a
            href="https://www.prepbytes.com/elevation-academy/mern-stack-web-development-career"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={PrepbytesImage}
              alt="pic"
              className="prepbytesImg"
              rel="noreferrer"
              // style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <LatestTwo className="latestTwo" />
        <LatestTop />
      </div>
    </div>
  )
}
