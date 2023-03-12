import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryTitle = styled.h2`
    text-transform: uppercase;
    font-size: 38px;
    margin: 30px auto;
`;

export const ProductCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 20px;
`;
