import { DataClientConfirm } from "../components/DataClientConfirm";
import { useSelector } from "react-redux";
import { PaymentButton } from "../components/PaymentCheckOut";

export const SixStepPage = () => {
 
  const { priceOfDessert } = useSelector(state => state.order);

  return (
    <>
      <div className='payment_container'>
        {/* <PaymentBrick /> */}
        <DataClientConfirm/>
        <div>
            <h1>Finalizar Compra</h1>
            <h3>${priceOfDessert}</h3>
            <PaymentButton />
        </div>
      </div>
      
    </>
    
  );
};
