import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

function Profile({ name, tag, location, avatar, stats}) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.text}>@{tag}</p>
                <p className={s.text}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.item}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li> 
            </ul>
        </div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile;