const getRowsInitialState = (data, columns) => {
  return data.map((row, rowIndex) => {
    const rowCells = columns.map((column, columnIndex) => ({
      props: { key: `row_${rowIndex}_column_${columnIndex}` },
      value: row[column.dataField],
    }));

    return {
      props: { key: `row_${rowIndex}` },
      cells: rowCells,
    };
  });
};

export default getRowsInitialState;
