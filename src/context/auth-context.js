import React from "react";

// createContext help us initialize with default values
// it creates a JS object which can be shared without props
const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;
