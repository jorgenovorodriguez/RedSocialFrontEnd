const getGeolocationService = async (setPlace) => {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const apiKey = 'pk.e78c1e4d311857031198efeb6e1d62eb';
                    const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
                    const response = await fetch(url);
                    const data = await response.json();
                    const city = data.address.city;

                    setPlace(city);
                } catch (err) {
                    console.error(
                        'Error al obtener el nombre de la localidad',
                        err
                    );
                }
            });
        }
    } catch (err) {
        throw new Error('No se pudo obtener la geolocalización', err);
    }
};

export default getGeolocationService;
