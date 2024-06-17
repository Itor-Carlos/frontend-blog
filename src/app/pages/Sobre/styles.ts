import styled from "styled-components";

export const AboutContainer = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 40px;
    width: 600px;
    margin: 40px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Title = styled.h1`
    color: #333;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    color: #666;
    font-size: 18px;
    line-height: 1.6;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const ListItem = styled.li`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 15px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Footer = styled.footer`
    margin-top: 20px;
    color: #999;
    font-size: 14px;
`;
