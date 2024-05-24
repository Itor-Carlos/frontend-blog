import styled from "styled-components";

export const PostContainer = styled.main`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 700px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`


export const PostHeader = styled.div`
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
`

export const PostContent = styled.div`
    p{
        font-size: 16px;
        color: #555;
        line-height: 1.6;
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
