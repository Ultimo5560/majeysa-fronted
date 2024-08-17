
import React from 'react'

export const PendingTransactionPage = () => {
  const width = 150;
  return (
    <>
      <div style={{backgroundColor:'blueviolet', height:'100vh', padding:'50px'}}>
        <div className='container-loading'>
            <h4>Pago Pendiente</h4>
            <div className='laading-order'></div>
            <div className='loading-into'></div>
            <p>Tu pago está pendiente. Estaremos en contacto contigo para finalizar el proceso.</p>
        </div>
        
      </div>
    </>
    
  )
}
