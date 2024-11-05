import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.friendavatar} />
            <p className={css.friendname}>{name}</p>
            <p className={isOnline ? css.friendisonline : css.friendnotonline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </>
    );
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;