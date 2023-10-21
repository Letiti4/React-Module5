import React from 'react'
import '../BarraPesquisa/BarraPesquisa.styles.css'

const BarraPesquisa = ({ pesquisa, setPesquisa }) => {
    return (
        <div className='boxPesquisa'>
            <input className='pesquisa' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder='Pesquise um livro'></input>
            <button className=''>Pesquisar</button>
        </div>
    )
}

export default BarraPesquisa