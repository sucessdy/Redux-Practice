import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers/Index"

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
