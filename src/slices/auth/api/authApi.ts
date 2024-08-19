export type AuthData = {
  login: string
  password: string
}

export type LoginParams = {
  id: string
  isAdmin?: boolean
}

export const authApi = {
  getIsAuth: (auth: AuthData) => {
    return new Promise<LoginParams>((resolve, reject) => {
      if (auth.login === 'admin' && auth.password === 'admin') {
        return resolve({
          id: '164850',
          isAdmin: true,
        })
      } else if (auth.login === 'user' && auth.password === 'user') {
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
}
