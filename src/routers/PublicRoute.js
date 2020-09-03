import React from "react";
import PropType from 'prop-types';
import { Route, Redirect } from "react-router-dom";


export const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        (!isAuth) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};


PublicRoute.propTypes = {
    isAuth: PropType.bool.isRequired,
    component: PropType.func.isRequired,
}