async function getWeather(city) {
  const apiKey = '40bf629e02b4696c3229c620d12240bc'; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    
    // Always check if the response status is 200-299
    if (!response.ok) {
      throw new Error(`City not found or server error: ${response.status}`);
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

function displayWeather(data) {
  console.log(`City: ${data.name}`);
  console.log(`Temperature: ${data.main.temp}°C`);
  console.log(`Condition: ${data.weather[0].description}`);
}

// Example usage:
getWeather('Columbus');
