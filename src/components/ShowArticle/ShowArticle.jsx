import React, { useContext, useState } from "react"
import { ContextData } from "../Context/ContextData"
import "./showArticle.css"
import AuthorImage from "../../assests/author.png"
import Clap from "../../assests/clap.svg"
import { Link, useParams } from "react-router-dom"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

export default function ShowArticle() {
  const { id } = useParams()
  const [DataContext, setDataContext] = useContext(ContextData)
  const [counter, setCounter] = useState(1)

  const upvoteHandler = () => {
    setCounter((counter) => counter + 1)
    setDataContext((prevState) =>
      prevState.map((article) =>
        article.id === id
          ? {
              ...DataContext,
              clap: counter,
            }
          : article
      )
    )
  }

  let extraStart = +id + 1
  let extraEnd = +id + 3

  if (id >= 34) {
    extraStart = 34
    extraEnd = 36
  }

  const MoreArticles = (
    <div className="moreArticles">
      {DataContext.map((item) => {
        return item.id >= extraStart && item.id <= extraEnd ? (
          <div
            className="moreAllArticle"
            key={Math.floor(Math.random() * 1000)}
          >
            <h4>Related reads</h4>
            <Link to={`/article/${item.id}`} className="link">
              <img
                src={item.src}
                alt={item.alt}
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
                  <div>
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

  return (
    <div>
      <div className="containerArticle">
        {DataContext.map((item) => {
          return item.id === +id ? (
            <div className="Article" key={Math.floor(Math.random() * 1000)}>
              <h2 className="articleTitle">{item.title}</h2>

              <div className="authorDetailsContainer">
                <div className="authorDetails">
                  <img src={AuthorImage} alt="author" className="authorImage" />
                  <div>
                    <p className="authorName">{item.author}</p>
                    <div>
                      <small>{item.date}</small> .{" "}
                      <small>{item.readTime}</small>
                    </div>
                  </div>
                </div>
                <div>
                  <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  &nbsp;
                  <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  &nbsp;
                  <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  &nbsp;
                  <LinkedinShareButton url={window.location.href}>
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </div>
              </div>
              <img src={item.src} alt={item.alt} className="articleImage" />
              <br />
              <br />
              <br />
              <div className="articleText">{item.description}</div>
              <br />
              <div className="articleTags">{item.tags}</div>
              <div className="clapContainer">
                <button onClick={upvoteHandler}>
                  <img src={Clap} alt="clap" className="clap" />
                </button>
                {/* <p>{item.clap} claps</p> */}
                <p>{counter} claps</p>
              </div>
              <hr />
              <div className="authorDetails">
                <img src={AuthorImage} alt="author" className="authorImage" />
                <div>
                  <p className="writtenBy">WRITTEN BY</p>
                  <p className="authorName">{item.author}</p>
                  <div>
                    <small>{item.date}</small> . <small>{item.readTime}</small>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ) : null
        })}
      </div>
      <div className="moreArticlesContainer">
        <h3>More From The Siren</h3>
        <hr />
        {MoreArticles}
      </div>
    </div>
  )
}
