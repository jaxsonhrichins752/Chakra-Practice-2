import { useState, useEffect } from 'react';
import { Card, Text, Heading, Box, Stack } from '@chakra-ui/react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

    useEffect(() => {

        console.log("My key is:", import.meta.env.VITE_OPENWEATHER_API_KEY);


       const fetchWeather = async () => {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const city = 'Pleasant Grove';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      };

      fetchWeather();

    }, []);

    if (!weather) {
  return <Text>Loading weather...</Text>;
}

  return (
    <Card.Root maxW="250px" variant="outline">
    <Card.Body>
      <Stack gap="2">
        <Heading size="md" color="fg">
          {weather.name}
        </Heading>

        <Text fontSize="4xl" fontWeight="bold">
          {Math.round(weather.main.temp)}°F
        </Text>
        
        <Text color="fg.muted" textStyle="sm" textTransform="capitalize">
          {weather.weather[0].description}
        </Text>
      </Stack>
    </Card.Body>
  </Card.Root>
  );
};

export default WeatherWidget;