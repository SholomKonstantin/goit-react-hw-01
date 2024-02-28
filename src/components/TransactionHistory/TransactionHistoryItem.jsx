import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({type, amount, currency}) => {
    amount = amount.toFixed(2);
    
    return (
        <>
        <td className={css.transtype}>{type}</td>
        <td className={css.transamount}>{amount}</td>
        <td className={css.transcurrency}>{currency}</td>
      </>
    );
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;