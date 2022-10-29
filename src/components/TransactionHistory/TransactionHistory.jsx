import PropTypes from 'prop-types';
import { StyledTable, TableHead, TableHeadTR, TableHeading, TableBody, TableData, TableBodyTR } from "../TransactionHistory/TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableHeadTR>
                    <TableHeading>Type</TableHeading>
                    <TableHeading>Amount</TableHeading>
                    <TableHeading>Currency</TableHeading>
                </TableHeadTR>
            </TableHead>

            <TableBody>
            
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <TableBodyTR key={id} >
                            <TableData>{type}</TableData>
                            <TableData>{amount}</TableData>
                            <TableData>{currency}</TableData>
                        </TableBodyTR>
                    )
                })}
            </TableBody>
        </StyledTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })),
};
