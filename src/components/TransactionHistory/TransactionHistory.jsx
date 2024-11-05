import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transtable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <TransactionHistoryItem 
                            type={type} 
                            amount={Number(amount)} 
                            currency={currency} 
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default TransactionHistory;