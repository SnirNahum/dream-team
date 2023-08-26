import { useEffect, useState } from "react";
import { elementTypes } from "../../services/utilService";
export default function DashboardList({ dreamTeamPlayers }) {
  // do all the logic from the store

  if (!dreamTeamPlayers) return <div>Loading...</div>;

  //add set state
  const categorizedPlayers = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  dreamTeamPlayers.forEach((player) => {
    categorizedPlayers[player.element_type].push(player);
  });

  return (
    <section className="dashboard-dream-team">
      <section className="dashboard-field">
        <img src="../src/assets/imgs/field.png" alt="Field" />
      </section>
      <section className="dashboard-players">
        {Object.keys(categorizedPlayers).map((elementType) => (
          <section key={elementType} className={elementTypes[elementType]}>
            {categorizedPlayers[elementType].map((player) => (
              //add componenet of Dashboard player
              <div className="dashboard-player" key={player.id}>
                <img
                  src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
                  alt=""
                />
                <p>{player.second_name}</p>
                <p title="Current price">{"£" + player.now_cost / 10}</p>
                <p title="Selected by others">
                  {player.selected_by_percent + "%"}
                </p>
              </div>
            ))}
          </section>
        ))}
      </section>
    </section>
  );
}
