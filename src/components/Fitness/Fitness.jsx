import React from "react"
import TemplateComp from "../TemplateComp/TemplateComp"
// import "../Bollywood/bollywood.css"

export default function Fitness() {
  let Start = 21
  let End = 25
  let ArticleHeading = "Fitness"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}
