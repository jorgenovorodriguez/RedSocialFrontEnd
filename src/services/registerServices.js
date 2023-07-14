const registerService = async (username, email, password) => {
    const res = await fetch('https://tatooart.fly.dev/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.msg);
    }

    return body.data.token;
};

export default registerService;
