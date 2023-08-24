import playersData from "../../pages/playersData.json";
import * as React from "react";
import { useTable, useGlobalFilter } from "react-table";

function PlayersList() {
  const data = React.useMemo(() => playersData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "second_name",
      },
      {
        Header: "Owned",
        accessor: "selected_by_percent",
      },
      {
        Header: "24h +/-",
        accessor: "transfers_in_event",
      },
      {
        Header: "Pts",
        accessor: "total_points",
      },
      {
        Header: "£",
        accessor: "now_cost",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div className="players-table">
        <table className="player-table-container" {...getTableProps()}>
          <thead className="table-header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table-body" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="table-row" key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="table-cell" {...cell.getCellProps()}>
                      {cell.column.id === "selected_by_percent"
                        ? `${cell.value}%`
                        : cell.column.id === "now_cost" && cell.value !== 0
                        ? `${cell.value / 10}`
                        : cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayersList;
