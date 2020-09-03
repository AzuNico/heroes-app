import React from "react";
import PropType from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {

    localStorage.setItem('lastPath',rest.location.pathname)

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropType.bool.isRequired,
  component: PropType.func.isRequired,
};
