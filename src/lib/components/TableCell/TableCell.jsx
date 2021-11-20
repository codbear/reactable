import styled from 'styled-components';

const TableCell = styled.td`
  padding: 6px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export default TableCell;
