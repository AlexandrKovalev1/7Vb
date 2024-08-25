import { Provider } from 'react-redux'

import { Router } from '@/app/router/router-config'

import { store } from './app/store/store'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
