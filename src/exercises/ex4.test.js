/**
 * @jest-environment jsdom
 */

// Importer les fonctions à tester
const { fetchData, formatWeatherData, toggleWeatherData } = require('./ex4');

describe('Weather App', () => {
  beforeAll(() => {
    fetchMock.doMock();
  });

  beforeEach(() => {
    fetch.resetMocks();
    document.body.innerHTML = `
      <button id="remove-paragraph-button">Toggle Weather</button>
      <p id="paragraph"></p>
    `;
  });

  it('fetchData should return weather data', async () => {
    const mockWeatherData = {
      name: 'Rennes',
      weather: [{ description: 'clear sky' }],
      main: { temp: 298.15, humidity: 40, pressure: 1012 },
      wind: { speed: 5 },
    };

    fetch.mockResponseOnce(JSON.stringify(mockWeatherData));

    const data = await fetchData('Rennes');
    expect(data).toEqual(mockWeatherData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=Rennes&appid=08cb792ca8906ae401dad848ccb6410d`);
  });

  it('fetchData should handle errors gracefully', async () => {
    fetch.mockReject(new Error('Network response was not ok'));

    const data = await fetchData('InvalidCity');
    expect(data).toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('formatWeatherData should format weather data correctly', () => {
    const mockWeatherData = {
      name: 'Rennes',
      weather: [{ description: 'clear sky' }],
      main: { temp: 298.15, humidity: 40, pressure: 1012 },
      wind: { speed: 5 },
    };

    const formattedData = formatWeatherData(mockWeatherData);
    expect(formattedData).toBe(`
    Weather in Rennes: clear sky
    Temperature: 298.15 K
    Humidity: 40%
    Pressure: 1012 hPa
    Wind Speed: 5 m/s
  `);
  });

  it('toggleWeatherData should toggle weather data display', async () => {
    const mockWeatherData = {
      name: 'Rennes',
      weather: [{ description: 'clear sky' }],
      main: { temp: 298.15, humidity: 40, pressure: 1012 },
      wind: { speed: 5 },
    };

    fetch.mockResponseOnce(JSON.stringify(mockWeatherData));

    const button = document.getElementById('remove-paragraph-button');
    const paragraph = document.getElementById('paragraph');

    // Initial state: paragraph should be empty
    expect(paragraph.textContent).toBe('');

    // First click: should display weather data
    await toggleWeatherData();
    expect(paragraph.textContent).toBe(`
    Weather in Rennes: clear sky
    Temperature: 298.15 K
    Humidity: 40%
    Pressure: 1012 hPa
    Wind Speed: 5 m/s
  `);

    // Second click: should hide weather data
    await toggleWeatherData();
    expect(paragraph.textContent).toBe('');
  });
});
