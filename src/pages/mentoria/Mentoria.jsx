import { useState } from 'react';
import '../mentoria/Mentoria.css';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

export default function Mentoria() {
  // dados dos slides (reaproveita suas imagens e textos)
  const slides = [
    { src: img1, texto: 'Instrutor Nick' },
    { src: img2, texto: 'Instrutora Clara' },
    { src: img3, texto: 'Instrutor LeeJg' },
    { src: img4, texto: 'Instrutor M00h4med' },
  ];

  const [indice, setIndice] = useState(0); // 0-based

  function plusSlides(n) {
    setIndice((prev) => {
      const total = slides.length;
      return (prev + n + total) % total; // loop circular
    });
  }

  function currentSlide(n1Based) {
    setIndice(n1Based - 1); // converte 1-based -> 0-based
  }

  return (
    <div className="container-mentoria">
      <div className="box1">
        {/* wrapper com posicionamento para as setas (equivalente ao slideshow-container) */}
        <div className="slideshow-container">
          <div className="coaches">
            {slides.map((s, i) => {
              const ativo = i === indice;
              return (
                <div
                  key={i}
                  className={`fotos fade`} // usa sua classe + animação (se existir no CSS)
                  style={{ display: ativo ? 'block' : 'none' }}
                >
                  <div className="ordem">
                    {i + 1}/{slides.length}
                  </div>
                  <img src={s.src} alt={`Coach ${i + 1}`} />
                  <div className="texto">{s.texto}</div>
                </div>
              );
            })}
          </div>

          {/* botões prev/next - mantive <a>, mas previno navegação */}
          <a
            href="#"
            className="prev"
            onClick={(e) => {
              e.preventDefault();
              plusSlides(-1);
            }}
          >
            &#10094;
          </a>
          <a
            href="#"
            className="next"
            onClick={(e) => {
              e.preventDefault();
              plusSlides(1);
            }}
          >
            &#10095;
          </a>
        </div>
      </div>

      {/* dots (opcional, igual ao exemplo original) */}
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot${i === indice ? ' active' : ''}`}
            onClick={() => currentSlide(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
