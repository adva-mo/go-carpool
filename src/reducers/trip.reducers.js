export const initialState = {
  directions: [],
  distance: "",
  duration: "",
  currentStep: "",
  nextStep: "",
};

export const TripReducers = (state, action) => {
  switch (action.type) {
    // case "GET":
    //   return [...action.playload];
    // case "DELETE":
    //   return deleteUser(action.playload, state);
    // case "ADD":
    //   console.log(action);
    //   return addUser(action.playload, state);
    // case "EDIT":
    //   return editUser(action.playload, state);
    // case "ADD-RECIPE-TO-USER":
    //   return addRecipeToUser(action.playload, state);
    default:
      return state;
  }
};
