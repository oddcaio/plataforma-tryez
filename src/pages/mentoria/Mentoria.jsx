import { useState } from 'react'

import man2 from '../../assets/man2.png'
import man3 from '../../assets/man3.png'
import woman from '../../assets/woman.png'
import '../mentoria/Mentoria.css'

const coaches = [
    { src: man2, nome: 'mohhamed', desc: ['ponto 1', 'ponto 2', 'ponto 3'] },
    { src: man3, nome: 'alex', desc: ['ponto 1', 'ponto 2', 'ponto 3'] },
    { src: woman, nome: 'sofia', desc: ['ponto 1', 'ponto 2', 'ponto 3'] },
]

export default function Mentoria() {
    const [i, setI] = useState(0)
    const prev = () => setI((i - 1 + coaches.length) % coaches.length)
    const next = () => setI((i + 1) % coaches.length)

    return (
        <div className="mentoria">
            <div className="box1">
                <div className="carousel">
                    <button className="arrow left" onClick={prev}>◀</button>

                    <div className="coach-card">
                        <div className="stack">
                            {coaches.map((c, idx) => {
                                const n = coaches.length
                                const pos = (idx - i + n) % n

                                const blurPreset = [0, 2, 2];
                                const scalePreset = [1, 1, 1];
                                const shiftPreset = [0, -30, -60];

                                const blur = blurPreset[pos] ?? (5 * ((n - 1 - pos) / (n - 1)))
                                const scale = scalePreset[pos] ?? (0.62 + 0.38 * ((n - 1 - pos) / (n - 1)))
                                const shift = shiftPreset[pos] ?? (-50 * pos)

                                return (
                                    <img
                                        key={idx}
                                        src={c.src}
                                        alt={c.nome}
                                        className={`photo ${pos === 0 ? 'active' : 'behind'}`}
                                        style={{
                                            transform: `translateX(${shift}px) scale(${scale})`,
                                            filter: `blur(${blur}px)`,
                                            zIndex: n - pos,
                                            height: '437.2px'
                                        }}
                                    />
                                )
                            })}
                        </div>


                        <div className="coach-info">
                            <h3>{coaches[i].nome}</h3>
                            <ul>{coaches[i].desc.map((d, k) => <li key={k}>{d}</li>)}</ul>
                        </div>
                    </div>

                    <button className="arrow right" onClick={next}>▶</button>
                </div>
            </div>

            <div className="box2">
                <input type="text" placeholder="pesquise" className="search" />
                <div className="ordenar">
                    <label>ordenar por:</label>
                    <select>
                        <option>mais recente</option>
                        <option>mais popular</option>
                    </select>
                </div>
            </div>
        </div>
    )
}