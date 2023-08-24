import { fplService } from "../../services/fplService";
import { SET_FILTER_BY, SET_GENERALINFO } from "../reducers/fpl.reducer";
import { store } from "../store";

export async function loadGeneralInfo() {
  try {
    const generalInfo = await fplService.loadGeneralInfo();
    const action = {
      type: SET_GENERALINFO,
      generalInfo,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy });
}
