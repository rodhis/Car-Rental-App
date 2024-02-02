import { useSelector } from "react-redux";
import BookRide from "./BookRide/BookRide";
import ChooseRide from "./ChooseRide/ChooseRide";
import DriverForm from "./DriverForm/DriverForm";
import SuccessForm from "./SuccessForm/SuccessForm";

export default function Home() {
  const isSuccess = useSelector((state) => state.driver.isSuccess);

  return (
    <>
      <BookRide />
      <ChooseRide />
      {isSuccess ? <SuccessForm /> : <DriverForm />}
    </>
  );
}
