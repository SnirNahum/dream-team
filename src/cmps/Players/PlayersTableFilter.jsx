import React from "react";

export default function PlayersTableFilter({ filter, setFilter }) {
  return (
    <div>
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
}
