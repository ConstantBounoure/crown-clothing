import styled from "styled-components";
import {
    BaseButtonContainer,
    InvertedButton,
    GoogleButton,
    DisabledButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 540px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButtonContainer},
    ${InvertedButton},
	${GoogleButton},
	${DisabledButton} {
        margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 440px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;
