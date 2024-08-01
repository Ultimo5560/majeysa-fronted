import { OrderLayout } from '../layout/OrderLayout';
import { FirstStepPage } from '../pages/FirstStepPage';
import { SecondStepPage } from '../pages/SecondStepPage';
import { ThirdStepPage } from '../pages/ThirdStepPage';
import { ThirdStepTwoPage } from '../pages/ThirdStepTwoPage';
import { FourthStepPage } from '../pages/FourthStepPage';
import { FourthStepTwoPage } from '../pages/FourthStepTwoPage';
import { FiveStepPage } from '../pages/FiveStepPage';
import {  useSelector } from 'react-redux';;
import { LoadingPage } from '../pages/LoadingPage';
import { SixStepPage } from '../pages/SixStepPage';
import { SecondStepPageCupcake } from '../pages/SecondStepPageCupcake';
import { SecondStepPageCheescake } from '../pages/SecondStepPageCheescake';

export const MakingOrder = () => {
  const {level, loading, dessert } = useSelector(state => state.order);
  return (
    <>
        <OrderLayout />
        {(loading) && <LoadingPage />} 
        {(level === 0 && !loading) &&  <FirstStepPage />}
        {/* level 20 */}
        {(level === 20 && !loading && dessert === 'Pastel') &&  <SecondStepPage />}
        {(level === 20 && !loading && dessert === 'Cupcakes') &&  <SecondStepPageCupcake />}
        {(level === 20 && !loading && dessert === 'Cheescake') &&  <SecondStepPageCheescake />}
        {/* level 30 */}
        {(level === 30 && !loading) &&  <ThirdStepPage />}
        {/* level 40 */}
        {(level === 40 && !loading && dessert === 'Pastel') &&  <ThirdStepTwoPage />}
        {(level === 60 && !loading) &&  <FourthStepPage />}
        {(level === 80 && !loading) &&  <FourthStepTwoPage />}
        {(level === 87 && !loading) &&  <FiveStepPage />}
        {(level === 100 && !loading) &&  <SixStepPage />}          
    </>
  )
}
