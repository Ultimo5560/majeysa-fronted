import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { beforePage, chooseImageExample } from '../../store/order';
import { useSelector } from 'react-redux';

export const ImagesDresser = ({imagesPreChoose, handleUpPage, handleDownPage, page, totalPage, dispatch}) => {
    
    const [selectedImage, setSelectedImage] = useState(null)
    const {dessert} = useSelector(state => state.order);

    const handleSelectedImage = (image) => {
        setSelectedImage(image)
    }

    const handleImageDessert = () =>{
      (selectedImage) 
        ? dispatch(chooseImageExample(selectedImage.links.html))
        : dispatch(chooseImageExample(null))
        
    }
    const handleBeforeDessert = () => {
      const level = (dessert === 'Pastel') ? 40 : (dessert === 'Cupcakes') ? 30 : 30;
      const title = (dessert === 'Pastel') ? 'Escoge el color del borde' : (dessert === 'Cupcakes') ? 'Escoge el color principal' : 'Escoge el sabor';
      dispatch(beforePage({level, title}))
  }
  
    
  return (
    <>
      <div className='div-buttons'>
          <button onClick={handleBeforeDessert} className='boton-order'>Atrás</button>
          <button onClick={handleImageDessert} className='boton-order' >Siguiente</button>
      </div>
      <div className='gallery container_img'>
      <div className='pagination'>
          <button onClick={handleDownPage} >
              <FontAwesomeIcon icon={faArrowLeftLong} />
          </button>
          <span>Página {page} de {totalPage}</span>
          <button onClick={handleUpPage} >
              <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div className='gallery_grid'>
          {
            imagesPreChoose.map(image =>(
              <figure className='gallery_picture' key={image.id}>
                <img onClick={()=>handleSelectedImage(image)} className='gallery_img' src={image.urls.small} alt="" />
                {
                  (selectedImage && selectedImage.id === image.id) && <p className='image-selected'>Seleccionada</p>
                }
              </figure>
            ))
          }

        </div>
      </div>
  </>
  )
}
