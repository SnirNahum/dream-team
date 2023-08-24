export const SET_GENERALINFO = "SET_GENERALINFO";
export const SET_FILTER_BY = "SET_FILTER_BY";

const initialState = {
  generalInfo: null,
  filterBy: {
    name: "",
  },
};

export function fplReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GENERALINFO:
      return {
        ...state,
        generalInfo: action.generalInfo,
      };
    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };

    default:
      return state;
  }
}
