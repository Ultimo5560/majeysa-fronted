import { useState } from 'react';
import { colors } from '../../data/colors/colorsPalete';
import { useDispatch, useSelector } from 'react-redux';
import { beforePage, chooseColorOfDessert } from '../../store/order';
import { MessageForm } from '../components/MessageForm';
import { useMsgForm } from '../../hooks/useMessageForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ThirdStepPage = () => {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(null)
    const paleteColors = colors;
    const {dessert} = useSelector(state => state.order);

    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();

    const handleSelectColor = (color) => {
        setSelectedColor(color)
    }

    const handleColorDessert = () =>{
        if (!selectedColor) {
            msjInputError('color');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;
        }
        const level = (dessert === 'Pastel') ? 40 : (dessert === 'Cupcakes') ? 60 : 40;
        const title =(dessert === 'Pastel') ? 'Escoge el color del borde' :  'Escoge una imagen de referencia';
        dispatch(chooseColorOfDessert({selectedColor, level, title}))
    }

    const handleBeforeDessert = () => {
        const level = 20;
        const title = (dessert === 'Pastel') ? 'Escoge el tamaño, forma y sabores' : 'Escoge la cantidad y sabor';
        dispatch(beforePage({level, title}))
    }
  return (
    <>
        <div className='container_colors'>
            <div className='div-buttons'>
                <button className='boton-order' onClick={handleBeforeDessert}>Atrás</button>
                <button className='boton-order' onClick={handleColorDessert}>Siguiente</button>
            </div>
                    {
                        msjForm && <MessageForm props={[msjForm, statusMsj]} />
                    }
            <div className='container_step_third'>

                <div>
                    {
                        paleteColors.map(color=>(
                            <table key={color.id}>
                                <thead>
                                    <tr>
                                        <th onClick={()=>handleSelectColor(color.code)}
                                            style={{
                                                background:color.code, 
                                                color: color.code === '#ffffff' ? 'black' : 'white'
                                            }}>
                                            {
                                                (selectedColor && selectedColor===color.code) 
                                                    ? <p className='color-selected'><FontAwesomeIcon icon={faCheckCircle} /></p>
                                                    : ''
                                            }
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {color.variants.map(variant=>(
                                    <tr key={variant}>
                                        <th onClick={()=>handleSelectColor(variant)} style={{background:variant}}>
                                            {
                                                (selectedColor && selectedColor===variant) 
                                                    ? <p className='color-selected'><FontAwesomeIcon icon={faCheckCircle} /></p>
                                                    : ''
                                            }
                                        </th>
                                        
                                    </tr>                                        
                                    ))}
                                </tbody>
                            </table>
                        ))
                    }
                </div>
            </div>
        </div>
        
    </>
  )
}
