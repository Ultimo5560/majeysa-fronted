import { useDispatch, useSelector } from 'react-redux';
import { createPreference, makePayment } from '../../store/order/thunks';
import { useMercadoPago } from '../../hooks/useMercadoPago';
import { handleTransactionStatusPay } from '../../store/order';
import config from '../../../config.json';

export const PaymentBrick = () => {
  const dispatch = useDispatch();
  const { dataOfClient, priceOfDessert } = useSelector(state => state.order);

  useMercadoPago(async () => {
    try {
      const MERCADO_PAGO_ACCESS_KEY = config.MERCADO_PAGO_ACCESS_KEY;
      const preferenceId = await dispatch(createPreference(dataOfClient));
      const mp = new window.MercadoPago(MERCADO_PAGO_ACCESS_KEY, { locale: 'es-MX' });
      const bricksBuilder = mp.bricks();
      renderPaymentBrick(bricksBuilder, preferenceId);
    } catch (error) {
      console.error('Error initializing MercadoPago:', error);
    }
  });

  const renderPaymentBrick = async (bricksBuilder, preferenceId) => {
    const settings = {
      initialization: {
        amount: priceOfDessert,
        preferenceId: preferenceId,
        payer: {
          firstName: dataOfClient.name,
          lastName: dataOfClient.lastName,
          email: dataOfClient.email, // Asegúrate de que este email esté presente
        },
      },
      customization: {
        visual: {
          style: {
            theme: 'dark',
          },
        },
        paymentMethods: {
          creditCard: "all",
          debitCard: "all",
          bankTransfer: "all",
          atm: "all",
          wallet_purchase: "all",
          ticket: "all",
          onboarding_credits: "all",
          maxInstallments: 1
        },
      },
      callbacks: {
        onReady: () => {
          // Callback opcional para manejar cuando el Brick esté listo
        },
        onSubmit: async ({ selectedPaymentMethod, formData }) => {
          dispatch(handleTransactionStatusPay('checking'));
          try {
            await dispatch(makePayment(formData, dataOfClient));
            // Lógica adicional después de hacer el pago si es necesario
          } catch (error) {
            console.error('Error making payment:', error);
            throw error; // Asegura que los errores se manejen apropiadamente
          }
        },
        onError: (error) => {
          console.error('Error en MercadoPago:', error);
        },
      },
    };

    // Crea el Brick de pago
    window.paymentBrickController = await bricksBuilder.create(
      'payment',
      'paymentBrick_container',
      settings
    );
  };

  return <div id="paymentBrick_container"></div>;
};
