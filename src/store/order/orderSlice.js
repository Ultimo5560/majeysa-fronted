import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
   name: 'order',
   initialState: {
        level: 0,
        dessert: null,
        dataOfDessert: null,
        priceOfDessert: null,
        colorOfDessert: null,
        colorOfBorderDessert: null,
        imageExampleDessert: null,
        dateCollectDessert: null,
        hourCollectDessert: null,
        dataOfClient: null,
        title:'Escoge el tipo de postre',
        loading:false,
        keyWord:null,
        imagesPreChoose:null,
        statusTrasactionPay:null,
        statusMailFinish:null
   },
   reducers: {
        isSendMailFinish: (state, {payload}) => {
          state.statusMailFinish = payload
        },     
        isLoadingFalse: (state) => {
          state.loading = false
        },
        isLoadingTrue: (state) => {
          state.loading = true
        },
        isPriceDessert: (state, {payload}) => {
          state.priceOfDessert = payload
        },
        chooseDessert: (state, {payload}) => {
          state.loading = true;
          state.dessert = payload.dessert;
          state.level = payload.level;
          state.title = payload.title
          state.loading = false;
          state.keyWord = payload.keyWord;
        },
        chooseDataOfDessert: (state, {payload}) => {
          state.loading = true;
          state.level = payload.level;
          state.dataOfDessert = payload.dataDessert;
          state.title = payload.title
          state.loading = false;
        },
        chooseColorOfDessert: (state, {payload}) => {
          state.loading = true;
          state.colorOfDessert = payload.selectedColor;
          state.level = payload.level;
          state.title = payload.title;
          state.loading = false;
        },
        chooseColorBorderDessert: (state, {payload}) => {
          state.loading = true;
          state.colorOfBorderDessert = payload;
          state.level = 60;
          state.title = `Puedes escoger una imagen de referencia`
          state.loading = false;
        },
        chooseImageExample: (state, {payload}) => {
          state.loading = true;
          state.imageExampleDessert = payload;
          state.imagesPreChoose = null;
          state.level = 80;
          state.loading = false
          state.title = `Escoge la fecha en la de recolección`
        },
        chooseDateCollect: (state, {payload}) => {
          state.dateCollectDessert = payload.dateReserved;
          state.hourCollectDessert = payload.selectedHour;
          state.level = 87;
          state.title = `Escribe los datos de cliente`

        },
        writeDataClient: (state, {payload}) => {
          state.dataOfClient = payload;
          state.level = 100;
          state.title = `Confirma tus datos y paga`

        },
        imagesForChooseForPage: (state, {payload}) => {
          state.loading = true;
          state.imagesPreChoose = payload;
          state.loading = false;
        },
        handleTransactionStatusPay: (state, {payload}) => {
          state.statusTrasactionPay = payload;
        },
        beforePage: (state, {payload}) => {
          state.title = payload.title
          state.level = payload.level;
        }
        

   }
});


// Action creators are generated for each case reducer function
export const {
    isLoadingFalse,
    isLoadingTrue,
    chooseDessert,
    chooseDataOfDessert,
    chooseColorOfDessert,
    chooseColorBorderDessert,
    chooseImageExample,
    chooseDateCollect,
    writeDataClient,
    imagesForChooseForPage,
    isPriceDessert,
    handleTransactionStatusPay,
    beforePage,
    isSendMailFinish

} = orderSlice.actions;