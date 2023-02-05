export const initialState = {
  directions: [],
  distance: "",
  duration: "",

  origin: "",
  destination: "",
};

export const TripReducers = (state, action) => {
  switch (action.type) {
    case "NEW-TRIP":
      console.log("reducer");
      return addTrip(action.payload);
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const addTrip = ({ directions, distance, duration, origin, destination }) => {
  console.log(directions);
  return {
    directions,
    distance,
    duration,
    origin,
    destination,
  };
};
