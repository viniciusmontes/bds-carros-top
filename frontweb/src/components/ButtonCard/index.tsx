import './styles.css';

type Props = {
    text : string
}

const ButtonCard = ({text} : Props) => {
  return (
    <div className="btn-card-container">
      <button className="btn btn-secundary">
        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default ButtonCard;
