
import './styles.css';

type Props = {
    text : string
}

const ButtonIcon = ({text} : Props) => {
    return (
        <div className="btn-icon-container">
            <button className="btn btn-secundary">
                <h6>{text}</h6>
            </button>
        </div>
        
    )
}

export default ButtonIcon;