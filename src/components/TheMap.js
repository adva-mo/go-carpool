import React, { useState, useEffect, useContext } from "react";
import currentTrip from "@/context/trip.context";
import { GoogleMap, DirectionsRenderer, MarkerF } from "@react-google-maps/api";
import mapStyles from "@/styles/TheMap.module.css";
import { calculateDistance } from "@/utils/utils";

const gushDanCoordinates = [
  { lat: 32.067138, lng: 34.772435 },
  { lat: 32.066039, lng: 34.780807 },
  { lat: 32.067437, lng: 34.784538 },
  { lat: 32.073558, lng: 34.779899 },
  { lat: 32.071531, lng: 34.773976 },
  { lat: 32.076053, lng: 34.769261 },
  { lat: 32.083361, lng: 34.772647 },
  { lat: 32.079307, lng: 34.778278 },
  { lat: 32.085292, lng: 34.781217 },
  { lat: 32.081257, lng: 34.787152 },
];

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
        {gushDanCoordinates.map((location) => (
          <MarkerF position={location} />
        ))}
        {/* <MarkerF position={currentPosition} /> */}
        {trip.directions && <DirectionsRenderer directions={trip.directions} />}
      </GoogleMap>
    </div>
  );
}

export default TheMap;
