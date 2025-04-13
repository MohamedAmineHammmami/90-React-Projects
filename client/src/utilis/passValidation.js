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

export const patterns = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "!@#$%^&*()-_=+[]{}|;:,.<>?/~",
  "0123456789",
];

const genOneRandom32BitNum = () => {
  const UnSignArray = new Uint32Array(1);
  return crypto.getRandomValues(UnSignArray)[0];
};

const genOneRandomChar = (pattrns) => {
  const randomPattern = pattrns[genOneRandom32BitNum() % pattrns.length];
  return randomPattern[genOneRandom32BitNum() % randomPattern.length];
};

export const genRandomPass = (length, patterns, tries = 5) => {
  let container = "";
  if (tries === 0) throw new Error("Failed to generate new Password");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

  for (let i = 0; i < length; i++) {
    container += genOneRandomChar(patterns);
  }

  if (regex.test(container)) {
    return container;
  }

  return genRandomPass(length, patterns, tries - 1);
};
