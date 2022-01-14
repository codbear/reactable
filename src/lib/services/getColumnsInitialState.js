const getColumnsInitialState = (columns) => {
  return columns.map((column, index) => {
    const { header, isSortable } = column;
    const sortingButtonProps = {
      'aria-label': `Sort rows by ${header}`,
      'aria-description': 'The column is not ordered',
    };

    return {
      header: {
        value: header,
      },
      isSortable: Boolean(isSortable),
      index: `column_${index}`,
      props: {
        header: { key: `column_${index}` },
        ...(isSortable ? { sortingButton: sortingButtonProps } : {}),
      },
    };
  });
};

export default getColumnsInitialState;
