import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebar/sidebar.slice'
import stateReducer from './state/state.slice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    state: stateReducer,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
})