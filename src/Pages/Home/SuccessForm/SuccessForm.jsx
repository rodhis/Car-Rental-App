import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../../store/driver-slice";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <section>
      <p>ok ok</p>
      <Button onClick={onSubmitAnotherCar}>Submit another car</Button>
    </section>
  );
}
