import HomeImage from 'assets/images/home-image.png';
import ButtonIcon from 'components/ButtonIcon';

import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-image-container">
          <img src={HomeImage} alt="" />
        </div>
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
      <div className="home-card-button">
        <div className="home-card-button-content">
          <Link to="/catalog">
            <ButtonIcon text="VER CATÁLOGO" />
          </Link>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
