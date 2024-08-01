import { useSelector } from 'react-redux';

export const DataClientConfirm = () => {

    const {
        priceOfDessert,
        dessert, 
        colorOfDessert, 
        colorOfBorderDessert, 
        dataOfDessert, 
        dateCollectDessert,
        dataOfClient
    } = useSelector(state => state.order);

  return (
    <>
        <div className='client_data__confirm'>
            <h3>Datos del postre</h3>
            <ul>
                <li>
                    Precio: ${priceOfDessert}
                </li>
                <li>
                    Tipo: {dessert}
                </li>
                <li>
                    Color principal: <div style={{justifySelf:'center', display: 'inline-flex', height:'10px', width: '50px', background: colorOfDessert}}/>
                </li>
                <li>
                    Color borde: <div style={{justifySelf:'center', display: 'inline-flex', height:'10px', width: '50px', background: colorOfBorderDessert}}/>
                </li>
                <li>
                    Sabor: {dataOfDessert[2]}
                </li>
                <li>
                    Fecha de recolección: {dateCollectDessert}
                </li>
            </ul>
            <h3>Datos del cliente</h3>
            <ul>
                <li>
                    Nombre: {dataOfClient.inputName}
                </li>
                <li>
                    Email: {dataOfClient.inputEmail}
                </li>
                <li>
                    Celular: {dataOfClient.inputCelPhone}
                </li>
            </ul>
        </div>
    </>
  )
}
