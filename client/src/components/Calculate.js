import React, { useContext } from "react";
import { currentTrip } from "../providers/TripProvider";
import { locationContext } from "../providers/LocationProvider";

function Calculate() {
  const { originRef, destinationRef, dispatchTrip } = useContext(currentTrip);

  const { currentPosition } = useContext(locationContext);
  console.log(currentPosition);

  const calculateRoute = async () => {
    if (destinationRef.current.value === "") return;
    const origin = originRef.current.value
      ? originRef.current.value
      : currentPosition;
    try {
      const directionsService = new window.google.maps.DirectionsService();
      const result = await directionsService.route({
        origin,
        destination: destinationRef.current.value,
        travelMode: "DRIVING",
      });
      dispatchTrip({
        type: "NEW-TRIP",
        payload: {
          directions: result,
          distance: result.routes[0].legs[0].distance.text,
          duration: result.routes[0].legs[0].duration.text,
          origin,
          destination: destinationRef.current.value,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return <button onClick={() => calculateRoute()}>Calculate</button>;
}

export default Calculate;
