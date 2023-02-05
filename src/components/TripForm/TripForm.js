import React from "react";
import { Autocomplete, GoogleMap } from "@react-google-maps/api";

function TripForm({ currentPosition }) {
  const calculateRoute = async () => {
    // if (destinationRef.current.value === "") return;
    // const origin = originRef.current.value
    //   ? originRef.current.value
    //   : currentPosition;
    // try {
    //   const directionsService = new window.google.maps.DirectionsService();
    //   const result = await directionsService.route({
    //     origin,
    //     destination: destinationRef.current.value,
    //     travelMode: "DRIVING",
    //   });
    //   setTripDirections((prev) => result);
    //   setDistance(result.routes[0].legs[0].distance.text);
    //   setDuration(result.routes[0].legs[0].duration.text);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const clearRoute = () => {
    // setDistance("");
    // setDuration("");
    // originRef.current.value = "";
    // destinationRef.current.value = "";
    // setTripDirections((prev) => null);
    // setCurrentStep(0);
    // setNextStep(null);
  };

  return (
    <form
      className="trip-form primary-card-box"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="trip-form-line">
        <Autocomplete>
          <input
            placeholder="Current location"
            // ref={originRef}
          />
        </Autocomplete>
        <Autocomplete>
          <input
            placeholder="Destination..."
            // ref={destinationRef}
          />
        </Autocomplete>
        <button onClick={() => calculateRoute()}>Calculate</button>
        <button onClick={() => clearRoute()}>X</button>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <input type="text" placeholder="Distance:" defaultValue={"distance"} />
        <input type="text" placeholder="Duration:" defaultValue={"duration"} />
        <button onClick={() => loadedMap?.panTo(currentPosition)}>
          center
        </button>
      </div>
    </form>
  );
}

export default TripForm;
