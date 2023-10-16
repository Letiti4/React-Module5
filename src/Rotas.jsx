import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
