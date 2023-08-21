const apiKey = '5142184b347f4770b2370505232108'; ///API KEY OF WEATHER DATA

function getWeather() {
  const cityInput = document.getElementById('city-input').value;
  const temperatureToggle = document.getElementById('temperature-toggle');

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        showError(data.error.message);
      } else {
        storeWeatherData(data);
        showWeather(data, temperatureToggle.checked);
      }
    })
    .catch(error => {
      showError('An error occurred while fetching weather data.');
    });
}

function showWeather(data, isCelsius) {
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const weatherIcon = document.getElementById('weather-icon');

  cityName.textContent = data.location.name;
  temperature.textContent = getFormattedTemperature(data.current, isCelsius);
  description.textContent = data.current.condition.text;
  weatherIcon.src = data.current.condition.icon;
}

function getFormattedTemperature(current, isCelsius) {
  if (isCelsius) {
    return `${current.temp_c}°C`;
  } else {
    return `${current.temp_f}°F`;
  }
}

function showError(errorMessage) {
  const errorContainer = document.getElementById('error-message');
  errorContainer.textContent = errorMessage;
}

// Event listener for the temperature toggle
const toggle = document.getElementById('temperature-toggle');
toggle.addEventListener('change', () => {
  const temperature = document.getElementById('temperature');
  const data = JSON.parse(localStorage.getItem('weatherData'));
  const isCelsius = toggle.checked;
  temperature.textContent = getFormattedTemperature(data.current, isCelsius);
});

// Store the weather data in local storage for toggle functionality
function storeWeatherData(data) {
  localStorage.setItem('weatherData', JSON.stringify(data));
}
