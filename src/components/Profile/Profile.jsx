import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDesc,
  ProfileImg,
  ProfileText,
  ProfileTextTag,
  ProfileTextLocation,
  ProfileStat,
  StatItems,
  StatItemsName,
  StatItemsQuan,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDesc>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileText>{username}</ProfileText>
        <ProfileTextTag>@{tag}</ProfileTextTag>
        <ProfileTextLocation>{location}</ProfileTextLocation>
      </ProfileDesc>

      <ProfileStat>
        <StatItems>
          <StatItemsName>Followers</StatItemsName>
          <StatItemsQuan>{followers}</StatItemsQuan>
        </StatItems>
        <StatItems>
          <StatItemsName>Views</StatItemsName>
          <StatItemsQuan>{views}</StatItemsQuan>
        </StatItems>
        <StatItems>
          <StatItemsName>Likes</StatItemsName>
          <StatItemsQuan>{likes}</StatItemsQuan>
        </StatItems>
      </ProfileStat>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
