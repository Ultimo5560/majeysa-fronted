import React, { useState } from 'react'
import { CalendarChoose } from './CalendarChoose';
import { daysWeek } from '../../data/daysWeek/daysWeek';
import { monthYear } from '../../data/month/monthYear';
import { useDispatch, useSelector } from 'react-redux';
import { beforePage, chooseDateCollect } from '../../store/order';
import { MessageForm } from '../components/MessageForm';
import { useMsgForm } from '../../hooks/useMessageForm';

export const FourthStepTwoPage = () => {
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const daysOfWeek = daysWeek;
    const monthOfYear = monthYear;
    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();

    const {dessert} = useSelector(state => state.order);
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleHourChange = (hour) => {
      setSelectedHour(hour);
    };

    const handleDataAndHour = () => {
      if (!selectedDate || !selectedHour) {
        msjInputError('día y la hora');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;        
      }

      const dateReserved = `día ${daysOfWeek[selectedDate.getDay()]} ${selectedDate.getDate()} de ${monthOfYear[selectedDate.getMonth()]} del año ${selectedDate.getFullYear()}`
      dispatch(chooseDateCollect({dateReserved, selectedHour}));
    }

    const handleBeforeDessert = () => {
      const level = (dessert === 'Pastel') ? 60 : (dessert === 'Cupcakes') ? 60 : 20;
      const title = (dessert === 'Pastel') ? 'Puedes escoger una imagen de referencia' : (dessert === 'Cupcakes') ? 'Puedes escoger una imagen de referencia' : 'Puedes escoger un sabor';
      dispatch(beforePage({level, title}))
  }
  
  return (
    <div className='container__date_and_hour'>
        {msjForm && <MessageForm props={[msjForm, statusMsj]} />}
      <div className='div-buttons'>
          <button className='boton-order' onClick={handleBeforeDessert}>Atrás</button>
          <button className='boton-order' onClick={handleDataAndHour}>Siguiente</button>
      </div>
      <CalendarChoose selectedDate={selectedDate} selectedHour={selectedHour} onHourChange={handleHourChange} onDateChange={handleDateChange} />
    </div>
  )
}
