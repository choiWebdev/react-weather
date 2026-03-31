import './App.css';
import RegionTab from './components/RegionTab';
import Header from './components/Header';
import { useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [weathers, setWeathers] = useState([
    {
      id: 1,
      region: '서울',
      weather: '☁️흐림',
      highTemperature: 17.13,
      lowTemperature: 6.35,
      isActive: true,
    },
    {
      id: 2,
      region: '인천',
      weather: '🌧️비',
      highTemperature: 17.62,
      lowTemperature: 7.5,
      isActive: false,
    },
    {
      id: 3,
      region: '부산',
      weather: '☀️맑음',
      highTemperature: 20.84,
      lowTemperature: 9.57,
      isActive: false,
    },
    {
      id: 4,
      region: '대구',
      weather: '☀️맑음',
      highTemperature: 20.30,
      lowTemperature: 8.25,
      isActive: false,
    },
    {
      id: 5,
      region: '제주',
      weather: '🍃바람',
      highTemperature: 19.56,
      lowTemperature: 8.65,
      isActive: false,
    },
  ]);

  // 활성 지역
  const activeWeather = weathers.find(w => w.isActive);

  return (
    <div className="App">
      <Header />
      <RegionTab weathers={weathers} setWeathers={setWeathers} />
      <Weather weather={activeWeather} />
    </div>
  );
}

export default App;
