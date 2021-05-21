import React from "react";
import { Route, Redirect } from "react-router-dom";

// Build PrivateRoute component that redirects if user is not logged in
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
