import { Link } from "react-router-dom";
import '../Contato/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

    function Home() {
        return (
            <div className="corpo">
                <h1>Bem-Vinda à página Home</h1>
                <Link to='/sobre' className="m-2 btn btn-primary">Sobre</Link>
                <Link to='/contato' className="m-2 btn btn-primary">contato</Link>
                <Link to='/Produto' className="m-2 btn btn-primary">Produto</Link>
            </div>
        );
    }

export default Home;