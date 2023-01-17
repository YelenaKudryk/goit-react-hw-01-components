import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHeader,
  TableData,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, type, amount, currency }) => (
    <TableRow key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  ));

  return (
    <TransactionTable>
      <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>

      <tbody>{elements}</tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
