import EditAvata from '../../components/EditAvata/EditAvata';
import EditPassword from '../../components/EditPassword/EditPassword';
import useAuth from '../../hooks/useAuth';

const SettingsPage = () => {
    const { token } = useAuth();
    return (
        <div>
            <h2>ajustes</h2>
            <div>
                <EditAvata token={token} />
            </div>
            <div>
                <EditPassword token={token} />
            </div>
        </div>
    );
};

export default SettingsPage;
