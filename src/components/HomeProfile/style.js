import styled from "styled-components"

export const HomeStyle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    background: url("https://cdn.dribbble.com/users/2317423/screenshots/15353491/tim_success_by_robikucluk_4x.jpg");
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 95%;
    max-width: 600px;
    height: 600px;
    border:3px solid #dfe4ea;
    border-radius: 8px;
    margin: 20px auto;
    padding: 20px;
    box-shadow:10px 10px 10px #353b48;

    h1 {
        text-align: center;
        font-size: 18px ;
        padding:10px;
        width: 85%;
        border-radius: 1.5rem;
        background: #7bed9f;
        color: #2f3542;
        box-shadow: 2px 5px 7px #2f3542
    }


    button {
        position: absolute;
        bottom: 0;
        background:#2ed573 ;
        margin:10px;
        color:#2f3542;
    }

`
