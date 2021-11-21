import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { useTable, useSorting as useDefaultSorting } from '../../hooks';
import TableCell from '../TableCell';
import TableCellHeader from '../TableCellHeader';

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

  useSorting: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

const defaultProps = {
  variant: 'outlined',
  color: '#c7c7c7',
  headerTextColor: '#000000',
  useSorting: false,
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
  useSorting,
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

  const registeredServices = useMemo(() => {
    const shouldUseSorting = useSorting !== false;
    const shouldUseCustomSorting = shouldUseSorting && typeof useSorting === 'function';
    const sortingHook = shouldUseCustomSorting ? useSorting : useDefaultSorting;

    return {
      ...(shouldUseSorting ? { useSorting: sortingHook } : {}),
    };
  }, [useSorting]);

  const { columns, rows, hasHeader, onSort } = useTable(
    data,
    userDefinedColumns,
    registeredServices
  );

  const TableHeaderRow = variantToTableHeaderRow[variant];

  return (
    <ThemeProvider theme={theme}>
      <TableWrapper>
        <TableContainer>
          {hasHeader && (
            <thead>
              <TableHeaderRow>
                {columns.map((column) => (
                  <TableCellHeader column={column} onSort={onSort} {...column.props.header} />
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
        </TableContainer>
      </TableWrapper>
    </ThemeProvider>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
