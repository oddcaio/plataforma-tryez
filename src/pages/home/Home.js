import '../home/Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className='content-box1'>
        <h1>Do seu setup para o sucesso.</h1>
        <p>Apoie seus criadores favoritos.</p>
        <p>Aprenda com os <span className="orange">melhores</span>.</p>
        <p>Jogue junto.</p>
        <p>Desbloqueie seu <span className="orange">potencial</span>.</p>
        <p>Trabalhe com o que ama.</p>
        <p>Transforme seu <span className="orange">conhecimento</span> em <span className="green">renda</span>.</p>
        <p>Acredite.</p>
      </div>
      <div className='content-box2'>
        <h2>Comece hoje</h2>
        <p>Cadastre-se com uma das contas:</p>
        <div className="social-login">
          <button className="social-btn apple-btn">Apple</button>
          <button className="social-btn google-btn">Google</button>
        </div>
        <p>ou</p>
        <form className="register-form">
          <input type="text" placeholder="Digite seu nome completo" required />
          <input type="email" placeholder="Digite seu e-mail principal" required />
          <input type="password" placeholder="Digite uma senha" required />
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Ao me cadastrar, declaro que sou maior de idade, li e concordo com os <a href="/termos">Termos</a> e as <a href="/politicas">políticas</a> da plataforma</label>
          </div>
          <button type="submit" className="submit-btn">Cadastre-se agora</button>
        </form>
      </div>
    </div>
  );
}
