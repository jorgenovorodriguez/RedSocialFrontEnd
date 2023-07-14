const loginService = async (email, password) => {
    const res = await fetch('https://tatooart.fly.dev/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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

export default loginService;
