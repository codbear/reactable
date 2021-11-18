const getSortedRows = (rows, sortingColumn) => {
  if (!sortingColumn) {
    return rows.reverse();
  }

  const minifiedRows = rows.map((row, rowIndex) => {
    const cellToSort = row.cells.find(
      (cell) => cell.props.key === `row_${rowIndex}_${sortingColumn}`
    );

    return {
      index: rowIndex,
      value: cellToSort.value.toLocaleLowerCase(),
    };
  });

  minifiedRows.sort((row, nextRow) => {
    if (row.value > nextRow.value) {
      return 1;
    }
    if (row.value < nextRow.value) {
      return -1;
    }

    return 0;
  });

  return minifiedRows.map((row) => rows[row.index]);
};

export default getSortedRows;
