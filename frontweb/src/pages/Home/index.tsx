import Navbar from 'components/Navbar';
import HomeImage from 'assets/images/home-image.png';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-image-container">
            <img src={HomeImage} alt="" />
          </div>
          <div className="home-card-content">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-card-button">
          <button>VER CATÁLOGO</button>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
