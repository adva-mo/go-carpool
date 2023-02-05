import currentTrip from "@/context/trip.context";
import React, { useContext } from "react";
import styles from "@/styles/TheMap.module.css";

function NavigationBox() {
  const { nextStep } = useContext(currentTrip);
  // console.log(nextStep);
  return (
    <div className={styles.card}>
      directions:
      <div dangerouslySetInnerHTML={{ __html: nextStep }} />
    </div>
  );
}

export default NavigationBox;
