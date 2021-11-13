import styled from 'styled-components';

import useTable from '../../hooks/useTable';

const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const TableContainer = styled.table`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  height: 52px;

  &:hover {
    background-color: #fafafa;
  }
`;

const TableHeaderRow = styled.tr`
  height: 56px;
`;

const TableCell = styled.td`
  padding: 6px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const TableHeaderCell = styled(TableCell)`
  text-align: left;
  white-space: nowrap;
`;

const Table = ({ data, columns }) => {
  const { header, rows } = useTable(data, columns);

  return (
    <TableWrapper>
      <TableContainer>
        {header && (
          <thead>
            {header.rows.map((row) => (
              <TableHeaderRow {...row.props}>
                {row.cells.map((cell) => (
                  <TableHeaderCell as="th" {...cell.props}>
                    {cell.value}
                  </TableHeaderCell>
                ))}
              </TableHeaderRow>
            ))}
          </thead>
        )}

        <tbody>
          {rows.map((row) => (
            <TableRow {...row.props}>
              {row.cells.map((cell) => (
                <TableCell {...cell.props}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </TableWrapper>
  );
};

export default Table;
