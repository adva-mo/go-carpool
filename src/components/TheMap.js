import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  MarkerF,
} from "@react-google-maps/api";
import mapStyles from "@/styles/TheMap.module.css";

function TheMap({ currentPosition, setLoadedMap }) {
  // useEffect(() => {
  //   if (tripDirections) {
  //     setNextStep(tripDirections.routes[0].legs[0].steps[currentStep]);
  //     if (!nextStep) return;
  //     const nextStepLatLng = nextStep.end_location;
  //     const distance = calculateDistance(currentPosition, nextStepLatLng);

  //     if (distance < 10) {
  //       console.log("distance is smaller");
  //       setCurrentStep(currentStep + 1);
  //     }
  //     // console.log(currentStep);
  //   }
  // }, [currentPosition, currentStep, tripDirections]);

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
        options={{ zoomControl: true, streetViewControl: false }}
      >
        <MarkerF position={currentPosition} />
        {/* {tripDirections && <DirectionsRenderer directions={tripDirections} />} */}
      </GoogleMap>
    </div>
  );
}

export default TheMap;