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

export type LoginResponse = {
  status: 'error' | 'success'
  token: string
}

export type MeResponse = {
  accountLevel: 'Admin' | 'Guest' | 'User'
  authIPs: string
  balance: string
  email: string
  emailConfirmed: boolean
  id: string
  restrictions: string
  username: string
}

export const authApi = {
  // getIsAuth: (auth: AuthData) => {
  //   return new Promise<LoginParams>((resolve, reject) => {
  //     if (auth.username === 'admin' && auth.password === 'admin') {
  //       return resolve({
  //         id: '164850',
  //         isAdmin: true,
  //       })
  //     } else if (auth.username === 'user' && auth.password === 'user') {
  //       return resolve({
  //         id: '777',
  //       })
  //     } else {
  //       return reject('Uncorrect email or password')
  //     }
  //   })
  logOut: () => {
    return Promise.resolve()
  },
  // },
  login: (params: AuthData) => {
    return instance.post<LoginResponse>('users/login', params)
  },
  me: () => {
    return instance.get<MeResponse>('users/me')
  },
  register: (data: SignUpValues) => {
    return instance.post<RegisterResponse>('users/register', data)
  },
}
