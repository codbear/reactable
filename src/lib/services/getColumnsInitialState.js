const getColumnsInitialState = (columns) => {
  return columns.map((column, index) => ({
    header: {
      value: column.header,
      props: { key: `column_${index}` },
    },
    isSortable: column.isSortable || false,
  }));
};

export default getColumnsInitialState;
