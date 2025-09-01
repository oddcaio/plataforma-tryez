import '../mentoria/Mentoria.css';

export default function Mentoria() {
    return (
        <div className="mentoria">
            <div className="box1">
                <div className="carousel">
                    <button className="arrow left">◀</button>
                    <div className="coach-card">
                        <img src="/coach1.png" alt="coach" />
                        <div className="coach-info">
                            <h3>descrição</h3>
                            <ul>
                                <li>descrição</li>
                                <li>descrição</li>
                                <li>descrição</li>
                                <li>descrição</li>
                                <li>descrição</li>
                            </ul>
                        </div>
                    </div>
                    <button className="arrow right">▶</button>
                </div>
            </div>

            <div className="box2">
                <input type="text" placeholder="Pesquise" className="search" />
                <div className="ordenar">
                    <label>ordenar por:</label>
                    <select>
                        <option>mais recente</option>
                        <option>mais popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
}