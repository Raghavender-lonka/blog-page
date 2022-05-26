import React, { useEffect, useState, useContext } from "react"
import { ContextTheme } from "../Context/ContextTheme"
import Carousel from "./Carousel"

import axios from "axios"
import { Link } from "react-router-dom"
import PrepbytesImage from "../../assests/ad1.png"
import Spinner from "../TemplateComp/Spinner"

const Home = () => {
  const [article, setArticle] = useState([])
  const [darkMode] = useContext(ContextTheme)
  const [showLoad, setShowLoad] = useState(false)
  const [loading, setLoading] = useState(false)

  const url = "https://guarded-caverns-05482.herokuapp.com/api/v1/home"
  useEffect(() => {
    axios.get(url).then((res) => {
      setArticle(res.data)
      setLoading(true)
      // console.log("from node", data)
    })
  }, [url])

  return (
    <div className="mainContainer">
      {loading ? (
        <>
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
                        <img src={item.src} alt={"poster"} />
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
          </div>
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
                      className={`latestAllArticle ${
                        darkMode ? `Dark2` : "Light"
                      }`}
                      key={Math.floor(Math.random() * 1000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
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
                        <img src={item.src} alt={"poster"} />
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
                            <img src={item.src} alt={"poster"} />
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
              {/* <LatestTwo className="latestTwo" /> */}
              <React.Fragment>
                <div className="latestTwoContainer latestTwo">
                  <Carousel>
                    {article.map((item) => {
                      return item.id >= 31 && item.id <= 36 ? (
                        <div
                          className="latestTwoArticle"
                          key={Math.floor(Math.random() * 1000)}
                        >
                          <Link to={`/article/${item.id}`} className="link">
                            <img src={item.src} alt={"poster"} />
                          </Link>
                          <div className="latestTwoText">
                            <Link to={`/article/${item.id}`} className="link">
                              <h3 className="latestTwoHeading">{item.title}</h3>
                            </Link>
                            <p>{item.info}</p>
                          </div>
                        </div>
                      ) : null
                    })}
                  </Carousel>
                </div>
              </React.Fragment>
              {/* <LatestTop /> */}
              <div className="topArticles">
                <div className="latestHeader">
                  <h1>Top Posts</h1>
                  <hr />
                </div>
                {article.map((item) => {
                  return item.id === 1 ? (
                    <div
                      className="topOneArticle"
                      key={Math.floor(Math.random() * 1000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
                      </Link>
                      <div className="topArticlesText">
                        <div className="topOneArticleInfo">
                          <Link to={`/article/${item.id}`} className="link">
                            <h2>{item.title}</h2>
                          </Link>
                          <p>{item.info}</p>
                        </div>
                        <div className="topListNum">{item.id}</div>
                      </div>
                    </div>
                  ) : null
                })}
                {article.map((item) => {
                  return item.id >= 2 && item.id <= 4 ? (
                    <div
                      className="topArticle"
                      key={Math.floor(Math.random() * 1000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={"poster"} />
                      </Link>
                      <div className="topArticlesText">
                        <div className="topArticlesInfo">
                          <Link to={`/article/${item.id}`} className="link">
                            <h2>{item.title}</h2>
                          </Link>
                          <p>{item.info}</p>
                          {/* <br /> */}
                        </div>
                        <div className="topListNum">{item.id}</div>
                      </div>
                      {/* <hr /> */}
                    </div>
                  ) : null
                })}
              </div>
            </div>
          </div>
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
              <button
                className={` viewContainer ${darkMode ? "Dark" : "Light2"}`}
              >
                <p> VIEW MORE</p>
                <p className="viewMoreSpan">&nbsp;</p>
              </button>
            </Link>
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

export default Home
/* <MainGallery /> */
/* <LatestAll /> */
/* <LatestOne /> */
/* <LatestThree /> */
