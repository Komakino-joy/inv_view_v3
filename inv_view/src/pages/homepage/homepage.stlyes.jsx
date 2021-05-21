import styled, {css} from 'styled-components';

export const HomePageBody = styled.div`
    height: 100vh;
    background: rgb(133,82,167);
    background: radial-gradient(circle, rgba(133,82,167,1) 0%, rgba(67,5,117,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const buttonStyles = css`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    text-align:center;
    height: 50px;
    width: 200px;
    border-radius: 5px;
    pointer:cursor;
    margin-bottom: 1em;
    font-size: 20px;
    background-color: #7128a8;
    box-shadow: -1px 5px 7px -1px rgba(0,0,0,0.97);
    :active {
        transform: translate(0, 0.1rem);
        box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
    }
`

export const FulfillmentButton = styled.button`
    ${buttonStyles}
`

export const CheggButton = styled.button`
    ${buttonStyles}
`

export const Image = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 10%;
`