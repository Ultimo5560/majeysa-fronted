import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beforePage, writeDataClient } from '../../store/order';
import { useMsgForm } from '../../hooks/useMessageForm';
import { MessageForm } from '../components/MessageForm';

export const FiveStepPage = () => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCelPhone, setInputCelPhone] = useState('');
  const [inputMsg, setInputMsg] = useState('');

  const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();

  const onInputName = ({ target }) => {
    setInputName(target.value);
    const [form] = document.getElementsByName('name');
    target.className.includes('input--off') && form.classList.remove('input--off');
  };

  const onInputEmail = ({ target }) => {
    setInputEmail(target.value);
    const [form] = document.getElementsByName('Email');
    target.className.includes('input--off') && form.classList.remove('input--off');
  };

  const onInputCelphone = ({ target }) => {
    const invalidCharsPattern = /[a-zñ]/i;
    const checkLetters = invalidCharsPattern.test(target.value);

    if (checkLetters) return;

    
    let value = target.value.replace(/-/g, ''); // Remove existing hyphens
    if (value.length > 3 && value.length <= 6) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 6) {
      value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
    } 
    const [form] = document.getElementsByName('celphone');
    target.className.includes('input--off') && form.classList.remove('input--off');

    if (value.length > 12) {
      return
    }

    setInputCelPhone(value);
  };

  const onInputMessage = ({ target }) => {
    setInputMsg(target.value);
    const [form] = document.getElementsByName('message');
    target.className.includes('input--off') && form.classList.remove('input--off');
  };

  const handleFormDataClient = () => {
    if (inputName.trim().length === 0) {
      const [form] = document.getElementsByName('name');
      form.classList.add('input--off');
      msjInputError('nombre');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }

    if (inputEmail.trim().length === 0 || !inputEmail.trim().includes('@')) {
      const [form] = document.getElementsByName('email');
      form.classList.add('input--off');
      msjInputError('email');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }

    if (inputCelPhone.trim().length === 0) {
      const [form] = document.getElementsByName('celphone');
      form.classList.add('input--off');
      msjInputError('celular');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }

    if (inputMsg.trim().length === 0) {
      const [form] = document.getElementsByName('message');
      form.classList.add('input--off');
      msjInputError('Mensaje');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }

    dispatch(writeDataClient({
      inputName,
      inputEmail,
      inputCelPhone,
      inputMsg
    }));
  };

  const handleBeforeDessert = () => {
    const level = 80;
    const title = 'Escoge la fecha en la de recolección';
    dispatch(beforePage({level, title}))
}

  return (
    <>
      <div className='div-buttons'>
        <button className='boton-order' onClick={handleBeforeDessert}>Atrás</button>
        <button className='boton-order' onClick={handleFormDataClient}>Siguiente</button>
      </div>
      <div className='container_msj__fiveStep'>
        {
          msjForm && <MessageForm props={[msjForm, statusMsj]} />
        }
      </div>

      <div className='five_step__container'>
        <label htmlFor="name">¿A nombre de quien se hara el pedido?</label>
        <input onChange={onInputName} placeholder='Nombre completo' type="text" name='name' value={inputName} />
        <label htmlFor="name">Ingresa un email</label>
        <input onChange={onInputEmail} placeholder='Email' type="Email" name='email' value={inputEmail} />
        <label htmlFor="celphone">Numero de celular</label>
        <input onChange={onInputCelphone} placeholder='555-555-5555' type="tel" name="celphone" value={inputCelPhone} />
        <label htmlFor="message">¿Algun comentario extra que desees hacernos?</label>
        <textarea onChange={onInputMessage} placeholder='Deseo que mi pastel tenga...     ' value={inputMsg} name='message' id="message"/>
      </div>
    </>
  );
};
