import { Route, Routes } from 'react-router-dom';
import { PosterRoutes } from '../poster/routes/PosterRoutes';
import { OrderRoutes } from '../order/routers/OrderRoutes';
import { SuccessTransactionPage } from '../order/pages/SuccessTransactionPage';
import { ErrorTransactionPage } from '../order/pages/ErrorTransactionPage';
import { PendingTransactionPage } from '../order/pages/PendingTransactionPage';
// import { LoadingPage } from '../order/pages/LoadingPage';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Rutas de autenticación */}
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} /> */}

        {/* Rutas de la aplicación de panadería */}
        <Route path="*" element={<PosterRoutes />} />
        <Route path="success-transaction" element={<SuccessTransactionPage />} />
        <Route path="error-transaction/*" element={<ErrorTransactionPage />} />
        <Route path="pending-transaction" element={<PendingTransactionPage />} />
        <Route path="making-order/*" element={<OrderRoutes />} />
        {/* <Route path="checking" element={<LoadingPage />} /> */}

        {/* Rutas del administrador */}
        {/* <Route path="admin/*" element={<AdminRoutes />} /> */}
    </Routes>
  )
}
