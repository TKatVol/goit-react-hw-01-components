import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    box-shadow: 8px 10px 14px 0px rgba(34, 60, 80, 0.2);
`;

export const UserAvatar = styled.img`
    margin-right: 20px;
    width: 48px;
`;

export const UserName = styled.p`
    margin: 0;
    padding: 20px;
    font-weight: 800;
    font-size: 20px;
    line-height: 1.179;
    text-align: center;
`;

export const UserStatus = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    border-radius: 50%;

    background-color: ${props => props.status ? "green" : "red"};
`;