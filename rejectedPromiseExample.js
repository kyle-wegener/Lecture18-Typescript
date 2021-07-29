window.addEventListener('load', function() {
    // We use the fetch function to get the Response from the API Endpoint
    fetch("https://handlers.education.launchcode.org/static/weather.json")
    .then(function(response) { // We use .then() to wait for our fetch to finish (asynchonys)
        // Adding this to get the JSON out of the Response
        response.json().then(function(jsonResponse) {

            if (jsonResponse.temp < 100) {
                Promise.resolve("Not miserable enough!");
            }

            // Get the element we want to edit with the weather information
            let weatherOutputElement = document.getElementById("weather-output");

            // Set the inner html to display the weather information
            weatherOutputElement.innerHTML =
            `<h3>${jsonResponse.status}</h3>
            <p>Temp: ${jsonResponse.temp} F</p>
            <p>Low/High: ${jsonResponse.tempMin} F / ${jsonResponse.tempMax} F</p>
            <p>Wind Speed: ${jsonResponse.windSpeed} mph</p>`;
        });
    }).catch((err) => {
        console.log('SOMETHING WENT WRONG!', err);
        // Promise.reject("Bad URL or something");
    });
});