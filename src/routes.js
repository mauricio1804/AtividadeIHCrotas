import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './components/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

function RoutesApp(){
    return(
        
        <BrowserRouter>

            <div>
                <Header/>
            </div>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='*' element={<Erro/>}/>
                <Route path='/produto' element={<Produto/>}/>

            </Routes>

        </BrowserRouter>
    );
}

export default RoutesApp;