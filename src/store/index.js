// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter'
import authSlice from './auth'


// const counterReducer = (state = initialState , action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if(action.type === 'toggle'){
//     return{
//         showCounter: !state.showCounter,
//         counter: state.counter
//     }
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterSlice, 
    auth: authSlice
  }
})


export default store;