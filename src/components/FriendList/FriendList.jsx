import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import {List} from "../FriendList/FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(friend => {
                return (
                    <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
                )
            })}
        </List>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
    })),
};