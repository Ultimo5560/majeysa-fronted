import { useDispatch } from 'react-redux';
import { chooseDessert } from '../../store/order/orderSlice';

export const FirstStepPage = () => {

  const dispatch = useDispatch();

  const handleChooseDessert = (dessert, level, keyWord) => {
    const title = (dessert === 'Pastel') ? 'Escoge el tamaño, la forma y los sabores' : (dessert === 'Cupcakes') ? 'Escoge la cantidad y el sabor' : 'Escoge el sabor'; 
    dispatch(chooseDessert({dessert, level, keyWord, title}))
  }
  
  return (
    <>
        <div className="choose_type">
          <div>
          <button className="button_choose" onClick={()=>handleChooseDessert('Pastel', 20, 'cake')}>
              <img className="choose cake" src={`../cake-footer.jpg`} alt="" />
              <h3>Pastel</h3>
            </button>
            
          </div>
          <div>
          <button className="button_choose" onClick={()=>handleChooseDessert('Cheescake', 20, 'cheescake')}>
              <img className="choose cake" src={`../cheescake.jpg`} alt="" />
              <h3>Cheescake</h3>
            </button>

          </div>
          <div>
          <button className="button_choose" onClick={()=>handleChooseDessert('Cupcakes', 20, 'cupcakes')}>
              <img className="choose cake" src={`../cupcakes.jpg`} alt="" />
              <h3>Cupcakes</h3>
            </button>

          </div>
        </div>
    </>
    
  )
}
