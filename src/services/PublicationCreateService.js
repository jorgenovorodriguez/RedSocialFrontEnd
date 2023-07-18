const PublicationCreateService = async (description, photo, title, place, token) => {
    const formData = new FormData();

    formData.append('photo', photo);
    formData.append('description', description);
    formData.append('title', title);
    formData.append('place', place);

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
