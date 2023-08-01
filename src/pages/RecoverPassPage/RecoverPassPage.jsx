import EditRecoverPassCodeForm from '../../components/EditRecoverPassCodeForm/EditRecoverPassCodeForm';
import RecoverPassForm from '../../components/RecoverPassForm/RecoverPassForm';

const RecoverPassPage = () => {
    return (
        <div className='intro'>
            <main className='main-layout'>
                <div>
                    <RecoverPassForm />
                </div>
                <div>
                    <EditRecoverPassCodeForm />
                </div>
            </main>
        </div>
    );
};

export default RecoverPassPage;
