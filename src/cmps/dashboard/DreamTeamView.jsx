import Field from "./Field";
export default function DreamTeamView({ dreamTeamPlayers }) {
  if (!dreamTeamPlayers) return <div>Loading...</div>;

  return <Field dreamTeamPlayers={dreamTeamPlayers} />;
}
