import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ArticleData, ContextData } from "../Context/ContextData"
import SideArticle from "./SideArticle"

const MainGallery = () => {
  const [dataContext] = useContext(ContextData)
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
  return (
    <div className="container">
      {dataContext.map((item) => {
        return item.id === 26 ? (
          <div className="mainArticle1" key={Math.random()}>
            <Link to={`/article/${item.id}`} className="link">
              <img src={item.src} alt={item.alt} />
            </Link>
            <div className="mainArticle1Text">
              <Link to={`/article/${item.id}`} className="link">
                <h2>{item.title}</h2>
              </Link>
              {/* <h2>{item.title}</h2> */}
              <small>{item.info}</small>
            </div>
          </div>
        ) : null
      })}
      {/* <div className="mainArticle1">
        <img
          src="https://images.unsplash.com/photo-1468901184895-0cec1ee34ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="valley"
        />
        <div className="mainArticle1Text">
          <h2>Title of vertical gallery</h2>
          <small>Travel / April 22 2022</small>
        </div>
      </div> */}
      <ArticleData>
        <SideArticle />
      </ArticleData>
    </div>
  )
}

export default MainGallery
