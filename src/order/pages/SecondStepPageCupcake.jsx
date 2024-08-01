import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beforePage, chooseDataOfDessert, isPriceDessert } from '../../store/order';
import { useMsgForm } from '../../hooks/useMessageForm';
import { MessageForm } from '../components/MessageForm';
import {  cupcake } from '../../data/dresser/dataDressert';

export const SecondStepPageCupcake = () => {
    const dispatch = useDispatch();
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    
    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();
    const packDessert = cupcake;

    const handleSelectChange1 = ({target}) => {
        const selectedCountPerson = target.value;
        const data = packDessert.find(dessert => dessert.countPersons == selectedCountPerson)
        setSelectedOption1(target.value);
        dispatch(isPriceDessert(data.price))
    };

    const handleSelectChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };


    const handleDataDessert = () => {
        if (!selectedOption1 || !selectedOption3 ) {
            msjInputError('formulario completo');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;
        }
        const dataDessert = [selectedOption1, , selectedOption3,];
        const level = 30;
        const title = 'Escoge el color principal';
        dispatch(chooseDataOfDessert({dataDessert, level, title}));
    }

    const handleBeforeDessert = () => {
        const level = 0;
        const title = 'Escoge el tipo de postre';
        dispatch(beforePage({level, title}))
    }

    return (
        <>
            <div className='second_step_form'>
                {
                    msjForm && <MessageForm props={[msjForm, statusMsj]} />
                }
                <div className='buttons-container-second'>
                    <button className='boton-order' onClick={handleBeforeDessert}>Atrás</button>
                    <button className='boton-order' onClick={handleDataDessert}>Siguiente</button>
                </div>
                <div className='options_second__step'>
                    <div>
                        <label>¿Cuantos cupcakes necesitas?</label>
                        <select id="option1" value={selectedOption1} onChange={handleSelectChange1}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <option value="48">48</option>
                            <option value="64">64</option>
                            <option value="80">80</option>
                          
                        </select>
                    </div>
                    <div>
                        <label>¿De qué sabor quieres el cupcake?</label>
                        <select id="option3" value={selectedOption3} onChange={handleSelectChange3}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="Vainilla">Vainilla</option>
                            <option value="Chocolate">Chocolate</option>
                            <option value="Fresa">Fresa</option>
                            <option value="Red Velvet">Red Velvet</option>
                            <option value="Zanahoria">Zanahoria</option>
                            <option value="Nuez">Nuez</option>
                            <option value="Piña">Piña</option>
                            <option value="Limon">Limon</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

