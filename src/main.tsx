import { StrictMode } from 'react'

import App from '@/App'
import ReactDOM from 'react-dom/client'

import '@/styles/index.scss'
import '@fontsource-variable/inter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
