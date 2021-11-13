const getHeaderInitialState = (columns) => {
  const headerCells = columns.map((column, index) => ({
    value: column.header,
    props: { key: `headerCell_${index}` },
  }));

  const hasHeader = Boolean(headerCells.length);

  if (!hasHeader) {
    return null;
  }

  return {
    rows: [
      {
        props: {
          key: 'headerRow',
        },
        cells: headerCells,
      },
    ],
  };
};

export default getHeaderInitialState;
