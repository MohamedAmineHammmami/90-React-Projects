import { string } from "yup";
import Joi from "joi";

export const passSchema = string()
  .min(8, "0")
  .matches(/[a-z]/, "1")
  .matches(/[A-Z]/, "2")
  .matches(/[0-9]/, "3")
  .matches(/[^0-9A-Za-z]/, "4");

export const initialConditions = [
  { id: 0, err: "contains more than 8 characters.", state: false },
  { id: 1, err: "contains at least one lowercase letter", state: false },
  { id: 2, err: "contains at least one uppercase letter", state: false },
  { id: 3, err: "contains at least one numerical.", state: false },
  { id: 4, err: "contains at least one symbol.", state: false },
];
