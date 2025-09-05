import { useEffect, useState } from 'react';
import './Mentoria.css';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

export default function Mentoria() {
    const [slides, setSlides] = useState([]);
    const [imgIndex, setImgIndex] = useState(0);

    const objetosProfessores = [
        { nome: 'Cleber', descricao: 'Treinador de CSGO', image: img1 },
        { nome: 'Marília', descricao: 'Treinadora ', image: img2 },
        { nome: 'Pedro', descricao: 'Professor de Física', image: img3 },
        { nome: 'Augusto', descricao: 'Professor de LoL', image: img4 },
    ];

    useEffect(() => {
        setSlides(objetosProfessores);
    }, []);

    const prevSlide = () => {
        setImgIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setImgIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    if (slides.length === 0) return null;

    const atual = slides[imgIndex];

    return (
        <div className="fotos-container">
            <div className="slides">
                <div className="fotos">
                    <button className="prev" onClick={prevSlide} aria-label="Anterior">
                        &#10094;
                    </button>

                    <img
                        className="foto"
                        width={300}
                        src={atual.image}
                        alt={`Foto de ${atual.nome}`}
                    />

                    <button className="next" onClick={nextSlide} aria-label="Próximo">
                        &#10095;
                    </button>
                </div>

                <div className="descricao">
                    <h1 className="nome">{atual.nome}</h1>
                    <h2 className="profissao">Profissão: {atual.descricao}</h2>
                </div>
            </div>
        </div>
    );
}
