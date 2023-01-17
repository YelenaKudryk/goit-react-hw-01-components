import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-align: center;
  background-color: ${p => p.theme.colors.white};
  width: 600px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radius.normal};
`;

export const TableHeader = styled.th`
  background-color: ${p => p.theme.colors.backgroundBody};
  padding: ${p => p.theme.spacing(2)};
`;

export const TableData = styled.td`
  padding: ${p => p.theme.spacing(2)};
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.backgroundBody};
  }
`;
