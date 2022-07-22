import Spinner from 'react-bootstrap/Spinner';
import './spinner.scss';

function CustomSpinner(props) {
   return(<div  className="spinner-container my-5">    
    <Spinner animation="grow" variant="primary" role="status" ></Spinner>
    <span className="ml-3 spinner-text">{props.loadingtext}</span>
    </div>
    ) 
}

export default CustomSpinner;