import FieldPlayer from "./FieldPlayer";

export default function FieldPosition({ dreamTeamPlayers, playerPosition }) {
  return (
    <section key={playerPosition} className={playerPosition}>
      {dreamTeamPlayers.map((player) => (
        <FieldPlayer player={player} key={player.id} />
      ))}
    </section>
  );
}
