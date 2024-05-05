import React, {useState} from 'react';
import './style.css';
import sunny from './Images/sunny.png';
import clock from './Images/clock.png'
import pin from './Images/pin.png'
import calendar from './Images/calendar.png'

const Mainfile = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)

  return (
    <>

 {/* weather display area */}
<div className='plate'>
        <img className='weatherlogo' src={sunny} alt="weatherlogo"/>
        <h1 className='condition'>{weathermood}</h1>
        <div className='time'>
        <img className='clock' src={clock} alt="clock"/>
        <p className='localtime'>{ctime}</p>
        <img className='pin' src={pin} alt=""/>
        <p className='cityname'>{name}</p>
       
        <img className='calendar' src={calendar} alt=""/>
        <p className='newdate'>{new Date().toLocaleDateString()}</p>
        </div>

        <div className='bottomplate'>
          <div className='sunset'>
        <p>SUN-SET</p> <br/>
        <p>{timeStr}PM</p>            
          </div>
          <span className='span1'></span>

          <div className='humidity'>
        <p>TEMPRETURE</p> <br/>
        <p>{temp}&deg;</p>            
          </div>
          <span className='span2'></span>

          <div className='presure'>
          <p>HUMIDITY</p> <br/>
        <p>{humidity}%</p>            
          </div>
          <span className='span3'></span>

          <div className='wind'>
          <p>PRESURE</p> <br/>
          <p>{pressure}</p>            
                  
          </div>
        </div>
        </div>
        
    </>
    
  )
}

export default Mainfile;
