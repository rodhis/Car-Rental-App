import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Full Name is a mandatory field.")
    .min(5, "Full Name must have at least 5 characters.")
    .matches(
      /^[^\d]+(?:\s[^\d]+)+$/,
      "Full Name must not contain numbers and must contain at least one surename."
    ),
  email: yup
    .string()
    .required("Email is a mandatory field.")
    .min(8, "Email must have at least 8 characters.")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Please insert a valid email address (example@email.com)."
    ),
  country: yup.string().required("Country is a mandatory field."),
  city: yup.string().required("City is a mandatory field."),
  referral: yup
    .string()
    .matches(
      /^[A-Za-z]{3}-\d{3}$/,
      "Referral code format must be 3 letters, one dash and 5 numbers; E.g.: AAA-0001."
    ),
  ownCar: yup.boolean().transform((originalValue) => originalValue || false),

  carType: yup.string().when("ownCar", {
    is: true,
    then: (schema) => schema.required("Select a vehicle type."),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default schema;
