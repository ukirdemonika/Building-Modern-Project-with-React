import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import todoSlices from './todoSlices.jsx'
import TodosStore from './todos-mobx.jsx'

const store = configureStore({
  reducer:{
    todos:todoSlices,
  }
})

const TodosStoreContext = createContext(TodosStore)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TodosStoreContext.Provider value={TodosStore}>
        <App />
      </TodosStoreContext.Provider>
    </Provider>
  </StrictMode>
)
