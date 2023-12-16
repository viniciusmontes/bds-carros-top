import Navbar from 'components/Navbar';
import HomeImage from 'assets/images/home-image.png';
import ButtonIcon from 'components/ButtonIcon';

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
            <ButtonIcon text='VER CATÁLOGO'/>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
