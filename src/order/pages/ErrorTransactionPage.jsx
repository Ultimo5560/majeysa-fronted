import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const ErrorTransactionPage = () => {
  const width = 150;
  return (
    <>
      <div className='error_transaction'>
        <FontAwesomeIcon icon={faXmarkCircle} style={{height:`${width}px`}} />
        <h1>No se realizo la compra</h1>
        <h4>Intentalo mas tarde</h4>
      </div>
    </>
    
  )
}
