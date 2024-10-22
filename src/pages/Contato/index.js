import { Link } from "react-router-dom";
import '../Contato/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div className="corpo">
            <h1>Bem-Vinda à página Contato</h1>
            <Link to='/Produto' className="m-2 btn btn-primary">Produto</Link>
            <Link to='/sobre' className="m-2 btn btn-primary">Sobre</Link>
            <Link to='/' className="m-2 btn btn-primary">Home</Link>
        </div>
    );
}

export default Contato;