const validatePassword = async (currentPass, newPass, token) => {
    const formData = new FormData();

    formData.append('currentPass', currentPass);
    formData.append('newPass', newPass);

    try {
        const res = await fetch(`http://localhost:8000/users/password`, {
            method: 'put',
            headers: {
                Authorization: token,
            },
            body: formData,
        });

        const body = await res.json();

        if (!res.ok) {
            return body.message;
        }

        return body.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default validatePassword;
