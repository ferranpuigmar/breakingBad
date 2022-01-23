import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './features/charactersSlice';

const rootreducer = combineReducers({
  characters: charactersReducer
});

export type RootState = ReturnType<typeof rootreducer>;

export default rootreducer;
