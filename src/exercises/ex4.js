const apiKey = '08cb792ca8906ae401dad848ccb6410d';

const fetchData = async (cityName) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

const formatWeatherData = (data) => {
  const cityName = data.name;
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;

  return `
    Weather in ${cityName}: ${weatherDescription}
    Temperature: ${temperature} K
    Humidity: ${humidity}%
    Pressure: ${pressure} hPa
    Wind Speed: ${windSpeed} m/s
  `;
};

const toggleWeatherData = async () => {
  const cityName = 'Rennes'; // Exemple de nom de ville (peut être remplacé par un autre nom dynamiquement)

  try {
    const paragraph = document.getElementById('paragraph');

    if (paragraph.textContent.trim() === '') {
      // Afficher les données météo si le paragraphe est vide
      let data = await fetchData(cityName);
      if (data) {
        const weatherInfo = formatWeatherData(data);
        paragraph.textContent = weatherInfo;
      }
    } else {
      // Masquer les données météo en effaçant le paragraphe
      paragraph.textContent = '';
    }
  } catch (error) {
    console.error('Error toggling weather data:', error);
  }
};

// Écouteur d'événement pour charger le DOM
document.addEventListener('DOMContentLoaded', () => {
  const removeParagraphButton = document.getElementById('remove-paragraph-button');
  removeParagraphButton.addEventListener('click', toggleWeatherData);
});

// Exporter les fonctions pour les tests
module.exports = {
  fetchData,
  formatWeatherData,
  toggleWeatherData
};
