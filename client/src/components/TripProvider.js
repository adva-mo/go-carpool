import React, { useState, useReducer, useRef } from "react";
import currentTrip from "@/context/trip.context";
import { TripReducers, initialState } from "@/reducers/trip.reducers";
import { useJsApiLoader } from "@react-google-maps/api";
import TripForm from "@/components/TripForm";
import TheMap from "@/components/TheMap";
import NavigationBox from "./NavigationBox";

const libraries = ["places"];

const TripProvider = () => {
  const [loadedMap, setLoadedMap] = useState(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [nextStep, setNextStep] = useState(null);
  const [trip, dispatchTrip] = useReducer(TripReducers, initialState);

  const originRef = useRef();
  const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
    libraries,
  });

  const value = {
    trip,
    dispatchTrip,
    originRef,
    destinationRef,
    setCurrentStep,
    setNextStep,
    currentStep,
    nextStep,
  };

  return (
    <currentTrip.Provider value={value}>
      {isLoaded ? (
        <>
          <TripForm />
          <TheMap setLoadedMap={setLoadedMap} />
          {trip.directions && <NavigationBox />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </currentTrip.Provider>
  );
};

export default TripProvider;
