import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beforePage, chooseDataOfDessert, isPriceDessert } from '../../store/order';
import { useMsgForm } from '../../hooks/useMessageForm';
import { MessageForm } from '../components/MessageForm';
import { dessert } from '../../data/dresser/dataDressert';

export const SecondStepPage = () => {
    const dispatch = useDispatch();
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');

    
    const { msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset } = useMsgForm();
    const packDessert = dessert;

    const handleSelectChange1 = ({target}) => {
        const selectedCountPerson = target.value;
        const data = packDessert.find(dessert => dessert.countPersons == selectedCountPerson)
        setSelectedOption1(target.value);
        dispatch(isPriceDessert(data.price))
    };
    const handleSelectChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleSelectChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };
    const handleSelectChange4 = (event) => {
        setSelectedOption4(event.target.value);
    };

    const handleDataDessert = () => {
        if (!selectedOption1 || !selectedOption2 || !selectedOption3 || !selectedOption4) {
            msjInputError('formulario completo');
            setTimeout(() => {
              msjReset();
            }, 4000);
            // alert('Por favor selecciona todas las opciones antes de continuar.');
            return;
        }
        const dataDessert = [selectedOption1, selectedOption2, selectedOption3, selectedOption4];
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
                        <label>¿Para cuantas personas es el pastel?</label>
                        <select id="option1" value={selectedOption1} onChange={handleSelectChange1}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="14">Para 14 personas</option>
                            <option value="28">Para 28 personas</option>
                            <option value="50">Para 50 personas</option>
                            <option value="75">Para 75 personas</option>
                            <option value="100">Para 100 personas</option>
                          
                        </select>
                        <label>¿De qué forma lo quieres?</label>
                        <select id="option2" value={selectedOption2} onChange={handleSelectChange2}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="Redondo">Redondo</option>
                            <option value="Cuadrado">Cuadrado</option>
                            <option value="Rectangular">Rectangular</option>
                            <option value="Corazón">Corazón</option>
                        </select>
                    </div>
                    <div>
                        <label>¿De qué sabor quieres el pastel?</label>
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
                        <label>¿Qué sabor de relleno te gustaría?</label>
                        <select id="option4" value={selectedOption4} onChange={handleSelectChange4}>
                            <option disabled value="">Selecciona una opción</option>
                            <option value="Cajeta">Cajeta</option>
                            <option value="Piña">Piña</option>
                            <option value="Babaria">Babaria</option>
                            <option value="Durazno">Durazno</option>
                            <option value="Fresa Natural">Fresa Natural</option>
                            <option value="Mermelada de fresa">Mermelada de fresa</option>
                            <option value="Galleta">Galleta</option>
                            <option value="Chocolate">Chocolate</option>
                            <option value="Salsa mora">Salsa mora</option>
                            <option value="Queso Crema">Queso Crema</option>
                            <option value="Coco">Coco</option>
                            <option value="Nuez">Nuez</option>
                            <option value="Almendras">Almendras</option>
                            <option value="Flan">Flan</option>
                            <option value="Chocoflan">Chocoflan</option>
                            <option value="Pay de queso">Pay de queso</option>
                            <option value="Cheescake">Cheescake</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

