import styled from 'styled-components';

export const LatestEntryHeader = styled.header`
    margin-left: 3.5%;
    border: 1px solid gray;
    border-radius: 5px 5px 0 0;
    color: whitesmoke;
    font-size: 18px;
`;

export const BreakdownContainer = styled.div`
    margin-left: 3.5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 5px 0px;
    border: 1px solid gray;
    border-radius: 0 0 5px 5px;
    margin-bottom: 5em;

    @media screen and (max-width: 1000px) {
        justify-content: flex-start;
    }
`;

export const BreakdownLabelContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 90%;
    min-width: 80px;
    padding-left: 1px;
    padding-right: 1px;
    text-align: center; 
`;

export const BreakdownQty = styled.div`
    display:flex;
    justify-content: space-between;
    background-color:white;
    width: 90%;
    min-width: 80px;
    padding-left: 1px;
    padding-right: 1px;
    text-align: center; 
`;

export const BreakdownLabel = styled.div`
    font-size: 14px;
    text-decoration:underline;
    label padding: 2px;
    width: 100px;
`;

export const BreakdownQtyLabel = styled.label`
    border: 1px solid black;
    margin-top: 2.2px;
    width: 100px;
`;