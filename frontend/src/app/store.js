import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import clientReducer from "../features/client/clientSlice"
import eventReducer from "../features/event/eventSlice"
import homeReducer from "../features/home/homeSlice"
import adminReducer from "../features/admin/adminSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    // client: clientReducer,
    // home: homeReducer,
  },
})
