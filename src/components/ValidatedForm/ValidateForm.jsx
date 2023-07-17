import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import validateCodeService from "../../services/validateCodeService";
import { NavLink } from "react-router-dom";

const ValidatedForm = () => {
    const [regCode, setRegCode] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await validateCodeService(regCode, setActive);

        } catch (err) {
            setErrMsg(err.msg);
        } finally {
            setLoading(false);
        }
    };

    console.log(active);

    return (
        <>
            {active ? (
                <div>
                    <p>Cuenta activada</p>
                    <NavLink to="/login">Login</NavLink>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Validación</h2>

                    <label htmlFor="regCode">Código de activación:</label>
                    <input
                        type="text"
                        id="regCode"
                        value={regCode}
                        onChange={(e) => setRegCode(e.target.value)}
                        autoFocus
                        required
                    />
                    <button>Activación</button>

                    {loading && <p>Loading...</p>}
                    {errMsg && <ErrorMessage msg={errMsg} />}
                </form>
            )}
        </>
    );
};

export default ValidatedForm;