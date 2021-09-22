import styled from "styled-components"


export const FormContainer = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    max-width: 350px;
    height: 450px;
    margin: 50px auto;
    border-radius: 8px;
    background-color:#f1f2f6;
    box-shadow: 1px 2px 5px #1e272e;

    h1 {
        font-size: 16px;
        text-transform: upperCase;
        color: #a4b0be;
    }

    Button {
        margin: 15px auto;
        width: 150px;
        background: #2ed573;
    } 

    input {
        border-radius: 8px;
        background:transparent;
        box-shadow: 1px 3px 4px #a4b0be;
       
    }

    input:focus {
        width: 210px;
        box-shadow: 1px 8px 4px #a4b0be;;
    }

`