import '../mentoria/Mentoria.css';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';

export default function Mentoria() {
  return (
    <div className='container-mentoria'>
      <div className='box1'>
        <div className='coaches'>
          <div className='fotos'>
            <div className="ordem">1/4</div>
            <img src={img1} alt="Coach 1" />
            <div className='texto'>Instrutor Nick</div>
          </div>
          <div className='fotos'>
            <div className="ordem">2/4</div>
            <img src={img2} alt="Coach 2" />
            <div className='texto'>Instrutora Clara</div>
          </div>
          <div className='fotos'>
            <div className="ordem">3/4</div>
            <img src={img3} alt="Coach 3" />
            <div className='texto'>Instrutor LeeJg </div>
          </div>
          <div className='fotos'>
            <div className="ordem">4/4</div>
            <img src={img4} alt="Coach 4" />
            <div className='texto'>Instrutor M00h4med</div>
          </div>
        </div>
      </div>
    </div>
  );
}
