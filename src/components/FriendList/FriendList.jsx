import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
    <ul className={css.friends}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return (
            <li key={id} className={css.frienditem}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
            );
        })}
    </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;