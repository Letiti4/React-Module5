import React from 'react'
import CapaLivro from '../../assets/livro-capa-teste.jpg'
import './livroDescricao.styles.css'

const LivroDescricao = () => {
  return (
    <section className='container-descricao'>
      <div className='container-flex'>
        <div className='container-imagem-livro'>
          <img src={CapaLivro} alt='capa do livro' className='capa-livro'/>
        </div>

        <div className='container-descricao-livro'>
          <h2>Nome do livro</h2>
          <p>Autor do Livro</p>
          <p>Descrição do Livro</p>
          <p>Gênero</p>
          <h3>R$39,90</h3>
          <button>Add ao Carrinho</button>
        </div>
      </div>
    </section>
  )
}

export default LivroDescricao