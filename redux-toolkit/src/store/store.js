import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counter-reducer';
import { apiSlice } from '../slice/api-reducer';


export const store = configureStore({
  reducer: {
    // 방법1
    counter: counterReducer,
    // 방법2
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
})

console.log(apiSlice.middleware)

