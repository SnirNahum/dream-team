import { useSelector } from "react-redux";
import DreamTeamView from "../cmps/dashboard/DreamTeamView";

export default function Dashboard() {
  const dreamTeamPlayers = useSelector(
    (state) => state.fplModule.dreamTeamPlayers
  );

  return dreamTeamPlayers ? (
    <DreamTeamView dreamTeamPlayers={dreamTeamPlayers} />
  ) : (
    <div>Loading...</div>
  );
}
