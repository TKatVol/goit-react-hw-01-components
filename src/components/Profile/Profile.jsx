import PropTypes from 'prop-types';
import {
    ProfileCard, UserInfo, UserImage, UserName, UserTag, UserLocation,
    StatsList, StatsListItem, StatsListLabel, StatsListQuantity
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileCard>
   
        <UserInfo>
            <UserImage src={avatar} alt="User avatar" />
            <UserName >{username}</UserName>
            <UserTag>{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        </UserInfo>
     
        <StatsList>
            <StatsListItem>
                <StatsListLabel>Followers</StatsListLabel>
                <StatsListQuantity>{stats.followers}</StatsListQuantity>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Views</StatsListLabel>
                <StatsListQuantity>{stats.views}</StatsListQuantity>
            </StatsListItem>
            <StatsListItem>
                <StatsListLabel>Likes</StatsListLabel>
                <StatsListQuantity>{stats.likes}</StatsListQuantity>
            </StatsListItem>
            </StatsList>
            
        </ProfileCard>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
};