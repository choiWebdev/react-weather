import './Weather.scss';

function Weather({weather}) {
  if (!weather) return null;

  const formatTemp = num => {
    return Math.round(num * 10) / 10;
  }

  return (
    <div className="Weather">
      <h3>{weather.region}</h3>
      <p>{weather.weather}</p>
      <p>최고 기온: {formatTemp(weather.highTemperature)}℃</p>
      <p>최저 기온: {formatTemp(weather.lowTemperature)}℃</p>
      <p>일교차: {formatTemp((weather.highTemperature) - (weather.lowTemperature))}℃</p>
    </div>
  );
}

export default Weather;