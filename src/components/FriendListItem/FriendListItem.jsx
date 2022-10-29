import PropTypes from 'prop-types';
import { ListItem, UserAvatar, UserName, UserStatus } from "../FriendListItem/FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <UserStatus status={ isOnline} />
            <UserAvatar src={avatar} alt="User avatar" />
            <UserName>{name}</UserName>
        </ListItem>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};