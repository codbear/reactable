import useTable from '../../hooks/useTable';

const Table = ({ data, columns }) => {
  const { header } = useTable(data, columns);

  return (
    <table>
      {header && (
        <thead>
          {header.rows.map((row) => (
            <tr {...row.props}>
              {row.cells.map((cell) => (
                <th {...cell.props}>{cell.value}</th>
              ))}
            </tr>
          ))}
        </thead>
      )}
    </table>
  );
};

export default Table;
