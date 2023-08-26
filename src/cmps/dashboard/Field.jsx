import { playerPositions } from "../../services/utilService";
import FieldPosition from "./FieldPosition";

export default function Field({ dreamTeamPlayers }) {
  return (
    <section className="field-container">
      {Object.keys(dreamTeamPlayers).map((playerPosition) => (
        <FieldPosition
          key={playerPosition}
          dreamTeamPlayers={dreamTeamPlayers[playerPosition]}
          playerPosition={playerPositions[playerPosition]}
        />
      ))}
    </section>
  );
}
