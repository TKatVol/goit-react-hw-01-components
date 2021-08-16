import FriendListItem from "../FriendListItem/FriendListItem";
import s from '../FriendList/FriendList.module.css';
import PropTypes from "prop-types";

function FriendList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}
    
export default FriendList;