import { Link } from "react-router-dom";
import macaco from './../../assets/images (2).jpeg';
import '../Contato/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Produto() {
    return (
        <div className="corpo">
            <h1>Bem-Vinda à página Produto</h1>
            <Link to='/contato' className="m-2 btn btn-primary">Contato</Link>
            <Link to='/Sobre' className="m-2 btn btn-primary">Sobre</Link>
            <Link to='/' className="m-2 btn btn-primary">Home</Link>

            <div>
                <img src={macaco} />
            </div>
        </div>
    );
}

export default Produto;