import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Livros from "./pages/Livros/Livros";
import DetalhesLivro from "./pages/DetalhesLivro/DetalhesLivro"
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/livro-descricao/:id" element={<DetalhesLivro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas
