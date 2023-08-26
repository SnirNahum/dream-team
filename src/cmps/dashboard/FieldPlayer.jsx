export default function FieldPlayer({ player }) {
  return (
    <div className="dashboard-player" key={player.id}>
      <img
        src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
        alt=""
      />
      <p>{player.second_name}</p>
      <p title="Current price">{"£" + player.now_cost / 10}</p>
      <p title="Selected by others">{player.selected_by_percent + "%"}</p>
    </div>
  );
}
