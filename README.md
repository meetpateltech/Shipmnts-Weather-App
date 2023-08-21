# Shipmnts-Weather-App

This is a simple weather app that allows users to retrieve current weather conditions for a given city. The app integrates with a weather API to fetch weather data based on the user's city input. Users can also toggle between displaying temperatures in Celsius and Fahrenheit.

## Features

- Enter the name of a city in the input field.
- Click the "Search" button to retrieve weather data.
- Display of city name, current temperature, weather description, and weather icon.
- Toggle between displaying temperatures in Celsius and Fahrenheit.
- Graceful handling of errors, such as city not found or API issues.
- Basic styling for visually appealing weather information.

## Getting Started

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.

### Prerequisites

- Internet connection to fetch weather data from the API.
- [API key](https://www.weatherapi.com/) from the Weather API.

### Installation

1. Obtain an API key from the Weather API.
2. Replace `"YOUR_API_KEY"` in the code with your actual API key.

```javascript
const apiKey = "YOUR_API_KEY";
```

3. Open `index.html` in a web browser to use the app.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Search" button to retrieve weather data.
3. The app will display the city name, current temperature, weather description, and weather icon.
4. To toggle between Celsius and Fahrenheit, click the respective unit button.

## Error Handling

- If the city is not found, an error message will be displayed.
- If there's an issue with the API request, an error message will be displayed.

## Technologies Used

- HTML
- CSS
- JavaScript

## Acknowledgments

- Weather data provided by [Weather API](https://www.weatherapi.com/).
