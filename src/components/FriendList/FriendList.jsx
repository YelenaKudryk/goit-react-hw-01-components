import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendListCard } from './FriendList.styled';

export const FriendList = ({ items }) => {
  return (
    <FriendListCard>
      <FriendListItem items={items} />
    </FriendListCard>
  );
};

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  items: PropTypes.array.isRequired,
};
