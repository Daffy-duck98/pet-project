import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';
import todoSlice from '../features/todo/todoSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
