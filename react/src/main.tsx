import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './store/store.ts'
import { Provider } from 'react-redux'

import App from './App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>,
)
