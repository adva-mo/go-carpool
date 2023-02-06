import React, { useState, useEffect, useContext } from "react";
import currentTrip from "@/context/trip.context";
import { GoogleMap, DirectionsRenderer, MarkerF } from "@react-google-maps/api";
import mapStyles from "@/styles/TheMap.module.css";
import { calculateDistance } from "@/utils/utils";

function TheMap({ setLoadedMap }) {
  const {
    trip,
    currentPosition,
    currentStep,
    setNextStep,
    setCurrentStep,
    nextStep,
  } = useContext(currentTrip);

  useEffect(() => {
    if (trip.directions !== null) {
      setNextStep(
        trip.directions.routes[0].legs[0].steps[currentStep].instructions
      );
      if (!nextStep) return;
      const nextStepLatLng = nextStep.end_location;
      const distance = calculateDistance(currentPosition, nextStepLatLng);

      if (distance < 10) {
        console.log("distance is smaller");
        setCurrentStep(currentStep + 1);
      }
    }
  }, [currentPosition, currentStep, trip]);

  return (
    <div className={mapStyles.googleMapWrapper}>
      <GoogleMap
        onLoad={(map) => {
          setLoadedMap(map);
          const bounds = new window.google.maps.LatLngBounds();

          map.fitBounds(bounds);
        }}
        center={currentPosition}
        zoom={10}
        mapContainerClassName={mapStyles.mapContainer}
        options={{
          zoomControl: true,
          streetViewControl: false,
        }}
      >
        {/* {gushDanCoordinates.map((location) => (
          <MarkerF position={location} />
        ))} */}
        {/* <MarkerF position={currentPosition} /> */}
        {trip.directions && <DirectionsRenderer directions={trip.directions} />}
      </GoogleMap>
    </div>
  );
}

export default TheMap;
