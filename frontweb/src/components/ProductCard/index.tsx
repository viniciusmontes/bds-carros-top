import CardImage from 'assets/images/car-card.png';
import ButtonIcon from 'components/ButtonIcon';

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
        <ButtonIcon text='COMPRAR'/>
      </div>
    </div>
  );
};

export default ProductCard;
