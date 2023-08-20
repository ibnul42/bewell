import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import adminReducer from "../features/admin/adminSlice"
import blogReducer from "../features/blog/blogSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    blog: blogReducer
  },
})
