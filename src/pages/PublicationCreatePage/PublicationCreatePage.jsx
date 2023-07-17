import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import PublicationCreateForm from "../../components/PublicationCreateForm/PublicationCreateForm";


const PublicationCreatePage = () => {
    const { token } = useAuth();

    if (!token) return <Navigate to='/login' />

    return (
        <main>
            <PublicationCreateForm token={token} />
        </main>
    )
}

export default PublicationCreatePage;