import { useState } from 'react';
import '../mentoria/Mentoria.css';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

export default function Mentoria() {

    const slides = [img1, img2, img3, img4];
    const [index, setIndex] = useState(0);

    const plusSlides = (n) => {
        let newIndex = index + n;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        setIndex(newIndex);
    };

    return (
        <div className="fotos-container">


            <div className='slides'>
                <div className='ordem'>1/4</div>
                <img src={img1} alt="Foto de instrutor da TRYEZ" />
                <div className='nomes'></div>
            </div>

            <div className='slides'>
                <div className='ordem'>2/4</div>
                <img src={img2} alt="Foto de instrutora da TRYEZ" />
                <div className='nomes'></div>
            </div>

            <div className='slides'>
                <div className='ordem'>3/4</div>
                <img src={img3} alt="Foto de instrutor da TRYEZ" />
                <div className='nomes'></div>
            </div>

            <div className='slides'>
                <div className='ordem'>4/4</div>
                <img src={img4} alt="Foto de instrutor da TRYEZ" />
                <div className='nomes'></div>
            </div>

            <a className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
                &#10095;
            </a>
        </div>
    );
}
