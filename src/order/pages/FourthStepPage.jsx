import React, { useEffect, useState } from 'react'
import { LoadingPage } from './LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { getCakes } from '../../store/order/thunks';
import { ImagesDresser } from '../components/ImagesDresser';

export const FourthStepPage = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const {keyWord, imagesPreChoose, loading} = useSelector(state => state.order);
  

  useEffect(() => {
    dispatch(getCakes(keyWord, page))
  }, [page, keyWord, dispatch])

  const handleUpPage = () => {
    setPage(page+1)
  }

  const handleDownPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  }


  return (
    <>
      {
        (imagesPreChoose || loading) 
          ? <ImagesDresser 
              imagesPreChoose={imagesPreChoose.filteredImages} 
              handleUpPage={handleUpPage}
              handleDownPage={handleDownPage}
              page={page}
              totalPage={imagesPreChoose.totalPage}
              dispatch={dispatch}/> 
          : <LoadingPage />
      }
    </>

  )
}
