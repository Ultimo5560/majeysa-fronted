import { useSelector } from 'react-redux';

export const OrderLayout = () => {
  const {level, title} = useSelector(state => state.order);
  return (
    <>
      <div className="container_steps">
        <div style={{  width: `${level}%` }} className="prosgres_steps" ></div>
        <p className={`step step_left ${(level >= 0)?'complete' : ''}`}>1</p>
        <p className={`step ${(level >= 20)?'complete' : ''}`}>2</p>
        <p className={`step ${(level >= 40)?'complete' : ''}`}>3</p>
        <p className={`step ${(level >= 60)?'complete' : ''}`}>4</p>
        <p className={`step ${(level >= 80)?'complete' : ''}`}>5</p>
        <p className={`step step_rigth ${(level === 100)?'complete' : ''}`}>6</p>
      </div>
      <div className="container_steps__title">
        <p className="layout_steps">{title}</p>
      </div>

    </>
  )
}
