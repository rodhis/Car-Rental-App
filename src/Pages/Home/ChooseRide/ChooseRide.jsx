import {
  Card,
  CardMedia,
  CardContent,
  ThemeProvider,
  Typography,
} from "@mui/material";

import chooseBasicImg from "../../../assets/img/choose-basic.svg";
import chooseBusinessImg from "../../../assets/img/choose-business.svg";
import chooseComfortImg from "../../../assets/img/choose-comfort.svg";
import chooseDeluxeImg from "../../../assets/img/choose-deluxe.svg";

import styles from "./ChooseRide.module.css";
import { chooseRideTheme } from "./chooseRideTheme";

export default function ChooseRide() {
  return (
    <div className={styles.chooseRide}>
      <h1>WHY SHOULD YOU RIDE WITH US?</h1>
      <h2>Best in class rides</h2>
      <div className={styles.rides}>
        <ThemeProvider theme={chooseRideTheme}>
          <div className={styles.ridesCard}>
            <Card>
              <CardMedia
                component="img"
                alt="basic car image"
                image={chooseBasicImg}
              />
              <CardContent>
                <p className={styles.ridesTitle}>Basic</p>
                <p className={styles.ridesDescription}>
                  The best balance of price and comfort. You will not go wrong
                  with our basic rides.
                </p>
                <a href="https://www.google.com.br/search?q=basic+cars">
                  LEARN MORE
                </a>
              </CardContent>
            </Card>
          </div>
          <div className={styles.ridesCard}>
            <Card>
              <CardMedia
                component="img"
                alt="basic car image"
                image={chooseComfortImg}
              />
              <CardContent>
                <p className={styles.ridesTitle}>Comfort</p>
                <p className={styles.ridesDescription}>
                  If comfort is your priority, this is the ride for you. It’s
                  spacious and packed with features.
                </p>
                <a href="https://www.google.com.br/search?q=comfort+cars">
                  LEARN MORE
                </a>
              </CardContent>
            </Card>
          </div>
          <div className={styles.ridesCard}>
            <Card>
              <CardMedia
                component="img"
                alt="basic car image"
                image={chooseBusinessImg}
              />
              <CardContent>
                <p className={styles.ridesTitle}>Business</p>
                <p className={styles.ridesDescription}>
                  Do you want to travel around the city in style? Make sure to
                  select or business class rides.
                </p>
                <a href="https://www.google.com.br/search?q=business+cars">
                  LEARN MORE
                </a>
              </CardContent>
            </Card>
          </div>
          <div className={styles.ridesCard}>
            <Card>
              <CardMedia
                component="img"
                alt="basic car image"
                image={chooseDeluxeImg}
              />
              <CardContent>
                <p className={styles.ridesTitle}>Deluxe</p>
                <p className={styles.ridesDescription}>
                  The best ride for luxury and comfort. No compromises here.
                  You’ll surely get what you pay for.
                </p>
                <a href="https://www.google.com.br/search?q=deluxe+cars">
                  LEARN MORE
                </a>
              </CardContent>
            </Card>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
