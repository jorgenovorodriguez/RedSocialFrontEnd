import { NavLink } from "react-router-dom";

const ValidatedForm = () => {

  return (
    <>
      
        <div>
          <h2>Validación</h2>
          <p>Por favor, active la cuenta a través del correo de verificación.</p>
          <p>Gracias por confiar en nosotros, un saludo de parte del equipo TatooArt.</p>
          <NavLink to="/login">Login</NavLink>     
        </div>
  
    </>
  );
};

export default ValidatedForm;
