import styled from "styled-components";

export const CheckoutTableContainer = styled.div`
    width: 60%;
    display: flex;
    min-height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 50px auto;
`;

export const CheckoutHeaders = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid darkgray;
`;

export const CheckoutHeader = styled.div`
    text-transform: uppercase;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;
