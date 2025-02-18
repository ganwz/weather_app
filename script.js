const apiKey = "6efb8f0c725313a2e3a0ea4ed4464a95";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 

        if (data.cod === "404") {
            document.getElementById("weather-result").innerHTML = "City not found!";
        } else {
            document.getElementById("weather-result").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weather-result").innerHTML = "Error fetching data!";
    }
}