import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SuccessTransactionPage = () => {
  const width = 150;
  return (
    <>
      <div className='success_transaction'>
        <FontAwesomeIcon icon={faCheckCircle} style={{height:`${width}px`}} />
        <h1>Tu compra ha sido un éxito</h1>
        <p>Te hemos enviado un correo con los datos de la compra</p>
      </div>
    </>
    
  )
}
