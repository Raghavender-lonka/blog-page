import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import SideArticle from "./SideArticle"
import axios from "axios"

const MainGallery = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  console.log("rendering")
  const fetchData = () => {
    axios.get("http://localhost:9000/").then((req) => {
      const data = req.data
      setArticle(data)
      // console.log("from node", data)
    })
  }

  return (
    <div className="container">
      {article
        .filter((item) => item.id === 26)
        .map((item) => {
          return (
            <div className="mainArticle1" key={Math.random()}>
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt="valley" />
              </Link>
              <div className="mainArticle1Text">
                <Link to={`/article/${item.id}`} className="link">
                  <h2 className="mainArticle1Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })}

      <SideArticle />
    </div>
  )
}

export default MainGallery

//   console.log(data)
// const [data, setData] = useState([])
//   useEffect(() => {
//     var url =
//       "https://newsapi.org/v2/top-headlines?" +
//       "country=in&" +
//       "apiKey=107fb3cea03f45cbab64c8b909fb8967"

//     fetch(url).then((response) => {
//       response.json().then((data) => {
//         var data1 = data.articles.slice(0, 20)
//         setData(data1)
//         console.log(data.articles)
//       })
//     })
//   }, [])
