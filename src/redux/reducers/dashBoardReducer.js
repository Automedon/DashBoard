import { CHANGE_ADDINF, CHANGE_MAIN } from "../types";

const initState = {
  userName: "Default",
  email: "default@gmail.com",
  password: "12345",
  confirmPassword: "12345",
  street: "Baverly",
  houseNumber: "42",
  postalCode: "100010",
  country: "USA"
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MAIN: {
      const { userName, email, password, confirmPassword } = action.payload;
      return { userName, email, password, confirmPassword, ...state };
    }
    case CHANGE_ADDINF: {
      const { street, houseNumber, postalCode, country } = action.payload;
      return { street, houseNumber, postalCode, country, ...state };
    }
    default: {
      return state;
    }
  }
};
