const filterRows = (rows, searchInput) => {
  if (!searchInput) {
    return rows;
  }

  return rows.filter((row) =>
    row.cells.some((cell) =>
      cell.value.toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  );
};

export default filterRows;
