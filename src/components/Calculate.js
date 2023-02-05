import React, { useContext } from "react";
import currentTrip from "@/context/trip.context";

function Calculate() {
  const { originRef, destinationRef, currentPosition, dispatchTrip } =
    useContext(currentTrip);

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
          directions: result.routes[0].legs[0].steps,
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
