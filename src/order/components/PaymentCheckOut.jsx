import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useDispatch, useSelector } from 'react-redux';
import { createPreference } from '../../store/order/thunks';
import config from '../../../config.json';

// Inicializa Mercado Pago con tu clave pública
initMercadoPago(config.MERCADO_PAGO_ACCESS_KEY);



export const PaymentButton = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // Estado de carga
    const [preferenceId, setPreferenceId] = useState(null);
 
    const { 
        priceOfDessert, 
        dessert, 
        dataOfDessert,
        colorOfDessert,
        colorOfBorderDessert,
        imageExampleDessert,
        dateCollectDessert,
        hourCollectDessert,
        dataOfClient
    } = useSelector(state => state.order);

    useEffect(() => {
        const initializeCheckout = async () => {
          try {
            const response = await dispatch(createPreference(dataOfClient));

            const dataPay = {
              priceOfDessert, 
              dessert, 
              dateCollectDessert,
              hourCollectDessert,
              token: response,
              firstColor: colorOfDessert ?? null,
              imageRef: imageExampleDessert ?? null,
              secondColor: colorOfBorderDessert?? null,
              countPersons: dataOfDessert?.[0] ?? null,
              styleDessert: dataOfDessert?.[1] ?? null,
              savorDessert: dataOfDessert?.[2] ?? null,
              filling: dataOfDessert?.[3] ?? null,
              inputName: dataOfClient.name,  // Nombre del cliente
              inputEmail: dataOfClient.email,  // Email del cliente
              inputCelPhone: dataOfClient.phone,  // Teléfono del cliente
              inputMsg: dataOfClient.message, 
              
            }
        
              const serializedDataPay = JSON.stringify(dataPay);
              localStorage.setItem('payStateMajeysa', serializedDataPay);
            
    
            if (response) {
              setPreferenceId(response);
            } else {
              console.error('Error: preference_id not found in response');
            }
          } catch (error) {
            console.error('Error creating preference:', error);
          } finally {
            setIsLoading(false); // Ocultar spinner una vez que obtengas la preferencia
          }
        };
    
        initializeCheckout();
      }, [dispatch, dataOfClient, priceOfDessert]);
      
    return (
        <div>
            {(!preferenceId && isLoading) 
              ? <div className='loading-pay-button'></div>
              : <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} customization={{ texts:{ action: 'pay', valueProp: 'security_safety'}}} />
            }
        </div>
    );
};
