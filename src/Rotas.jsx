import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Livros from "./pages/Livros/Livros";
// import DetalhesLivro from "./pages/DetalhesLivro/DetalhesLivro"
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import DetalhesPequenoPrincipe from "./pages/DetalhesLivro/DetalhesPequenoPrincipe";
import DetalhesDomQuixote from "./pages/DetalhesLivro/DomQuixote";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/livros" element={<Livros />} />
                
                {/* testes p apresentação */}
                <Route path="/livro-descricao/2" element={<DetalhesDomQuixote/>} />
                <Route path="/livro-descricao/12" element={<DetalhesPequenoPrincipe/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas
