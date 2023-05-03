import { combineReducers, configureStore } from "@reduxjs/toolkit";
import _slice from "./slices/_slice";

const rootReducer = combineReducers({
  data: _slice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
