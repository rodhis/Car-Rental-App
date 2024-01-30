import { Container, ThemeProvider } from "@mui/material";

import bookRideImg from "../../../assets/img/book-ride.svg";

import { bookRideTheme } from "./bookRideTheme";
import styles from "./BookRide.module.css";

export default function BookRide() {
  return (
    <div className={styles.bookRide}>
      <img src={bookRideImg} alt="Book myRide image" />
      <div className={styles.bookRideText}>
        <h2>NEED A RIDE?</h2>
        <h1>
          Book with <span>MyRIDE</span> now!
        </h1>
      </div>
      <div>
        <ThemeProvider theme={bookRideTheme}>
          <Container></Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
