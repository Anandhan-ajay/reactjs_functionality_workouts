import React, { useEffect, useState } from 'react'

function WorkoutsOne() {
    const [currentTime , setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        },1000)

        return ()=> clearInterval(timer)
    },[]);

    const formatTimeWithZer0 = (time) => {
        return time < 10 ? `0${time}` : time
    }

    const formatHour = (hour)=>{
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    }

    const formatDate = (date) => {
        const options = {weekday : "long", year : "numeric", month :"long", day : "numeric"}
        return date.toLocaleDateString(undefined, options)
    }
  return (
    <div>
        <h3>Digital Clock</h3>
        <h1>
            {formatTimeWithZer0(formatHour(currentTime.getHours()))}
            : {formatTimeWithZer0(currentTime.getMinutes())}
            : {formatTimeWithZer0(currentTime.getSeconds())}
            {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </h1>
        <h2>{formatDate(currentTime)}</h2>
    </div>
  )
}

export default WorkoutsOne