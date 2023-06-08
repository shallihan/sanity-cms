import React from "react";
import styled  from 'styled-components';
import Article from "./Article";

const Articles = ({ articles }) => {
    return (
        <Container>
            { articles.edges.map((article, index) => <Article key={index} article={article.node} /> )}
        </Container>
    )

};

const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export default Articles;