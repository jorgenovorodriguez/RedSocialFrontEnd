const registerService = async (username, email, password, role) => {
    const res = await fetch('http://localhost:8000/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
            role,
        }),
    });

    const body = await res.json();
    console.log(body);

    if (!res.ok) {
        return body.message;
    }

    return body.data.message;
};

export default registerService;
