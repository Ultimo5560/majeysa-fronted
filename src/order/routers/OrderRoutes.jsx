import { Navigate, Route, Routes } from 'react-router-dom';
import { MakingOrder } from '../components/MakingOrder';
import { ErrorTransactionPage } from '../pages/ErrorTransactionPage';
import { SuccessTransactionPage } from '../pages/SuccessTransactionPage';
import { LoadingPage } from '../pages/LoadingPage';
import { useSelector } from 'react-redux';

export const OrderRoutes = () => {
  const { statusTrasactionPay } = useSelector(state => state.order);

  if (statusTrasactionPay === 'checking') {
    return <LoadingPage />
  }

  return (
    <Routes>
      {statusTrasactionPay && (statusTrasactionPay === 200 || statusTrasactionPay === 201) && (
        <Route path="/success-transaction" element={<SuccessTransactionPage />} />
      )}
      {statusTrasactionPay && statusTrasactionPay !== 200 && statusTrasactionPay !== 201 && (
        <Route path="/error-transaction" element={<ErrorTransactionPage />} />
      )}
      <Route path="/" element={<MakingOrder />} />
      <Route path="*" element={<Navigate to="/making-order" />} />
    </Routes>
  );
};