import styled, { css } from 'styled-components';
import DatePicker from "react-datepicker";


const dataLabel = css`
    position:relative;
    height: 1.3em;
    min-width: 10%;
    font-size: 12px;
    text-decoration: underline;
`


export const DailyEntryHeader = styled.header`
    margin-top:.8em;
    padding: 5px;
    text-align: center;
    font-size: 20px;
    color: white;
    background-color: darkgrey;
    border: 1px solid rgb(95, 95, 95);
    background-color: rgb(95, 95, 95);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 78.6%;
`

export const DailyEntryContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: white;
    border: 1.5px solid rgb(146, 146, 146);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 70px;
    width: 80%;

`

export const AddRecord = styled.button`
    color: white;
    background-color:#1a75ff;
    border-color: #0052cc;
    width:auto;
    font-size: 11px;
    cursor:pointer;
    &:hover {background-color:#0066ff;}
`

const inputField = css`
    padding: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-style: solid;
    border-width: 1px;
`
export const Article = styled.article`
    width: 100%;
`;

export const FieldSet = styled.fieldset`
    border-color: transparent;
    padding-bottom:0px;
    margin-bottom:0;
`;

export const LabelContainer = styled.div`
`

export const InputContainer = styled.div`
    display: flex;
    justify-content:space-between;
`

export const Label = styled.label`
    height: 1.3em;
    min-width: 10%;
    font-size: 12px;
    
    text-decoration: underline;
    background-color:blue;
`;

export const OnHandLabel = styled.label`
    left: 18.5%;
    ${dataLabel}
`;

export const TransferLabel = styled.label`
    left: 24.4%;
    ${dataLabel}
`;

export const ReturnsLabel = styled.label`
    left: 30.2%;
    ${dataLabel}
`;

export const DamageLabel = styled.label`
    left: 37%;
    ${dataLabel}
`;


export const DateLabel = styled.label`
    height: 1.3em;
    font-size: 12px;
    text-decoration: underline;
    margin-right: 1%;
    width: 19%; 
`;

export const Input = styled.input`
    width: 12%;
    margin-right: 5px;
    border-radius:2px;
    text-align:center;
    ${inputField}
`;


export const ModalDate = styled(DatePicker)`
    width: 90px; 
    margin-right: 5px;
    border-radius:2px;
    text-align:center;
    ${inputField}
`

export const ViewAll = styled.label`
    position:relative;
    left: 37%;
    height: 10%;
    margin-left 3%;
    margin-top:.5%;
    color:darkblue;
    text-decoration:underline;
    cursor: pointer;
    &:hover{
        color:lightgrey;
    }
`