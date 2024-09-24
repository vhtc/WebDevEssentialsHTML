const buttonGetLocation = document.getElementById('getLocation')

buttonGetLocation.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resultElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        });
    } else {
        resultElement.textContent = "Geolocation is not supported by your browser.";
    }
})
