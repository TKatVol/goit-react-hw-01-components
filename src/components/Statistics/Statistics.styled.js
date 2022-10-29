import styled from "styled-components";

export const StatisticsCard = styled.section`
    width: 320px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
`;

export const StatisticsTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.179;
    text-align: center;
`;

export const StatisticsList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const StatisticsListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;

    background-color:${props => `${props.backgroundColor}`};
`;

export const StatisticsLabel = styled.span`
    text-align: center;
    color: #ffffff;
`;

export const StatisticsPercentage = styled.span`
    text-align: center;
    color: #ffffff;
`;