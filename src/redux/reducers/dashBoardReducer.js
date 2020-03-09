import { CHANGE_ADDINF, CHANGE_MAIN } from "../types";

const initState = {
  userName: "Default",
  email: "default@gmail.com",
  password: "12345",
  confirmPassword: "12345",
  street: "Baverly",
  houseNumber: "42",
  postalCode: "100010",
  selectCountry: ["Austria", "Switzerland", "Germany"],
  country: "Austria"
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MAIN: {
      const { userName, email, password, confirmPassword } = action.payload;
      return { ...state, userName, email, password, confirmPassword };
    }
    case CHANGE_ADDINF: {
      const { street, houseNumber, postalCode, country } = action.payload;

      return {
        ...state,
        street,
        houseNumber,
        postalCode,
        country
      };
    }
    default: {
      return { ...state };
    }
  }
};
