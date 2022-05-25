import React, { useEffect, useState } from "react"
import axios from "axios"

// import { ContextData } from "../Context/ContextData"
import AuthorImage from "../../assests/author.png"
import { Link, useParams } from "react-router-dom"
import "./showArticle.css"

export default function RelatedArticles() {
  const { id } = useParams()
  const [article, setArticle] = useState([])

  // const [DataContext] = useContext(ContextData)

  let extraStart = +id + 1
  let extraEnd = +id + 3

  if (id >= 34) {
    extraStart = 34
    extraEnd = 36
  }

  useEffect(() => {
    axios.get(`http://localhost:9000/home`).then((res) => {
      res.data.filter((item) => item.id >= extraStart && item.id >= extraEnd)
      setArticle(res.data)
      // console.log("from node", item)
    })
  }, [id, extraEnd, extraStart])

  return (
    <div className="moreArticles">
      {article.map((item) => {
        return item.id >= extraStart && item.id <= extraEnd ? (
          <div
            className="moreAllArticle"
            key={Math.floor(Math.random() * 1000)}
          >
            <h4>Related reads</h4>
            <Link to={`/article/${item.id}`} className="link">
              <img
                src={item.src}
                alt={"poster"}
                className="relatedArticleImage"
              />
            </Link>
            <div className="moreAllText">
              <Link to={`/article/${item.id}`} className="link">
                <h2>{item.title}</h2>
              </Link>
              {/* <br /> */}
              <div className="authorDetails">
                <img src={AuthorImage} alt="author" className="authorImage" />
                <div>
                  <p className="authorName">{item.author}</p>
                  <div className="writtenTime">
                    <small>{item.date}</small> . <small>{item.readTime}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      })}
    </div>
  )
}
