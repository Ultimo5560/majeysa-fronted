// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPreference, makePayment } from '../../store/order/thunks';
// import { handleTransactionStatusPay } from '../../store/order';
// import config from '../../../config.json';
// // Puedes usar cualquier biblioteca de spinners o crear uno propio
// // import { ClipLoader } from 'react-spinners'; // Si usas react-spinners

// export const PaymentBrick = () => {
//   const dispatch = useDispatch();
//   const { dataOfClient, priceOfDessert } = useSelector(state => state.order);
//   const [isLoading, setIsLoading] = useState(true); // Estado de carga
//   const [preferenceId, setPreferenceId] = useState(null);

//   useEffect(() => {
//     const initializeCheckout = async () => {
//       try {
//         const response = await dispatch(createPreference(dataOfClient, priceOfDessert));

//         if (response) {
//           setPreferenceId(response);
//         } else {
//           console.error('Error: preference_id not found in response');
//         }
//       } catch (error) {
//         console.error('Error creating preference:', error);
//       } finally {
//         setIsLoading(false); // Ocultar spinner una vez que obtengas la preferencia
//       }
//     };

//     initializeCheckout();
//   }, [dispatch, dataOfClient, priceOfDessert]);

//   useEffect(() => {
//     if (preferenceId) {
//       const loadMercadoPagoScript = () => {
//         const script = document.createElement('script');
//         script.src = 'https://sdk.mercadopago.com/js/v2';
//         script.onload = () => {
//           const mp = new window.MercadoPago(config.MERCADO_PAGO_ACCESS_KEY, { locale: 'es-MX' });
//           const bricksBuilder = mp.bricks();
//           renderPaymentBrick(bricksBuilder, preferenceId);
//         };
//         document.body.appendChild(script);
//       };

//       loadMercadoPagoScript();
//     }
//   }, [preferenceId]);

//   const renderPaymentBrick = async (bricksBuilder, preferenceId) => {
//     const settings = {
//       initialization: {
//         amount: priceOfDessert,
//         preferenceId: preferenceId,
//       },
//       customization: {
//         visual: {
//           style: {
//             theme: 'dark',
//           },
//         },
//         paymentMethods: {
//           creditCard: "all",
//           debitCard: "all",
//           bankTransfer: "all",
//           atm: "all",
//           wallet_purchase: "all",
//           ticket: "all",
//           onboarding_credits: "all",
//           maxInstallments: 1
//         },
//       },
//       callbacks: {
//         onReady: () => {
//           // Una vez que el Brick esté listo, puedes ocultar el spinner
//           setIsLoading(false);
//         },
//         onSubmit: async ({ selectedPaymentMethod, formData }) => {
//           dispatch(handleTransactionStatusPay('checking'));
//           try {
//             await dispatch(makePayment(formData, dataOfClient));
//             // Lógica adicional después de hacer el pago si es necesario
//           } catch (error) {
//             console.error('Error making payment:', error);
//             throw error; // Asegura que los errores se manejen apropiadamente
//           }
//         },
//         onError: (error) => {
//           console.error('Error en MercadoPago:', error);
//           setIsLoading(false); // Ocultar el spinner en caso de error
//         },
//       },
//     };

//     try {
//       // Crea el Brick de pago
//       await bricksBuilder.create('payment', 'paymentBrick_container', settings);
//     } catch (error) {
//       console.error('Error creating payment brick:', error);
//       setIsLoading(false); // Asegúrate de ocultar el spinner en caso de error
//     }
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <div>Cargando...</div>
//         // <ClipLoader size={50} color={"#123abc"} loading={isLoading} /> // Ejemplo usando react-spinners
//       ) : (
//         <div id="paymentBrick_container"></div>
//       )}
//     </div>
//   );
// };
