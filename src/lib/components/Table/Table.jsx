import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import useTable from '../../hooks/useTable';
import { useMemo } from 'react';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,

  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataField: PropTypes.string.isRequired,
    })
  ).isRequired,

  variant: PropTypes.oneOf(['filled', 'outlined']),

  color: PropTypes.string,

  headerTextColor: PropTypes.string,
};

const defaultProps = {
  variant: 'outlined',
  color: '#c7c7c7',
  headerTextColor: '#000000',
};

const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const TableContainer = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  height: 52px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

const TableHeaderRowOutlined = styled.tr`
  height: 56px;
`;

const TableHeaderRowFilled = styled(TableHeaderRowOutlined)`
  background-color: ${({ theme }) => theme.palette.primary};
`;

const TableCell = styled.td`
  padding: 6px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const TableHeaderCell = styled(TableCell)`
  color: ${({ theme }) => theme.palette.text};
  text-align: left;
  white-space: nowrap;
`;

const variantToTableHeaderRow = {
  outlined: TableHeaderRowOutlined,
  filled: TableHeaderRowFilled,
};

const Table = ({ data, columns, variant, color, headerTextColor }) => {
  const theme = useMemo(
    () => ({
      palette: {
        primary: color,
        secondary: '#fafafa',
        divider: '#e5e8ec',
        text: headerTextColor,
      },
    }),
    [color, headerTextColor]
  );

  const { header, rows } = useTable(data, columns);

  const TableHeaderRow = variantToTableHeaderRow[variant];

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
