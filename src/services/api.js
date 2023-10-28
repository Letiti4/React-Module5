import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
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
    const resposta = await api.post('/clientes', body, config)
    return resposta.data
  }
  
  export const loginUsuario = async (email, senha) => {
    try {
      const config = {
        headers: {
          'X-password': senha,
        },
      }
  
      const resposta = await api.post('/login', { email }, config)
  
      return resposta.data
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          success: error.response.data.success,
        }
      } else {
        return {
          message: 'erro inesperado',
        }
      }
    }
  }

  export const deleteUsuario = async (id, senha) => {
    try {
      const config = {
        headers: {
          'X-password': senha,
        },
      }
  
      const resposta = await api.delete(`/clientes/${id}`, config)
  
      return resposta.data
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          success: error.response.data.success,
        }
      } else {
        return {
          message: 'erro inesperado',
        }
      }
    }
  }