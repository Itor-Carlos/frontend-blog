import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e1e9ee;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`


export const PostHeader = styled.div`
    display: flex;
    align-items: center;
`

export const PostContent = styled.div`
    margin: 20px 0;
    color: #333;

    small{
        font-size: 14px;
    }
`

export const PostActions = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e1e9ee;
    padding-top: 10px;

    button{
        background: none;
        border: none;
        color: #0073b1;
        font-size: 14px;
        cursor: pointer;
    }

    button:hover{
        text-decoration: underline;
    }
`
