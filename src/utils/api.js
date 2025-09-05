import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const signout = async()=>{
    return api.post('/users/sign_out')
}

export const register = async(email, password, nickname) =>{
    return api.post('/users/sign_up',{
        email,
        password,
        nickname,
    })
}

export const login = async(email, password) =>{
    return api.post('/users/sign_in',{
        email,
        password,   
    })
}

api.interceptors.request.use((config) => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  )
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

