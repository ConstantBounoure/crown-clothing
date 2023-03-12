import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-size: 28px;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;
