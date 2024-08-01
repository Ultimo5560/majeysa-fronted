import { Route, Routes } from 'react-router-dom';
import { PosterRoutes } from '../poster/routes/PosterRoutes';
import { MakingOrder } from '../order/components/MakingOrder';
import { OrderRoutes } from '../order/routers/OrderRoutes';
import { LoadingPage } from '../order/pages/LoadingPage';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login and register */}
        <Route />

        {/* BakeryApp */}
        <Route path="*" element={<PosterRoutes/>} />
        <Route path="making-order/*" element={<OrderRoutes />} />
        {/* <Route path="checking" element={<LoadingPage />} /> */}

        {/* Admin */}
        <Route />
    </Routes>
  )
}
