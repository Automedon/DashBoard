import { CHANGE_ADDINF, CHANGE_MAIN } from "../types";

export const changeMainInf = (userName, email, password, confirmPassword) => {
  return {
    type: CHANGE_MAIN,
    payload: {
      userName,
      email,
      password,
      confirmPassword
    }
  };
};

export const changeAddInf = (street, houseNumber, postalCode, country) => {
  return {
    type: CHANGE_ADDINF,
    payload: {
      street,
      houseNumber,
      postalCode,
      country
    }
  };
};
