import { Container, ThemeProvider, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import bookRideImg from "../../../assets/img/book-ride.svg";

import { bookRideTheme } from "./bookRideTheme";
import styles from "./BookRide.module.css";
import { useState } from "react";

export default function BookRide() {
  const [location, setLocation] = useState("Current location");
  const [destination, setDestination] = useState(" ");

  return (
    <div className={styles.bookRide}>
      <img src={bookRideImg} alt="Book myRide image" />
      <div className={styles.bookRideText}>
        <h2>NEED A RIDE?</h2>
        <h1>
          Book with <span>MyRIDE</span> now!
        </h1>
        <ThemeProvider theme={bookRideTheme}>
          <Container>
            <p className={styles.findMyRideText}>Find a Ride Now</p>
            <TextField
              fullWidth
              IconProps={{ style: { fill: bookRideTheme.palette.icon.main } }}
              id="location"
              variant="outlined"
              label="Your Pickup"
              value={location}
            >
              <option value={0}>{""}</option>
            </TextField>
            <TextField
              fullWidth
              IconProps={{ style: { fill: bookRideTheme.palette.icon.main } }}
              id="destination"
              variant="outlined"
              label="Your Destination"
              value={destination}
            >
              <option value={0}>{""}</option>
            </TextField>
            <Button variant="contained" startIcon={<SearchIcon />}>
              {" "}
              FIND A DRIVER
            </Button>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
