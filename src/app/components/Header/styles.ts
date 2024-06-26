import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #333;
    padding: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    min-width: 720px;

    .header-div{
        width: 90%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
        font-size: 24px;
        color: #ff6347;
        font-weight: bold;
    } 
`