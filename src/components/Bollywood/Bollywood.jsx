import React from "react"
import TemplateComp from "../TemplateComp/TemplateComp"
// import "./bollywood.css"

export default function Bollywood() {
  let Start = 6
  let End = 10
  let ArticleHeading = "Bollywood"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}
