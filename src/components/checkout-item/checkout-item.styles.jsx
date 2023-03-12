import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    padding: 10px 0;
    align-items: center;
    font-size: 20px;
    border-bottom: 1px solid darkgray;
`;

export const ImgContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Field = styled.span`
    width: 23%;
`;

export const Quantity = styled(Field)`
    display: flex;
    align-items: center;
`;

export const Value = styled.span`
    margin: 0 10px;
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const RemoveContainer = styled.div`
    width: 8%;
    cursor: pointer;
`;
