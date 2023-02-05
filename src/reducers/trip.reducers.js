export const initialState = {
  directions: [],
  distance: "",
  duration: "",
  //   currentStep: "",
  //   nextStep: "",
  origin: "",
  destination: "",
};

export const TripReducers = (state, action) => {
  switch (action.type) {
    case "NEW-TRIP":
      return addTrip(action.payload, state);
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const addTrip = (
  { directions, distance, duration, origin, destination },
  state
) => {
  return {
    ...state,
    directions: directions,
    distance: distance,
    duration: duration,
  };
};
