import { configureStore } from '@reduxjs/toolkit';
// import your reducers here
import authReducer from './features/auth/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // add other reducers here
  },
});

export default store;