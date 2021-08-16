import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

function Statistics({ title, stats }) {
    
    return (
        <section className={s.card}>
            {title && <h2 className={s.title}>{title}</h2>}
             
            <ul className={s.list}>
                {stats.map(stat => {
                    let colorOptions = '#' + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                    return (
                        <li className={s.item} key={stat.id} style = {{backgroundColor: `${colorOptions}`}}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}


export default Statistics;