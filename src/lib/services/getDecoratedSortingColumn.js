const getDecoratedSortingColumn = (column, onSort, sortingState) => {
  const { key: columnKey } = column.header.props;
  const isColumnSorted = sortingState.currentSortingColumn === columnKey;

  return {
    ...column,
    isSortedAsc: isColumnSorted ? sortingState.isCurrentColumnSortedAsc : false,
    isSortedDesc: isColumnSorted ? sortingState.isCurrentColumnSortedDesc : false,
    onSort: () => onSort(column.header.props.key),
  };
};

export default getDecoratedSortingColumn;
