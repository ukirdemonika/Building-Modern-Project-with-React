npm create vite@latest
npm install @reduxjs/toolkit react-redux

add extension "redux devtool" in chrome

State Management:
    - redux
    -recoil
        -npm install recoil
    - mobx
        -npm install mobx mobx-react-lite

Handling SideEffects - Redux Thunk
Notes:
    1. redux- Manging application states
    2. Thunk manages - side effects while calling api from backend server to fetch the data.
    3. selectors: Abstract away thre structure of the state. memoization- improve the performanace of the application, avoid re-rendering. component only get those data that they want , not find in store.
    4. Styale compoennt is used to separate the styale and styale login from our components.
       1. npm install styled-components

Testing:
1. run the test:
2.  node todoSlices.jsx