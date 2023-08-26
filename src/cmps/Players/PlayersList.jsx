import React, { useEffect, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import playersData from "../../pages/playersData.json";

function PlayersList() {
  const data = React.useMemo(() => playersData.elements, playersData.teams, []);

  const PlayerDetails = ({
    cell: { value },
    row: { original: playerData },
  }) => (
    <div className="player-cell">
      <img
        src={`https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/kits/2023-24/shirt_${playerData.team_code}-220.png`}
      />
      <div className="player-details">
        <p>{value}</p>
        <div className="player-pos">
          <p>{getPosition(playerData?.element_type)}</p>
          <p>{getTeam(playerData?.team_code)}</p>
        </div>
      </div>
    </div>
  );
  function getTeam(teamCode) {
    const team = playersData.teams.find((team) => team.code === teamCode);
    return team.short_name;
  }
  function getPosition(positionId) {
    if (positionId === 1) {
      return "GK";
    } else if (positionId === 2) {
      return "DEF";
    } else if (positionId === 3) {
      return "MID";
    } else {
      return "FWD";
    }
  }
  function handleChange(ev) {
    setGlobalFilter(ev.target.value);
  }
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "second_name",
        Cell: PlayerDetails,
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    setGlobalFilter,

    state: { pageIndex, globalFilter = "" },
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
  return (
    <div>
      <div className="global-filter">
        <span>Search: </span>
        <input value={globalFilter} onChange={handleChange} />
      </div>
      <div className="players-table">
        <table className="player-table-container" {...getTableProps()}>
          <thead className="table-header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ↑"
                          : " ↓"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table-body" {...getTableBodyProps()}>
            {page.map((row) => {
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
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            ←
          </button>
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayersList;
