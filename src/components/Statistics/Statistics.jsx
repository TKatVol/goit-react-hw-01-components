import PropTypes from 'prop-types';
import { StatisticsCard, StatisticsTitle, StatisticsList, StatisticsListItem, StatisticsLabel, StatisticsPercentage } from "../Statistics/Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
    
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <StatisticsList>  
                {stats.map(({ id, label, percentage }) => {
                    let colorOptions = '#' + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                    return (
                        <StatisticsListItem key={id} backgroundColor={colorOptions}>
                            <StatisticsLabel>{label}</StatisticsLabel>
                            <StatisticsPercentage>{percentage}</StatisticsPercentage>
                        </StatisticsListItem>
                    )
                })}
            </StatisticsList>
 
        </StatisticsCard>
    )
};    

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};