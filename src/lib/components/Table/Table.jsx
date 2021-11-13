import useTable from '../../hooks/useTable';

const Table = ({ data, columns }) => {
  const { header, rows } = useTable(data, columns);

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

      <tbody>
        {rows.map((row) => (
          <tr {...row.props}>
            {row.cells.map((cell) => (
              <td {...cell.props}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
