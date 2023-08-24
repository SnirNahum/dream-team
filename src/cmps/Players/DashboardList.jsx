import React, { useEffect, useState } from "react";

export default function DashboardList({ players }) {
  const [dreamTeamPlayers, setDreamTeamPlayers] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    if (players) getPlayers(players);
  }

  function getPlayers(el) {
    const filteredPlayers = el.filter((player) => player.in_dreamteam === true);
    setDreamTeamPlayers(filteredPlayers);
  }
  if (!dreamTeamPlayers) return <div>Loading...</div>;
  return (
    <div>
      {dreamTeamPlayers.map((player) => (
        <section key={player.id}>
          <p>{player.second_name}</p>
          <img
            src={`https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/kits/2023-24/shirt_${player.team_code}_1-220.png`}
          />
        </section>
      ))}
    </div>
  );
}
