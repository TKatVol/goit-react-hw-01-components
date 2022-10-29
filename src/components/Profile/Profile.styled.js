import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;

    text-align: center;
  
    border: 1px solid #cccccc;
    box-shadow: 8px 10px 14px 0px rgba(34, 60, 80, 0.2);
`;

export const UserInfo = styled.div`
    padding: 20px;
    background-color: #ffffffff;
`;

export const UserImage = styled.img`
    width: 160px;
    padding: 20px;
    border-radius: 50%;
    overflow: hidden;
`;

export const UserName = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.179;
`;

export const UserTag = styled.p`
    margin:0;
    padding: 8px;
    color: #7d8687;
`;

export const UserLocation = styled.p`
    margin:0;
    padding: 8px;
    color: #7d8687;
`;

export const StatsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
`;

export const StatsListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0fbfc;
    border: 1px solid #cccccc;
`;

export const StatsListLabel = styled.span`
    color: #7d8687;
`;

export const StatsListQuantity = styled.span`
    font-weight: 800;
    font-size: 20px;
    line-height: 1.179;
`;