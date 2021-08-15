import FriendListItem from "../FriendListItem/FriendListItem";
import s from '../FriendList/FriendList.module.css';
import PropTypes from "prop-types";

function FriendList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} className={s.item}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;