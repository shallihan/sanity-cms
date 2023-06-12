import React from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const portableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },
  },
};

const Article = ({ article }) => {
  console.log(article);
  return (
    <Container>
      <GatsbyImage image={getImage(article.mainImage.asset)} alt={article.title} />
      <ArticleTopic>{article.topic.name}</ArticleTopic>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
      <ArticleDetails>
        <span>By {article.author.name}</span>
        <span>|</span>
        <span>{article.date}</span>
      </ArticleDetails>
      <ArticleBlock>
        <PortableText
          value={article._rawBody}
          components={portableTextComponents}
        />
      </ArticleBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  font-family: "Helvetica Neue", sans-serif;
  gap: 1rem;
`;

const ArticleTitle = styled.h2`
  line-height: 1.3;
  font-size: 1.602rem;
  margin: 0;
`;

const ArticleSubtitle = styled.h3`
  line-height: 1.7;
  font-size: 1.266rem;
  font-weight: 400;
  font-style: italic;
  margin: 0;
`;

const ArticleTopic = styled.span`
  text-transform: uppercase;
  line-height: 1.3;
  font-size: 0.889rem;
`;

const ArticleDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.325rem;
  span {
    line-height: 1.3;
    font-size: 0.889rem;
    text-transform: uppercase;
  }
`;

const ArticleBlock = styled.div`
  line-height: 1.7;
  font-size: 1.125rem;
`;

export default Article;
