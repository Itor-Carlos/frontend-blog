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

export const ButtonContainerPost = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        padding: 10px;
        background-color: #ff6347;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        margin-left: 10px;
    }

    button:hover {
        background-color: #e55337;
    }
`;