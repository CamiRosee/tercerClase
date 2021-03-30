
import './App.css';

const styles = {
  fontSize : 25,
  color : 'purple',
  textTransform : 'uppercase',
  listStyleType: 'none',
}

function App() {
  return (
    <div>
        <header className="nav-bar">
          <ul class="grid-container" style={styles}>
            <li class="lista1" style={{backgroundColor : 'lavender'}}> <a href="#"> Inicio </a> </li>
            <li class="lista2" style={{backgroundColor : 'lavender'}}> <a href="#"> Productos </a> </li>
            <li class="lista3" style={{backgroundColor : 'lavender'}}> <a href="#"> Sobre Nosotros </a> </li>
            <li class="lista4" style={{backgroundColor : 'lavender'}}> <a href="#"> Contacto </a> </li>
          </ul>

          <div className="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sobre Nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                  </li>
                </ul>
              </div>
             </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
