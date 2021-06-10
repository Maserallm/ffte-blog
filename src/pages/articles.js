import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"

const ArticleStyles = styled.div`
  display: grid;
`

const Articles = () => (
  <ArticleStyles>
    <Seo title="Posts From The Ends" />
    <h1>This page will have article posts</h1>
    <p>Eastend Link Articles Will Go Here</p>
    <Link to="/">Go back to the homepage</Link>
  </ArticleStyles>
)

export default Articles
