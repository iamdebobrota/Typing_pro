import * as types from "./typeActionType"

const initState = {
  presentText: "",
  wpm: 0,
  accuracy: 0,
  pressedkey: 0,
  wpmIn5: 0,
};

export function typeReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.TYPE_CHANGE: {
      return { ...state, presentText: payload };
    }
    case types.TYPE_SHOW: {
      return { ...state, wpm: payload.wpm, 
        accuracy: payload.accuracy };
    }
    case types.TYPE_5MIN: {
      return {
        ...state,
        pressedkey: payload.totalCharacterTyped,
        wpmIn5: payload.WPM,
      };
    }

    default:
      return state;
  }
}
