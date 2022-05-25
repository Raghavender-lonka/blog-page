import React, { useEffect, useState, useContext } from "react"

import axios from "axios"
import { Link } from "react-router-dom"
// import { ContextData } from "../Context/ContextData"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestAll() {
  // const [DataContext] = useContext(ContextData)
  const [darkMode] = useContext(ContextTheme)

  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9000/").then((req, res) => {
      const data = req.data
      setArticle(data)
      // console.log("from node", data)
    })
  }, [])

  return (
    <div className="articleContainer">
      <div className="latestHeader">
        <h1>The Latest</h1>
        <hr />
      </div>
      <div className="latestAllContainer">
        {article
          .filter((item) => item.id >= 29 && item.id <= 31)
          .map((item) => {
            return (
              <div
                className={`latestAllArticle ${darkMode ? `Dark2` : "Light"}`}
                key={Math.floor(Math.random() * 1000)}
              >
                <Link to={`/article/${item.id}`} className="link">
                  <img src={item.src} alt={item.alt} />
                </Link>
                <div className="LatestAllText">
                  <Link to={`/article/${item.id}`} className="link">
                    <h2>{item.title}</h2>
                  </Link>
                  <p>{item.details}</p>
                  {/* <br /> */}
                  <p>{item.info}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
