import styled from 'styled-components';


export const Header  = styled.h4`
    background-color: rgb(35, 38, 88);
    color: white;
    padding: 0.5em;
    text-align: center;
    margin-bottom: 0;
`;

export const ModalMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1010;
    background: rgba(240, 240, 240, 0.9);
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    @media screen and (max-width: 1500px) {
        height: 157vh;
      }
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 5%;
    height: 80vh;
    width: 50vw;
    min-width: 646px;
    padding-bottom: 2em;
    background-color: white;
    z-index: 1011;
    overflow: auto;
    border-radius: 10px;
    box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
`;
export const CloseButton  = styled.span`
    color: Black;
    position:absolute;
    text-align:right;
    width: 55%;
    z-index: 1020;
    :hover {
    color: rgb(192, 0, 0);
    cursor: pointer;
`;
