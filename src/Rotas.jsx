import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import Livros from "./pages/Livros/Livros";
import LivroDescricao from "./pages/LivroDescricao/LivroDescricao";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/livro-descricao/:id" element={<LivroDescricao />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas
