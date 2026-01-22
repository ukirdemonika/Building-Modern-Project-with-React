import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import todoSlices from './todoSlices.jsx'
const store = configureStore({
  reducer:{
    todos:todoSlices,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
