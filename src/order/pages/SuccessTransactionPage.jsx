import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMail } from '../../store/order/thunks';
import { useNavigate } from 'react-router-dom';

export const SuccessTransactionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataPay, setDataPay] = useState(null);
  const { priceOfDessert, statusMailFinish } = useSelector(state => state.order);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('payStateMajeysa'));

    if (!data) {
      // Si no hay datos en localStorage, redirige a la página principal
      navigate('/');
      return;
    }

    const sendingMails = async () => {
      try {
        const response = await dispatch(sendMail(data));
        console.log(response);
        setDataPay(response); // Guardar la respuesta si es necesario

        // Eliminar los datos del localStorage después de enviar los correos
        localStorage.removeItem('payStateMajeysa');
      } catch (error) {
        console.error(error);
      }
    };

    sendingMails();
  }, [dispatch, navigate, priceOfDessert]);

  const width = 150;
  return (
    <>
      {
        (statusMailFinish && statusMailFinish === 200)
          ? <div className='success_transaction'>
              <FontAwesomeIcon icon={faCheckCircle} style={{ height: `${width}px` }} />
              <h1>Tu compra ha sido un éxito</h1>
              <p>Te hemos enviado un correo con los datos de la compra</p>
            </div>
          : <div style={{backgroundColor:'blueviolet', height:'100vh', padding:'50px'}}>
              <div className='container-loading'>
                  <h4>Le estamos enviando el comprobante de pago</h4>
                  <div className='laading-order'></div>
                  <div className='loading-into'></div>
                  <p>No cierre ni actualice la página</p>
              </div>
              
            </div>
      }
    </>
  );
};

