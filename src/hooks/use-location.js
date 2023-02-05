import { useState, useEffect } from "react";

const useLocation = () => {
  const [watchId, setWatchId] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      //   if (originRef.current) originRef.current.value = currentPosition; //get origin name;
      setWatchId(id);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    return () => {
      navigator.geolocation.clearWatch(watchId);
    }; // eslint-disable-next-line
  }, []);

  return {
    currentPosition,
  };
};

export default useLocation;
