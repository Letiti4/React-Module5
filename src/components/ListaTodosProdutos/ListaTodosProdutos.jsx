import React from 'react'
import CardLivro from '../CardLivro/CardLivro'
import Style from './listaTodosProdutos.styles.css'

const ListaTodosProdutos = () => {
  return (
    <section className='container-lista-todos-produtos'>
        <div className='container'>
            <div className='container-grid'>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>

                <div className='produto-grid'>
                    <CardLivro/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ListaTodosProdutos