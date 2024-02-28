import PropTypes from 'prop-types';
import './App.css'
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from '../data/transactions.json';

function App() {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}

export default App