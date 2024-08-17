import { faHouse, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorTransactionPage = () => {
  const navigate = useNavigate();
  const width = 150;

  useEffect(() => {
    // Check if there's data in local storage
    const data = localStorage.getItem('payStateMajeysa');
    if (data) {
      // Remove the data if present
      localStorage.removeItem('payStateMajeysa');
    }
  }, []);

  const handleRedirect = () => {
    navigate('/');
    return;
  };

  return (
    <div className='error_transaction'>
      <FontAwesomeIcon icon={faXmarkCircle} style={{ height: `${width}px` }} />
      <h1>No se realizó la compra</h1>
      <h4>Inténtalo más tarde</h4>
      <button onClick={handleRedirect} className='error_button'>
        <FontAwesomeIcon icon={faHouse} style={{ height: `30px` }} />
      </button>
    </div>
  );
};
