const PublicationCreateService = async (text, file, token) => {
    const formData = new FormData();

    formData.append('image', file);

    if (file) formData.append('image', file);

    const res = await fetch('http://localhost:8000/publications', {
        method: 'post',
        headers: {
            Authorization: token,
        },
        body: formData,
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.msg)
    }
};

export default PublicationCreateService;