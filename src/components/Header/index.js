import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../components/Header/style.css';
function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-light  navbar-transparente">
                <div class="container">

                    <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
                        <i class="fas fa-bars text-white"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="nav-principal">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"><a class="nav-link"><Link to='/'>Home</Link></a></li>
                            <li class="nav-item divisor"></li>
                            <li class="nav-item"><a class="nav-link"><Link to='/sobre'>Sobre</Link></a></li>
                            <li class="nav-item"><a class="nav-link"><Link to='/contato'>Contato</Link></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><Link to='/Produto'>Produto</Link></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;