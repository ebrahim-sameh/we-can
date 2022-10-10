import React, { useEffect, useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { FullScreenSlider } from '../';
import Button from '../Button';
import Aos from "aos";
import G1 from '../images/gallary/2.jpg'
import G2 from '../images/gallary/1.png'
import G3 from '../images/gallary/Capture1.PNG'
import G4 from '../images/gallary/1.jpg'

import "aos/dist/aos.css";
import './Gallary.scss'

const Gallary = () => {

  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const images = [
    {
      id: 1,
      src: G1
    },
    {
      id: 2,
      src: G2
    },
    {
      id: 3,
      src: G3
    },
    {
      id: 4,
      src: G4
    },
  ];

  return (
    <>
      <section className='gallary__section' id='gallary'>
        <h2 className='section__title' data-aos="zoom-in">Gallary</h2>
        <div className='images__container'>
          {images.map((img, i) => (
            <div className='single__image__container' key={img.id} data-aos="fade-up">
              <img src={img.src} alt='' />
              <div className='image__data'>
                <button onClick={() => {
                  setOpenSlider(prev => !prev);
                  setCurrentIndex(i);
                }}>
                  <BsArrowsFullscreen />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-up">
          <Button>View More</Button>
        </div>
      </section>
      {openSlider && <FullScreenSlider startIndex={currentIndex} images={images} onClose={setOpenSlider} />}
    </>
  )
}

export default Gallary