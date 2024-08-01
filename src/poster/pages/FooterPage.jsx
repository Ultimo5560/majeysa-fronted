import React from 'react'

export const FooterPage = () => {
  return (
    <>
        <div className='footer_container__contact'>
          <div className='footer_logo'>
            <p>Pasteleria</p>
            <p>Majeysa</p>
          </div>
          <div className='footer_horarios parr_footer'>
              <p>HORARIOS</p>
              <p>LUNES A SABADO DE 10:00AM - 8:00PM</p>
              <p>DOMINGO DE 1:00PM - 6:00PM</p>
          </div>
          <div className='footer_contact parr_footer'>
              <p>CONTACTO</p>
              <p>CEL.: 993-170-2832</p>
              <p>EMAIL: Jemima_Q@hotmail.com</p>
          </div>
          <div className='footer_redes parr_footer'>
              <p>REDES SOCIALES</p>
              <a href="https://www.facebook.com/jemimaqueren.perezacosta" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          </div>
        </div>
    </>
  )
}
