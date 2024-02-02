import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../../store/driver-slice";
import { useEffect, useState } from "react";
import axios from "axios";

import successIcon from "../../../assets/img/success.svg";

import styles from "./SuccessForm.module.css";

export default function SuccessForm() {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  console.log(data);
  function onSubmitAnotherCar() {
    dispatch(setSuccess(false));
  }

  useEffect(() => {
    axios.get("http://localhost:3000/registered-drivers/1").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (data) {
      axios
        .delete("http://localhost:3000/registered-drivers/1")
        .then((response) => {
          console.log(response);
        });
    }
  }, [data]);

  return (
    <>
      {data && (
        <section className={styles.successForm}>
          <div className={styles.successText}>
            <img src={successIcon} className={styles.successIcon} />
            <h1>
              Welcome <span className={styles.successName}>{data.name}</span>
            </h1>
          </div>
          <div className={styles.successText}>
            <h2>
              Registered email:{" "}
              <span className={styles.successData}>{data.email}</span>
            </h2>
            <h2>
              Country:{" "}
              <span className={styles.successData}>{data.country}</span>
            </h2>
            <h2>
              City: <span className={styles.successData}>{data.city}</span>
            </h2>
          </div>
          <div className={styles.successText}>
            <h2>
              Referral Code:{" "}
              <span className={styles.successData}>{data.referral}</span>
            </h2>
            <h2>
              Has own car?{" "}
              <span className={styles.successData}>
                {data.ownCar ? data.cartype : "No"}
              </span>
            </h2>
          </div>
          <Button
            onClick={onSubmitAnotherCar}
            sx={{
              width: "12.5rem",
              height: "3.5rem",
              marginTop: "1rem",
              marginLeft: "30rem",
              backgroundColor: "#fba403",
              alignItems: "center",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#e09102",
              },
            }}
          >
            Submit another car
          </Button>
        </section>
      )}
    </>
  );
}
