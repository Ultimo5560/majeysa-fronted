import React, { useState } from 'react';
import { FooterPage } from './FooterPage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';

export const PosterPage = () => {
  const [currentSection, setCurrentSection] = useState('ab-01');
  const sectionsRef = useIntersectionObserver(setCurrentSection);

  const getNextSection = () => {
    const sectionIds = ['ab-01', 'ab-02', 'ab-03', 'ab-04', 'ab-05', 'ab-06'];
    const currentIndex = sectionIds.indexOf(currentSection);
    return currentIndex >= 0 && currentIndex < sectionIds.length - 1
      ? sectionIds[currentIndex + 1]
      : sectionIds[0];
  };

  return (
    <>
      <a href={`#${getNextSection()}`} className="botton-id">
        <img src={`../arrow-${(currentSection==='ab-06') ? 'up' : 'down'}.svg`} alt="Arrow Down" />
      </a>
      <div className="poster_container" id="ab-01" ref={(el) => sectionsRef.current[0] = el}>
        <div className="poster_conteiner__parr">
          <p className="poster_title">Pasteles</p>
          <p className="poster_title cake_name">Majeysa</p>
          <p className="poster_parr">
            Transformamos tus momentos en recuerdos dulces e irresistibles
          </p>
          <Link to='/making-order' className="poster_button">HAGA SU PEDIDO</Link>
        </div>
        <div className="poster_conteiner__image">
          <img className="poster_image" src={`../cake-poster.jpg`} alt="Póster de pastel" />
        </div>
      </div>
      <div className="poster_aboutus" id="ab-02" ref={(el) => sectionsRef.current[1] = el}>
        <div className="poster_aboutus__image">
          <img className="aboutus__image" src={`../cake-making.jpg`} alt="Haciendo pastel" />
        </div>
        <div className="poster_aboutus__parr">
          <p className="aboutus__title">Nuestra empresa es familiar</p>
          <p className="aboutus__parr">
            De nuestra familia a la tuya, nuestros pasteles están hechos con amor y tradición.
            Experimenta la calidez y la dedicación en cada creación.
          </p>
        </div>
      </div>
      <div className="poster_events" id="ab-03" ref={(el) => sectionsRef.current[2] = el}>
        <div className="poster_events__parr">
          <p className="events__title">Bodas, aniversarios, graduaciones, etc</p>
          <p className="events__parr">
            Pasteles para todos los momentos importantes de tu vida,
            desde aniversarios hasta reuniones familiares.
          </p>
        </div>
        <div className="poster_events__image">
          <img className="events__image" src={`../cake-events.jpg`} alt="Eventos con pasteles" />
        </div>
      </div>
      <div className="poster_more" id="ab-04" ref={(el) => sectionsRef.current[3] = el}>
        <div className="poster_more__title">
          <p className="more__title">Un poco de otros postres</p>
          <p className="more__title_parr">
            Contamos con más variedad de postres que puedes disfrutar,
            ya sea para eventos o simplemente para darte un gusto.
          </p>
        </div>
        <ul className="poster_more__parr">
          <li className="parr_more">
            <img className="more__image" src={`../cake-events.jpg`} alt="Más pasteles" />
            <div>
              <h1>Pasteles</h1>
              <p>
                Pasteles para todos los momentos importantes de tu vida.
              </p>
            </div>
          </li>
          <hr />
          <li className="parr_more">
            <img className="more__image" src={`../cupcakes.jpg`} alt="Cupcakes" />
            <div>
              <h1>CupCakes</h1>
              <p>
                Deliciosos cupcakes para diferentes eventos.
              </p>
            </div>
          </li>
          <hr />
          <li className="parr_more">
            <img className="more__image" src={`../cheescake.jpg`} alt="Cheesecake" />
            <div>
              <h1>CheesCake</h1>
              <p>
                Date el placer de probar nuestros deliciosos cheesecake.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="poster_nice__message" id="ab-05" ref={(el) => sectionsRef.current[4] = el}>
        <div className="poster_nice__message__image">
          <img className="poster_nice__image" src={`../cakeparts.jpg`} alt="Partes de pastel" />
        </div>
        <div className="poster_nice__message__parr">
          <p className="nice__message__title">Un toque de dulzura</p>
          <p className="nice__message__parr">
            El broche de oro perfecto para cualquier cena familiar: nuestros pasteles,
            llenos de sabor y amor, hacen que cada sobremesa sea inolvidable. Deja que
            nuestros pasteles añadan un toque especial a tus momentos más preciados.
            ¡Haz tu pedido hoy y convierte tus cenas familiares en celebraciones dulces y memorables!
          </p>
          <Link to='/making-order' className="nice__message_button">HAGA SU PEDIDO</Link>
        </div>
      </div>
      <div id="ab-06" ref={(el) => sectionsRef.current[5] = el}>
        <div className='footer_bakery'>
            <div className='footer_opacity'>
              <p>¿Desea hacer algún pedido?</p>
              <Link to='/making-order' className='footer_button'>HAGA CLICK AQUÍ</Link>
            </div>
            <img className='footer_bakery__image' src={`../cake-footer.jpg`} alt="" />
        </div>
        <FooterPage />
      </div>
    </>
  );
};
