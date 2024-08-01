import { useNavigate } from "react-router-dom";
import { DataClientConfirm } from "../components/DataClientConfirm";
import { PaymentBrick } from "../components/PaymentBrick";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export const SixStepPage = () => {
 
  const navigate = useNavigate();

  const {statusTrasactionPay} = useSelector(state => state.order);

  useEffect(() => {
    if (statusTrasactionPay) {
      if (statusTrasactionPay === 200 || statusTrasactionPay === 201) {
        navigate('/making-order/success-transaction');
      } else {
        navigate('/making-order/error-transaction');
      }
    }
  }, [statusTrasactionPay]);
  

  return (
    <>
      <div className='payment_container'>
        <PaymentBrick />
        <DataClientConfirm/>
      </div>
      
    </>
    
  );
};
