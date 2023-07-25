import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from './useAuth';
import likePublicationService from '../services/likePublicationService';
import deletePublicationService from '../services/deletePublicationService';

const usePublications = () => {
    const { token } = useAuth();

    const [publications, setPublications] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:8000/publications?${searchParams.toString()}`,
                    {
                        headers: token ? { Authorization: token } : {},
                    }
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.msg);
                }

                setPublications(body.data.publications);
            } catch (err) {
                setErrMsg(err.msg);
            } finally {
                setLoading(false);
            }
        };
        fetchPublications();
    }, [searchParams, token]);

    const toogleLike = async (e, publicationId, likedByMe) => {
        try {
            setLoading(true);

            await likePublicationService(publicationId, likedByMe, token);

            setPublications(
                publications.map((publication) => {
                    if (publication.id === publicationId) {
                        const haslikeClass =
                            e.target.classList.contains('like');

                        if (haslikeClass) {
                            publication.likes++;
                        } else {
                            publication.likes--;
                        }

                        publication.likedByMe = !publication.likedByMe;
                    }

                    return publication;
                })
            );
        } finally {
            setLoading(false);
        }
    };

    const deletePublication = async (publicationId) => {
        try {
            setLoading(true);

            await deletePublicationService(publicationId, token);

            setPublications(
                publications.filter(
                    (publication) => publication.id !== publicationId
                )
            );
        } finally {
            setLoading(false);
        }
    };

    return {
        publications,
        toogleLike,
        deletePublication,
        searchParams,
        setSearchParams,
        errMsg,
        loading,
    };
};

export default usePublications;
