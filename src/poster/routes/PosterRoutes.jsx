import { Route, Routes } from 'react-router-dom';
import { PosterPage } from '../pages/PosterPage';

export const PosterRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PosterPage />} />
    </Routes>
  )
}
