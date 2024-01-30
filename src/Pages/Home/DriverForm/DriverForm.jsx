import { TextField } from "@mui/material";

import formImage from "../../../assets/img/form-image.svg";

import styles from "./DriverForm.module.css";

export default function DriverForm() {
  return (
    <div className={styles.formHeader}>
      <img src={formImage} alt="driver form car image" />
      <div className={styles.headerText}>
        <h1>Drive with MyRide</h1>
        <p>
          Register as a driver using the form below. Our team will assess and
          get back to you within 48 hours.
        </p>
      </div>
    </div>
  );
}
