import React, { useEffect, useState } from "react"

import axios from "axios"
import { Link } from "react-router-dom"

const SideArticle = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9000/").then((req, res) => {
      const data = req.data
      setArticle(data)
      // console.log("from node", data)
    })
  }, [])

  return (
    <React.Fragment>
      {article
        .filter((item) => item.id >= 27 && item.id <= 28)
        .map((item) => {
          return (
            <div
              className="mainArticle2"
              key={Math.floor(Math.random() * 1000)}
            >
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="mainArticle2Text">
                <Link to={`/article/${item.id}`} className="link">
                  <h2 className="mainArticle2Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })}
    </React.Fragment>
  )
}

export default SideArticle
