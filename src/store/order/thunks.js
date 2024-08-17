import { undesplashApi } from "../../apis/undesplashApi"
import config from '../../../config.json';
import { handleTransactionStatusPay, imagesForChooseForPage, isSendMailFinish } from "./orderSlice";
import { paymentApi } from "../../apis/paymentApi";



export const getCakes = (keyWord, page) => {

    console.log(page);
    return async(dispatch)=>{
        try {
            const UNSPLASH_ACCESS_KEY = config.UNSPLASH_ACCESS_KEY
            const response = await undesplashApi.get(`?page=${page}=2&query=${keyWord}&client_id=${UNSPLASH_ACCESS_KEY}`);
            
            const {data} = response;
            const totalPage = data.total_pages;
            // Filtrar las imágenes que tienen una etiqueta con la palabra "cake"
            const filteredImages = data.results.filter(image => 
                image.tags.some(tag => tag.title.includes("cake")) &&
                !image.tags.some(tag => tag.title.includes("cupcake") 
                || tag.title.includes("cheesecake"))
            );            

            dispatch(imagesForChooseForPage({filteredImages, totalPage}))
        } catch (error) {
            console.error(error.message);
        }
    }
}


export const createPreference = (dataOfClient) => {
  return async (dispatch, getState) => {
      // Obtener el estado actual
      const state = getState();
      
      
      // Crear los datos de la preferencia de pago
      const paymentData = {
          transaction_amount: state.order.priceOfDessert,  // Monto de la transacción
          inputName: dataOfClient.name,  // Nombre del cliente
          inputEmail: dataOfClient.email,  // Email del cliente
          description: state.order.dessert,
      };

      try {
          // Enviar los datos de la preferencia de pago al backend
          const response = await paymentApi.post('/create_preference/', paymentData);
          
          // Manejar el estado de la transacción
          dispatch(handleTransactionStatusPay(response.status));
          
          // Devolver el ID de la preferencia de pago
          return response.data.id;
      } catch (error) {
          console.error(error);
          dispatch(handleTransactionStatusPay(error.response.status));
      }
  };
};

export const sendMail = (data) => {
    return async(dispatch)=>{
        try {
            const response = await paymentApi.post('/send_mail_finish/', data);
            console.log(response);
            dispatch(isSendMailFinish(response.status));
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}


// export const makePayment = (formData, dataOfClient) => {
//     return async (dispatch, getState) => {
//       // Obtener el estado actual
//       const state = getState();
//     //   const dataOfDessert = state.order.dataOfDessert
//       // Crear el arreglo dataOfDessert directamente desde el estado
//       const dessertData = {
//         countPersons: state.order.dataOfDessert?.[0] ?? null,
//         styleDessert: state.order.dataOfDessert?.[1] ?? null,
//         savorDessert: state.order.dataOfDessert?.[2] ?? null,
//         filling: state.order.dataOfDessert?.[3] ?? null,
//         dessert: state.order.dessert ?? null,
//         colorOfDessert: state.order.colorOfDessert ?? null,
//         colorOfBorderDessert: state.order.colorOfBorderDessert ?? null,
//         imageExampleDessert: state.order.imageExampleDessert ?? null,
//         dateCollectDessert: state.order.dateCollectDessert ?? null,
//         hourCollectDessert: state.order.hourCollectDessert ?? null,
//       };
      
//       try {
//         // Crear los datos de pago
//         const paymentData = {
//           ...formData,
//           ...dataOfClient,
//           cardholderEmail: formData.payer.email, // Usa el email del payer
//           cardholderName: `${formData.payer.firstName} ${formData.payer.lastName}`, // Combina el nombre y apellido
//           dessertData // Añade el arreglo dataOfDessert
//         };
  
//         // Enviar los datos de pago al backend
//         const response = await paymentApi.post('/process_payment/', paymentData);
//         console.log(response);
        
//         dispatch(handleTransactionStatusPay(response.status));
//       } catch ({response}) {
//         console.error(response);
//         dispatch(handleTransactionStatusPay(response.status));
//       }
//     };
//   };