import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Switch,
  TextField,
  ThemeProvider,
} from "@mui/material";

import formImage from "../../../assets/img/form-image.svg";
import cardSedan from "../../../assets/img/card-sedan.svg";
import cardSuv from "../../../assets/img/card-suv.svg";
import cardSemilux from "../../../assets/img/card-semilux.svg";
import cardLux from "../../../assets/img/card-lux.svg";

import styles from "./DriverForm.module.css";
import { driverFormTheme } from "./driverFormTheme.js";
import { useState } from "react";

export default function DriverForm() {
  const [country, setCountry] = useState(0);

  return (
    <>
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
      <div className={styles.formBody}>
        <ThemeProvider theme={driverFormTheme}>
          <TextField
            className={styles.TextField}
            fullWidth
            id="full-name"
            variant="outlined"
            label="Full Name"
          />
          <TextField
            className={styles.TextField}
            fullWidth
            id="email"
            variant="outlined"
            label="Email Address"
          />
          <TextField
            className={styles.TextField}
            fullWidth
            select
            IconProps={{ style: { fill: driverFormTheme.palette.icon.main } }}
            id="country"
            variant="outlined"
            label="Country"
            value={country}
          >
            <option value={0}>{""}</option>
          </TextField>

          <TextField
            className={styles.TextField}
            fullWidth
            select
            id="city"
            variant="outlined"
            label="City"
          />
          <TextField
            className={styles.TextField}
            fullWidth
            id="referral-code"
            variant="outlined"
            label="Referral Code"
          />

          <div className={styles.ownCar}>
            <p>I drive my own car</p>
            <Switch color="warning" />
          </div>
          <div className={styles.carType}>
            <h1>Select your car type</h1>
          </div>
          <div className={styles.cards}>
            <Card>
              <CardMedia
                component="img"
                alt="sedan car icon"
                image={cardSedan}
              />
              <CardContent>
                <p>Sedan</p>
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                alt="suv/van car icon"
                image={cardSuv}
              />
              <CardContent>
                <p>SUV/Van</p>
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                alt="semi luxury car icon"
                image={cardSemilux}
              />
              <CardContent>
                <p>Semi Luxury</p>
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                alt="luxury car icon"
                image={cardLux}
              />
              <CardContent>
                <p>Luxury</p>
              </CardContent>
            </Card>
          </div>
          <Button variant="contained">SUBMIT</Button>
        </ThemeProvider>
      </div>
    </>
  );
}
