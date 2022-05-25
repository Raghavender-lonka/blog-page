import React from "react"
import TemplateComp from "../TemplateComp/TemplateComp"
// import "../Bollywood/bollywood.css"

export default function Hollywood() {
  let Start = 16
  let End = 20
  let ArticleHeading = "Hollywood"
  return <TemplateComp Start={Start} End={End} Heading={ArticleHeading} />
}
