import PropTypes from 'prop-types';
import {
  FriendListItemCard,
  Status,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ items }) => {
  return items.map(({ avatar, name, isOnline, id }) => (
    <FriendListItemCard key={id}>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemCard>
  ));
};

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
