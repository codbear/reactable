import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { useTable } from '../../hooks';
import { TableContext } from '../../contexts';

import TableCell from '../TableCell';
import TableCellHeader from '../TableCellHeader';
import Paginator from '../Paginator';
import SearchBar from '../SearchBar';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataField: PropTypes.string.isRequired,
      isSortable: PropTypes.bool,
    })
  ).isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.string,
  headerTextColor: PropTypes.string,
  itemsPerPage: PropTypes.number,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  hasSearchBar: PropTypes.bool,
};

const defaultProps = {
  variant: 'outlined',
  color: '#c7c7c7',
  headerTextColor: '#000000',
  itemsPerPage: 0,
  itemsPerPageOptions: [25, 50, 100],
  hasSearchBar: false,
};

const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const StyledTable = styled.table`
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

const variantToTableHeaderRow = {
  outlined: TableHeaderRowOutlined,
  filled: TableHeaderRowFilled,
};

const Table = ({
  data,
  columns: userDefinedColumns,
  variant,
  color,
  headerTextColor,
  itemsPerPage,
  itemsPerPageOptions,
  onChangeItemsPerPage,
  hasSearchBar,
}) => {
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

  const { columns, rows, hasHeader, onSort, pagination, onSearch } = useTable(
    data,
    userDefinedColumns,
    itemsPerPage
  );

  const TableHeaderRow = variantToTableHeaderRow[variant];

  return (
    <ThemeProvider theme={theme}>
      <TableContext.Provider
        value={{ onSort, pagination, onChangeItemsPerPage, itemsPerPageOptions, onSearch }}
      >
        {hasSearchBar && <SearchBar />}

        <TableWrapper>
          <StyledTable>
            {hasHeader && (
              <thead>
                <TableHeaderRow>
                  {columns.map((column) => (
                    <TableCellHeader column={column} {...column.props.header} />
                  ))}
                </TableHeaderRow>
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
          </StyledTable>

          {pagination.numberOfPages > 0 && <Paginator />}
        </TableWrapper>
      </TableContext.Provider>
    </ThemeProvider>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
