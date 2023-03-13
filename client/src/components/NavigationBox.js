import { currentTrip } from "@/providers/TripProvider";
import React, { useContext } from "react";
import styles from "@/styles/TheMap.module.css";

function NavigationBox() {
  const { nextStep } = useContext(currentTrip);

  return (
    <div className={styles.card}>
      directions:
      <div dangerouslySetInnerHTML={{ __html: nextStep }} />
    </div>
  );
}

export default NavigationBox;
