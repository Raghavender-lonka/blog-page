import React from "react"
import TemplateComp from "../TemplateComp/TemplateComp"
import "./bollywood.css"

export default function Bollywood() {
  let Start = 6
  let End = 10
  let ArticleHeading = "Bollywood"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}

// <div className="mainContainer">
//   <div className="latestHeader">
//     <h1>Bollywood</h1>
//     <hr />
//   </div>
//   <div className="ArticlesContainer">
//     <div className="ArticlesOneContainer">
//       <hr />
//       {DataContext.map((item) => {
//         return item.id >= 2 && item.id <= 5 ? (
//           <div
//             className="latestOneArticle"
//             key={Math.floor(Math.random() * 1000)}
//           >
//             <Link to={`/article/${item.id}`}>
//               <img src={item.src} alt={item.alt} />
//             </Link>
//             <div className="LatestOneText">
//               <h2>{item.title}</h2>
//               <p>{item.details}</p>
//               <br />
//               <p>{item.info}</p>
//             </div>
//             {/* <hr /> */}
//           </div>
//         ) : null
//       })}
//       {!showLoad ? (
//         <button
//           className="loadContainer"
//           onClick={() => setShowLoad(!showLoad)}
//         >
//           <span className="loadMoreSpan">&nbsp;</span>
//           LOAD MORE
//         </button>
//       ) : null}
//       {showLoad
//         ? DataContext.map((item) => {
//             return item.id === 5 ? (
//               <div
//                 className="latestOneArticle"
//                 key={Math.floor(Math.random() * 1000)}
//               >
//                 <img src={item.src} alt={item.alt} />
//                 <div className="LatestOneText">
//                   <h2>{item.title}</h2>
//                   <p>{item.details}</p>
//                   <br />
//                   <p>{item.info}</p>
//                 </div>
//                 {/* <hr /> */}
//               </div>
//             ) : null
//           })
//         : null}
//     </div>
//     <div className="topPlusAd">
//       <div className="topPosts">
//         {" "}
//         {DataContext.map((item) => {
//           return item.id === 1 ? (
//             <div
//               className="topOneArticle"
//               key={Math.floor(Math.random() * 1000)}
//             >
//               <img src={item.src} alt={item.alt} />
//               <div className="topArticlesText">
//                 <div>
//                   <h2>{item.title}</h2>
//                   <p>{item.info}</p>
//                   {/* <br /> */}
//                 </div>
//                 <div className="topListNum">{item.id}</div>
//               </div>
//               {/* <hr /> */}
//             </div>
//           ) : null
//         })}
//         {DataContext.map((item) => {
//           return item.id >= 2 && item.id <= 4 ? (
//             <div
//               className="topArticle"
//               key={Math.floor(Math.random() * 1000)}
//             >
//               <img src={item.src} alt={item.alt} />
//               <div className="topArticlesText">
//                 <div className="topArticlesInfo">
//                   <h4>{item.title}</h4>
//                   <p>{item.info}</p>
//                   {/* <br /> */}
//                 </div>
//                 <div className="topListNum">{item.id}</div>
//               </div>
//               {/* <hr /> */}
//             </div>
//           ) : null
//         })}
//       </div>
//       <div className="pageAd">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
//         quibusdam unde voluptatibus expedita distinctio quidem minus dolorem
//         eligendi eaque nam rerum cum, impedit deleniti quis minima eum totam
//         laborum libero?
//       </div>
//     </div>
//   </div>
// </div>
