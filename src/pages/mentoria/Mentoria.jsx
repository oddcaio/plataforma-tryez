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
    // const [i, setI] = useState(0)
    // const prev = () => setI((i - 1 + coaches.length) % coaches.length)
    // const next = () => setI((i + 1) % coaches.length)

    return (

        <div>
         hello world
        </div>
    )
}