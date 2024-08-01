import { useDispatch } from 'react-redux';
import { colors } from '../../data/colors/colorsPalete';
import { useState } from 'react';
import { beforePage, chooseColorBorderDessert } from '../../store/order';
import { useMsgForm } from '../../hooks/useMessageForm';
import { MessageForm } from '../components/MessageForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ThirdStepTwoPage = () => {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(null)
    const paleteColors = colors;

    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();

    const handleSelectColor = (color) => {
        setSelectedColor(color)
    }

    const handleColorBorderDessert = () =>{
        if (!selectedColor) {
            msjInputError('color');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;
        }
        dispatch(chooseColorBorderDessert(selectedColor))
    }

    const handleBeforeDessert = () => {
        const level = 30;
        const title = 'Escoge el color principal';
        dispatch(beforePage({level, title}))
    }
  return (
    <>
        <div className='container_colors'>
            <div className='div-buttons'>
                <button className='boton-order' onClick={handleBeforeDessert}>Atrás</button>
                <button className='boton-order' onClick={handleColorBorderDessert}>Siguiente</button>
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
