import React from "react"
import { Articles } from "../components"
import {  graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { articles } = data;
  return (
    <main>
      <Articles articles={articles} />
    </main>
  )
}

export const query = graphql`
query {
  articles: allSanityArticle {
    edges {
      node {
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        title
        subtitle
        _rawBody
        body {
          _type
          _key
          _rawChildren
          list
          style
          children {
            text
            _key
            _type
            marks
          }
        }
        date(formatString: "DD.MM.YY")
        author {
          name
        }
        topic {
          name
        }
      }
    }
  }
}`;

export default IndexPage

export const Head = () => <title>Archive</title>
