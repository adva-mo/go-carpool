import React, { useContext } from "react";
import { Autocomplete } from "@react-google-maps/api";
import styles from "@/styles/TheMap.module.css";
import currentTrip from "@/context/trip.context";
import Calculate from "./Calculate";

function TripForm() {
  const {
    originRef,
    destinationRef,
    currentPosition,
    trip,
    dispatchTrip,
    loadedMap,
    setCurrentStep,
    setNextStep,
  } = useContext(currentTrip);
  const { distance, duration } = trip;

  const clearRoute = () => {
    originRef.current.value = "";
    destinationRef.current.value = "";
    dispatchTrip({ type: "CLEAR" });
    setCurrentStep(0);
    setNextStep(null);
  };

  return (
    <form className={styles.card} onSubmit={(e) => e.preventDefault()}>
      <div style={{ width: "100%", display: "flex" }}>
        <Autocomplete>
          <input placeholder="Current location" ref={originRef} />
        </Autocomplete>
        <Autocomplete>
          <input placeholder="Destination..." ref={destinationRef} />
        </Autocomplete>
        <Calculate />
        <button onClick={() => clearRoute()}>clear</button>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <input type="text" placeholder="Distance:" defaultValue={distance} />
        <input type="text" placeholder="Duration:" defaultValue={duration} />
        <button onClick={() => loadedMap?.panTo(currentPosition)}>
          center
        </button>
      </div>
    </form>
  );
}

export default TripForm;
