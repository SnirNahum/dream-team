import { fplService } from "../../services/fplService";
import { SET_FILTER_BY, SET_GENERALINFO } from "../reducers/fpl.reducer";
import { store } from "../store";

export async function loadGeneralInfo() {
  try {
    const generalInfo = await fplService.loadGeneralInfo();
    const players = generalInfo.elements;
    const teams = generalInfo.teams;
    const dreamTeamPlayers = players.filter(
      (player) => player.in_dreamteam === true
    );

    players.forEach((player, index) => {
      players[index]["team_name"] = getTeam(player.team_code, teams);
    });

    const categorizedPlayers = {
      1: [],
      2: [],
      3: [],
      4: [],
    };

    dreamTeamPlayers.forEach((player) => {
      categorizedPlayers[player.element_type].push(player);
    });

    const action = {
      type: SET_GENERALINFO,
      players,
      teams,
      dreamTeamPlayers,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy });
}

function getTeam(teamCode, teams) {
  const team = teams.find((team) => team.code === teamCode);
  return team?.short_name;
}
