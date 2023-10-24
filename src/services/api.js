import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const getLivros = async () => {
    const resposta = await api.get('/livros')
    return resposta.data
  }

  export const postUsuario = async (body, senha) => {
    const config = {
      headers: {
        'X-password': senha,
      },
    }
    const resposta = await api.post('/usuarios', body, config)
    return resposta.data
  }