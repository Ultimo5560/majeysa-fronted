import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beforePage, chooseDataOfDessert, isPriceDessert } from '../../store/order';
import { useMsgForm } from '../../hooks/useMessageForm';
import { MessageForm } from '../components/MessageForm';
import { cheescake } from '../../data/dresser/dataDressert';

export const SecondStepPageCheescake = () => {
    const dispatch = useDispatch();
    const [selectedOption1, setSelectedOption1] = useState('');
    const [description, setDescription] = useState('');

    
    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();
    const packDessert = cheescake;

    const handleSelectChange1 = ({target}) => {
        const selectedSavor = target.value;
        const data = packDessert.find(dessert => dessert.savor === selectedSavor)
        setSelectedOption1(target.value);
        setDescription(data.description);
        dispatch(isPriceDessert(data.price));
    };



    const handleDataDessert = () => {
        if (!selectedOption1 ) {
            msjInputError('Este campo');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;
        }
        const dataDessert = [null, null, selectedOption1 + ': ' + description, null];
        const level = 80;
        const title = 'Puedes escoger alguna imagen de referencia';
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
                <div>
                    <div>
                        <label>¿Que sabor deseas?</label>
                        <select id="option1" value={selectedOption1} onChange={handleSelectChange1}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="Clásico o New York Cheesecake">Clásico o New York Cheesecake: Sencillo y delicioso</option>
                            <option value="Fresa">Fresa: Con una capa de fresas frescas o salsa de fresa.</option>
                            <option value="Frutos del Bosque">Frutos del Bosque: Una mezcla de frutas como arándanos, frambuesas y moras.</option>
                            <option value="Chocolate">Chocolate: Hecho con chocolate derretido o cacao.</option>
                            <option value="Limón">Limón: Con un toque ácido y refrescante.</option>
                            <option value="Caramelo">Caramelo: A menudo combinado con nueces o maní.</option>
                            <option value="Oreo">Oreo: Con galletas Oreo trituradas en la mezcla y en la base.</option>
                            <option value="Café">Café: Con un sabor suave y aromático a café.</option>
                            <option value="Mango">Mango: Refrescante y tropical</option>
                            <option value="Calabaza">Calabaza: Popular en otoño, especialmente en Estados Unidos</option>
                          
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

