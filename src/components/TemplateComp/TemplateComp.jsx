import React, { useEffect, useState, useContext } from "react"

import axios from "axios"
import { Link } from "react-router-dom"

import { ContextTheme } from "../Context/ContextTheme"
import "./templateComp.css"
import PrepbytesImage from "../../assests/ad1.png"
import Spinner from "./Spinner"

export default function TemplateComp(props) {
  const { End, Heading } = props
  const [showLoad, setShowLoad] = useState(false)
  const [darkMode] = useContext(ContextTheme)
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(false)

  const category = Heading.toLowerCase()

  useEffect(() => {
    axios
      .get(
        `https://guarded-caverns-05482.herokuapp.com/api/v1/category/?category=${category}`
      )
      .then((req) => {
        const data = req.data.data
        setArticle(data)
        setLoading(true)

        // console.log("from node", data)
      })
  }, [category])

  return (
    <div className="mainContainer">
      {loading ? (
        <>
          <div className="ArticlesContainer">
            <div>
              <div className="topicHeader">
                <h1>{Heading}</h1>
              </div>
              <div className="ArticlesOneContainer">
                {article.slice(0, 4).map((item) => {
                  return (
                    <div
                      className="latestOneArticle"
                      key={Math.floor(Math.random() * 1000000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
                      </Link>
                      <div className="LatestOneText">
                        <Link to={`/article/${item.id}`} className="link">
                          <h2>{item.title}</h2>
                        </Link>
                        <p>{item.details}</p>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  )
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
                      return item.id === End ? (
                        <div
                          className="latestOneArticle"
                          key={Math.floor(Math.random() * 1000000)}
                        >
                          <Link to={`/article/${item.id}`} className="link">
                            <img src={item.src} alt={"poster"} />
                          </Link>
                          <div className="LatestOneText">
                            <Link to={`/article/${item.id}`} className="link">
                              <h2>{item.title}</h2>
                            </Link>
                            <p>{item.details}</p>
                            {/* <br /> */}
                            <p>{item.info}</p>
                          </div>
                          {/* <hr /> */}
                        </div>
                      ) : null
                    })
                  : null}
              </div>
            </div>
            <div className="topPlusAd">
              <div className="topPosts">
                <div className="latestHeader">
                  <h1>Top Posts</h1>
                  <hr />
                </div>
                {article.slice(5, 6).map((item, index) => {
                  return (
                    <div
                      className="topOneArticle"
                      key={Math.floor(Math.random() * 1000000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
                      </Link>
                      <div className="topArticlesText">
                        <div>
                          <Link to={`/article/${item.id}`} className="link">
                            <h2>{item.title}</h2>
                          </Link>
                          <p>{item.info}</p>
                          {/* <br /> */}
                        </div>
                        <div className="topListNum">{index + 1}</div>
                      </div>
                      {/* <hr /> */}
                    </div>
                  )
                })}
                {article.slice(6).map((item, index) => {
                  return (
                    <div
                      className="topArticle"
                      key={Math.floor(Math.random() * 1000000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
                      </Link>
                      <div className="topArticlesText">
                        <div className="topArticlesInfo">
                          <Link to={`/article/${item.id}`} className="link">
                            <h4>{item.title}</h4>
                          </Link>
                          <p>{item.info}</p>
                          {/* <br /> */}
                        </div>
                        <div className="topListNum">{index + 2}</div>
                      </div>
                      {/* <hr /> */}
                    </div>
                  )
                })}
              </div>
              <div className="pageAd">
                <a
                  href="https://www.prepbytes.com/elevation-academy/mern-stack-web-development-career"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={PrepbytesImage}
                    alt="pic"
                    className="prepbytesImg"
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <h1>Loading...</h1> */}
          <Spinner />
        </>
      )}
    </div>
  )
}
