import { Link } from "react-router-dom";
import '../Contato/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {

    return (
        <div>

            <div className="corpo">
                <h1>Bem-Vinda à página Sobre</h1>
                <Link to='/Produto' className="m-2 btn btn-primary">Produto</Link>
                <Link to='/contato' className="m-2 btn btn-primary">Contato</Link>
                <Link to='/' className="m-2 btn btn-primary">Home</Link>
            </div>
        </div>
    );
}

export default Sobre;