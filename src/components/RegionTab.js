import './RegionTab.scss';

function RegionTab({weathers, setWeathers}) {
  // 클릭한 버튼을 활성 상태로, 나머지 버튼을 비활성 상태로
  const onTabClick = id => {
    setWeathers(prev =>
      prev.map(item => ({
        ...item,
        isActive: item.id === id
      }))
    );
  };

  return (
    <nav className="RegionTab">
      <ul>
        {weathers.map(weather => (
          <li key={weather.id}>
            <button className={weather.isActive ? 'active' : ''} type="button" onClick={() => onTabClick(weather.id)}>{weather.region}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default RegionTab;