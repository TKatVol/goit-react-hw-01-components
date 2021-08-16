import s from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({id, avatar, name, isOnline }) {
    return (
        <li key={id} className={s.item}>
            {isOnline
                ? <span className={s.status} style={{ backgroundColor: 'green' }}>{isOnline}</span>
                : <span className={s.status} style={{ backgroundColor: 'red' }}>{isOnline}</span>
            }
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        
        </li>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;