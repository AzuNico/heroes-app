import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [formValues, handleInputChange] = useForm({ name: "" });
  const { name } = formValues;

  const handleLogin = () => {
    // history.push('/');

    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({ type: types.login, payload: { name } });
    history.replace(lastPath);
  };


  return (
    <div className="container mt-5">
      <h1 style={{textAlign:"center"}}>Heroes App</h1>
      <hr />
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20rem",
          margin: "auto",
        }}
      >
        <label className="control-label" style={{textAlign:"center"}} >Usuario</label>
        <input
          type="text"
          placeholder="Ingresa tú nombre"
          className="form-control mb-4"
          onChange={handleInputChange}
          value={name}
          name="name"
        />
        <button className="btn btn-primary" disabled={!name}>
          Login
        </button>
      </form>
    </div>
  );
};
