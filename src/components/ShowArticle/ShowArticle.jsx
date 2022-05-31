import React, { useContext, useEffect, useState } from "react"
// import Footer from "../Footer"
import { useParams } from "react-router-dom"
import axios from "axios"

import { ContextTheme } from "../Context/ContextTheme"
import AuthorImage from "../../assests/author.png"
import "./showArticle.css"
import {
  RedditShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"

import {
  RedditIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"
import Spinner from "../TemplateComp/Spinner"

export default function ShowArticle() {
  const { id } = useParams()
  const [darkMode] = useContext(ContextTheme)
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://guarded-caverns-05482.herokuapp.com/api/v1/article/${id}`)
      .then((res) => {
        setArticle(res.data)
        setLoading(false)
      })
  }, [id])

  return (
    <div>
      {!loading ? (
        <div className="containerArticle">
          {article.map((item) => {
            return item.id === +id ? (
              <div className="Article" key={Math.floor(Math.random() * 1000)}>
                <h2 className="articleTitle">{item.title}</h2>

                <div className="authorDetailsContainer">
                  <div className="authorDetails">
                    <img
                      src={AuthorImage}
                      alt="author"
                      className="authorImage"
                    />
                    <div>
                      <p className="authorName">{item.author}</p>
                      <div>
                        <small>{item.date}</small> .{" "}
                        <small>{item.readTime}</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <RedditShareButton
                      url={window.location.href}
                      title={item.title}
                    >
                      <RedditIcon size={32} round={true} />
                    </RedditShareButton>
                    &nbsp;
                    <WhatsappShareButton
                      url={window.location.href}
                      title={item.title}
                    >
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    &nbsp;
                    <TwitterShareButton
                      url={window.location.href}
                      title={item.title}
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    &nbsp;
                    <LinkedinShareButton
                      url={window.location.href}
                      title={item.title}
                      summary={item.details}
                    >
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                  </div>
                </div>
                <img src={item.src} alt={"poster"} className="articleImage" />
                <br />
                <br />
                <br />
                <p>{item.details}</p>

                <div className="articleText">{item.description}</div>
                <br />
                <div className={` articleTags ${darkMode ? "Dark2" : "Light"}`}>
                  {item.tags}
                </div>

                <hr />
                <div className="authorDetails">
                  <img src={AuthorImage} alt="author" className="authorImage" />
                  <div>
                    <p className="writtenBy">WRITTEN BY</p>
                    <p className="authorName">{item.author}</p>
                    <div>
                      <small>{item.date}</small> .{" "}
                      <small>{item.readTime}</small>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ) : null
          })}
        </div>
      ) : (
        <>
          {/* <h1>Loading...</h1> */}
          <Spinner />
        </>
      )}
    </div>
  )
}
