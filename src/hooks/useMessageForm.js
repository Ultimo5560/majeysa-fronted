import { useState } from 'react';

export const useMsgForm = (initialMsj = '', valueStatus = 0) => {

    const [msjForm, setMsjForm] = useState(initialMsj);
    const [statusMsj, setStatusMsj] = useState(valueStatus);

    const msjError = (error) => {
        setMsjForm('No fue posible enviar tu mensaje ');
        setStatusMsj(error);
    }

    const msjInputError = (inputName) => {
      setMsjForm(`El ${inputName} es requerido `);
      setStatusMsj(valueStatus);
  }

    const msjSend = (statusSend) => {

        setMsjForm('Tu mensaje fue enviado con exito ');
        setStatusMsj(statusSend);
    }

    const msjReset = () => {
        setMsjForm(initialMsj);
        setStatusMsj(valueStatus);
    }


  return {
    msjForm,
    statusMsj,
    msjError,
    msjInputError,
    msjSend,
    msjReset
  }
}