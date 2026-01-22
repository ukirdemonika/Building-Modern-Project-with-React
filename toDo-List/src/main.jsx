import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import todoSlices from './todoSlices.jsx'
// import {RecoilRoot} from 'recoil'
const store = configureStore({
  reducer:{
    todos:todoSlices,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <RecoilRoot> */}
      <App />
      {/* </RecoilRoot> */}
    </Provider>
  </StrictMode>
)
