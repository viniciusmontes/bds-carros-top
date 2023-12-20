import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const ProductFilter = () => {
  return (
    <>
      <div className="product-filter-container base-card">
        <div className="product-filter-content">
          <input type="text" placeholder="Digite sua busca" />
          <ButtonIcon text="BUSCAR" />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
