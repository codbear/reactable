const getRowsInitialState = (data, columns) => {
  return data.map((row, rowIndex) => {
    const rowCells = columns.map((column, columnIndex) => ({
      props: { key: `row_${rowIndex}_column_${columnIndex}` },
      columnIndex: `column_${columnIndex}`,
      rowIndex: `row_${rowIndex}`,
      value: row[column.dataField],
    }));

    return {
      props: { key: `row_${rowIndex}` },
      cells: rowCells,
    };
  });
};

export default getRowsInitialState;
