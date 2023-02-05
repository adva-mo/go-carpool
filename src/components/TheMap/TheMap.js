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

  // const calculateDistance = (position1, position2) => {
  //   const lat1 = position1.lat;
  //   const lng1 = position1.lng;
  //   const lat2 = position2.lat();
  //   const lng2 = position2.lng();
  //   const earthRadius = 6371; // km
  //   const dLat = (lat2 - lat1) * (Math.PI / 180);
  //   const dLng = (lng2 - lng1) * (Math.PI / 180);
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(lat1 * (Math.PI / 180)) *
  //       Math.cos(lat2 * (Math.PI / 180)) *
  //       Math.sin(dLng / 2) *
  //       Math.sin(dLng / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const distance = earthRadius * c;
  //   return distance;
  // };

  // if (!isLoaded) return <p>loading...</p>;

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
