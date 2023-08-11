const placeEditService = async (place, token) => {
    const formData = new FormData();

    formData.append('place', place);

    try {
        const res = await fetch('http://localhost:8000/users/place', {
            method: 'PUT',
            headers: {
                Authorization: token,
            },
            body: formData,
        });

        const body = await res.json();

        if (!res.ok) {
            throw new Error(body.message || 'Error en la solicitud');
        }

        return body.data && body.data.message;
    } catch (error) {
        throw new Error(error.message || 'Error en la solicitud');
    }
};

export default placeEditService;
