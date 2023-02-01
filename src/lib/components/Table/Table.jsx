import React, { useMemo } from 'react';
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
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      divider: PropTypes.string,
      text: PropTypes.string,
    })
  }),
  isThemeDisabled: PropTypes.boolean,
};

const defaultProps = {
  variant: 'outlined',
  color: '',
  headerTextColor: '',
  itemsPerPage: 0,
  itemsPerPageOptions: [25, 50, 100],
  hasSearchBar: false,
  theme: {
    palette: {
      primary: '#c7c7c7',
      secondary: '#fafafa',
      divider: '#e5e8ec',
      text: '#000000',
    }
  },
  isThemeDisabled: false,
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

const disabledTheme = {
  palette: {
    primary: '',
    secondary: '',
    divider: '',
    text: '',
  }
}

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
  theme,
  isThemeDisabled
}) => {
  const memoizedTheme = useMemo(
    () => isThemeDisabled ? disabledTheme : {
      palette: {
        primary: color || theme.palette.primary,
        secondary: theme.palette.secondary,
        divider: theme.palette.divider,
        text: headerTextColor || theme.palette.text,
      },
    },
    [color, headerTextColor, isThemeDisabled, theme.palette.divider, theme.palette.primary, theme.palette.secondary, theme.palette.text]
  );

  const { columns, rows, hasHeader, onSort, pagination, onSearch } = useTable({
    data,
    userDefinedColumns,
    itemsPerPage,
  });

  const TableHeaderRow = variantToTableHeaderRow[variant];

  return (
    <ThemeProvider theme={memoizedTheme}>
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

          {Boolean(itemsPerPage) && pagination.numberOfPages > 0 && <Paginator />}
        </TableWrapper>
      </TableContext.Provider>
    </ThemeProvider>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
