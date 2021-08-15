import s from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={s.card}>
            {isOnline
                ? <span className={s.status} style={{ backgroundColor: 'green' }}>{isOnline}</span>
                : <span className={s.status} style={{ backgroundColor: 'red' }}>{isOnline}</span>
            }
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;