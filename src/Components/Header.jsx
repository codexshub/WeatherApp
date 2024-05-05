import React, { useState, useEffect } from 'react';
import './style.css';
import search from './Images/search.png';
import Mainfile from './Mainfile';

  const Header = () => {
    const [searchValue, setSearchValue] = useState("indore");
    const [tempInfo, setTempInfo] = useState({});
  
    const getWeatherInfo = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f3eee6f2ac5bed7f8ac868aab900f225`;
  
        let res = await fetch(url);
        let data = await res.json();
  
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
  
        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
  
        setTempInfo(myNewWeatherInfo);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getWeatherInfo();
    }, []);

  return (
    <>


    <div className='background'>
      <div className='header'>
        <h2 className='logo'>LOGO</h2>
        <input placeholder='SEARCH CITY' className='input' type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className='searchbtn' type="button" onClick={getWeatherInfo}><img className='image' src={search} alt="search"/></button>        
      </div>
      </div>
    
      <Mainfile {...tempInfo}/>
      </>
  );
};

export default Header;

