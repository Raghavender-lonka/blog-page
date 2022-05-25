import React, { useContext, useState, useEffect } from "react"

import axios from "axios"
import { Link } from "react-router-dom"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestThree() {
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
        <h1>Latest Stories</h1>
      </div>
      <hr />
      <div className="latestAllContainer">
        {article
          .filter((item) => item.id >= 21 && item.id <= 23)
          .map((item) => {
            return (
              <React.Fragment key={Math.floor(Math.random() * 1000)}>
                <div className="latestThreeArticle">
                  <div className="LatestAllText">
                    <Link to={`/article/${item.id}`} className="link">
                      <h2>{item.title}</h2>
                    </Link>
                    <p>{item.details}</p>
                    <br />
                    <p>{item.info}</p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            )
          })}
      </div>
      <hr />

      <Link to="/bollywood">
        <button className={` viewContainer ${darkMode ? "Dark" : "Light2"}`}>
          <p> VIEW MORE</p>
          <p className="viewMoreSpan">&nbsp;</p>
        </button>
      </Link>
    </div>
  )
}
