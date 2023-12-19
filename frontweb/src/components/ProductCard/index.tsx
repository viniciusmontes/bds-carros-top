import CardImage from 'assets/images/car-card.png';
import ButtonCard from 'components/ButtonCard';

import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={CardImage} alt="" />
      </div>
      <div className="card-bottom-container">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className="card-bottom-container-button">
          <ButtonCard text='COMPRAR'/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
