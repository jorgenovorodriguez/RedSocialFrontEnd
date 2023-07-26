import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import usePublications from '../../../hooks/usePublications';
import Publication from '../../Publication/Publication';

const ProfileBody = () => {
    const { publications, fetchPublications, errMsg, loading } =
        usePublications();

    fetchPublications(userId);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {errMsg && <ErrorMessage msg={errMsg} />}

            <ul>
                {publications.length > 0 ? (
                    publications.map((publication) => {
                        return (
                            <Publication
                                key={publication.id}
                                photoName={photoName}
                            />
                        );
                    })
                ) : (
                    <li>No hay publicaciones</li>
                )}
            </ul>
        </div>
    );
};

export default ProfileBody;
