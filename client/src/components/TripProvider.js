import React, { useState, useReducer, useRef } from "react";
import currentTrip from "@/context/trip.context";
import { TripReducers, initialState } from "@/reducers/trip.reducers";
import useLocation from "@/hooks/use-location";
import { useJsApiLoader } from "@react-google-maps/api";
import TripForm from "@/components/TripForm";
import TheMap from "@/components/TheMap";

const libraries = ["places"];

const TripProvider = ({ children }) => {
  const [loadedMap, setLoadedMap] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [nextStep, setNextStep] = useState(null);

  const originRef = useRef();
  const destinationRef = useRef();

  const [trip, dispatchTrip] = useReducer(TripReducers, initialState);

  const { currentPosition } = useLocation();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
    libraries,
  });

  const value = {
    trip,
    dispatchTrip,
    // loadedMap,
    currentPosition,
    originRef,
    destinationRef,
    setCurrentStep,
    setNextStep,
    currentStep,
    nextStep,
  };

  return (
    <currentTrip.Provider value={value}>
      {isLoaded && currentPosition ? (
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
