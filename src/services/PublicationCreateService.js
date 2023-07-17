const PublicationCreateService = async (description, photo, title, place, token) => {
    const formData = new FormData();

    formData.append('image', photo);

    if (photo) formData.append('image', photo);

    const res = await fetch('http://localhost:8000/publications', {
        method: 'post',
        headers: {
            Authorization: token,
        },
        body: JSON.stringify({
            formData,
            description,
            title,
            place,
        }),

    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.msg)
    }
};

export default PublicationCreateService;