import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { NavLink } from "react-router-dom";

const ValidatedForm = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const validateEmail = sessionStorage.getItem('validateEmail') || '';

  const checkActivationStatus = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/users/activation-status", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: validateEmail}), 
      });

      const body = await res.json();
      console.log(res);

      if (!res.ok) {
        throw new Error(body.msg);
      }

      setActive(body.data.active);
      console.log(active);
      setLoading(false);
    } catch (error) {
      setError("Ha ocurrido un error al verificar el estado de activación. Por favor, inténtalo de nuevo.");
      setLoading(false);
    }
  };

  return (
    <>
      {active ? (
        <div>
          <p>Gracias por confiar en nosotros, un saludo de parte del equipo TatooArt.</p>
          <NavLink to="/login">Login</NavLink>
        </div>
      ) : (
        <div>
          <h2>Validación</h2>
          <p>Por favor, active la cuenta a través del correo de verificación.</p>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <button onClick={checkActivationStatus}>Verificar Activación</button> 
          )}

          {error && <ErrorMessage msg={error} />}
        </div>
      )}
    </>
  );
};

export default ValidatedForm;
