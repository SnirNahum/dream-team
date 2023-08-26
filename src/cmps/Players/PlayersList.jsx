import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { getPosition } from "../../services/utilService";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const PlayerDetails = ({ cell: { value }, row: { original: player } }) => (
  <div className="player-cell">
    <img
      src={`https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/kits/2023-24/shirt_${player.team_code}-220.png`}
    />
    <div className="player-details">
      <p>{value}</p>
      <div className="player-pos">
        <p>{getPosition(player?.element_type)}</p>
        <p>{player.team_name}</p>
      </div>
    </div>
  </div>
);

const columns = [
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
];

function PlayersList() {
  const players = useSelector((state) => state.fplModule.players);

  // make PlayerDetails as a component

  function handleChange(ev) {
    setGlobalFilter(ev.target.value);
  }

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

    // add comopnenets of - filter, th, tr

    state: { pageIndex, globalFilter = "" },
  } = useTable(
    { columns, data: players },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const isPlayerListEmpty = players?.length === 0;

  return (
    <div>
      <div className="global-filter">
        <span>Search: </span>
        <input value={globalFilter} onChange={handleChange} />
      </div>
      {isPlayerListEmpty ? (
        <div>
          <Skeleton count={10} />
        </div>
      ) : (
        <div className="players-table">
          <table className="player-table-container" {...getTableProps()}>
            <thead className="table-header">
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
                      <td
                        key={cell.id}
                        className="table-cell"
                        {...cell.getCellProps()}
                      >
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
      )}
    </div>
  );
}

export default PlayersList;
