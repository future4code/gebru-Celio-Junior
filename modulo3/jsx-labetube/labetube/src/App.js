import logo from './logo.svg';
import './App.css';

function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="tela-inteira">
      <header>
        <h1>Labetube</h1>
        <input type="text" placeholder="Busca" />
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-menu-vertical"><a href="#">Início</a></li>
            <li className="botoes-menu-vertical"><a href="#">Em alta</a></li>
            <li className="botoes-menu-vertical"><a href="#">Inscrições</a></li>
            <li className="botoes-menu-vertical"><a href="#">Oridinais</a></li>
            <li className="botoes-menu-vertical"><a href="#">Histórico</a></li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media7" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
            <h4>Título do vídeo</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;