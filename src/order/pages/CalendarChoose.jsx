import React, { useState, useEffect } from 'react';
import { hours } from '../../data/hours/hours';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export const CalendarChoose = ({ selectedDate, onDateChange, onHourChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [days, setDays] = useState([]);
  const actualMonth = new Date().getMonth();
  const actualYear = new Date().getFullYear();
  const actualDay = new Date().getDate();


  useEffect(() => {
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();
    const daysArray = [];
    
    
    for (let i = 0; i < startDate; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }

    setDays(daysArray);
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    if (date) {
      onDateChange(date);
    }
  };

  const handleHour = (event) => {
    const hour = event.target.value;
    onHourChange(hour)
    // Realiza cualquier otra lógica necesaria con el valor de workTime
  };

  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
          <h2>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h2>
          <button onClick={handleNextMonth}><FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
        <div className="calendar-grid">
          {['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'].map((day) => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
          {days.map((day, index) => (
            
            <div
              key={index}
              className={
                `calendar-day ${day && selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''}
                ${day 
                    ? currentMonth.getFullYear() < actualYear 
                    || currentMonth.getFullYear() == actualYear && currentMonth.getMonth() < actualMonth
                    || currentMonth.getFullYear() == actualYear && currentMonth.getMonth() == actualMonth && day.getDate() < actualDay + 1                  
                    ? 'disabled' : '' : null}
                    
                ${!day  ? 'day-undefine' : ''}`

              }
              onClick={() => handleDateClick(day)}
            >
              {day ? day.getDate() : ''}
            </div>
          ))}
        
        </div>
      </div>
      <div className='hoursChoose'>
      <label htmlFor="">Seleccione la hora en la que recogera el producto </label>
      <select onChange={handleHour} className='hours_input_select'>
      {hours.map(hour =>(
          <option key={hour} >
            {hour}
          </option>
        ))}
      </select>

      </div>
    </>
     
  );
};
