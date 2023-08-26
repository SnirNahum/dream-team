import { useSelector } from "react-redux";
import DashboardList from "../cmps/dashboard/DashboardList";

export default function Dashboard() {
  const dreamTeamPlayers = useSelector(
    (state) => state.fplModule.dreamTeamPlayers
  );

  return (
    <div className="teams">
      {dreamTeamPlayers ? (
        <DashboardList dreamTeamPlayers={dreamTeamPlayers} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
