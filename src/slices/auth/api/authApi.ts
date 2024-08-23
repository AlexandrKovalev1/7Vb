import { instance } from '@/services/api/api'

export type AuthData = {
  password: string
  username: string
}

export type LoginParams = {
  id: string
  isAdmin?: boolean
}

export type SignUpValues = {
  confirmPassword: string
  email: string
  password: string
  username: string
}
export type RegisterResponse = {
  message: string
  status: 'error' | 'success'
}

export const authApi = {
  getIsAuth: (auth: AuthData) => {
    return new Promise<LoginParams>((resolve, reject) => {
      if (auth.username === 'admin' && auth.password === 'admin') {
        return resolve({
          id: '164850',
          isAdmin: true,
        })
      } else if (auth.username === 'user' && auth.password === 'user') {
        return resolve({
          id: '777',
        })
      } else {
        return reject('Uncorrect email or password')
      }
    })
  },
  logOut: () => {
    return Promise.resolve()
  },
  register: (data: SignUpValues) => {
    return instance.post<RegisterResponse>('users/register', data)
  },
}
