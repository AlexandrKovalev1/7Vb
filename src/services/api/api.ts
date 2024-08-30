import axios from 'axios'

const getToken = () => {
  let token = null
  const localStorage = window.localStorage.getItem('token')

  if (localStorage) {
    token = localStorage
  }

  return token
}

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
  withCredentials: true,
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`

  return config
})
