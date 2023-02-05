export const initialState = {
  directions: null,
  distance: "",
  duration: "",
  origin: "",
  destination: "",
};

export const TripReducers = (state, action) => {
  switch (action.type) {
    case "NEW-TRIP":
      return addTrip(action.payload);
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const addTrip = ({ directions, distance, duration, origin, destination }) => {
  return {
    directions,
    distance,
    duration,
    origin,
    destination,
  };
};
