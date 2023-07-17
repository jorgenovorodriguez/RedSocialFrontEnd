import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"


const PublicationCreatePage = () => {
    const { token } = useAuth();

    if (!token) return <Navigate to='/' />

    return (
        <main>

        </main>
    )
}

export default PublicationCreatePage;