import { httpService } from "./http.service";

export const fplService = {
  loadGeneralInfo,
};

async function loadGeneralInfo() {
  const generaInfo = await httpService.get("generalInfo");
  return generaInfo;
}
