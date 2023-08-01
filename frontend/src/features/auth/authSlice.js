import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'
// get user from local storage
// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isLoggedIn: false,
    isLoggedOut: true,
    message: ''
}

// login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// update user
export const update = createAsyncThunk('auth/update', async(userData, thunkAPI) => {
    try {
        return await authService.update(userData)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// logout user
export const logout = createAsyncThunk('auth/logout', async() => {
    authService.logout()
})

// get user
export const getUser = createAsyncThunk('auth/user', async(_, thunkAPI) => {
    try {
        return await authService.getUser()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isLoggedIn = true
                state.isLoggedOut = false
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                 state.isLoading = false
                 state.isError = true
                 state.message = action.payload
                 state.user = null
            })
            .addCase(update.pending, (state) => {
                state.isLoading = true
            })
            .addCase(update.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(update.rejected, (state, action) => {
                 state.isLoading = false
                 state.isError = true
                 state.message = action.payload
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isLoggedIn = true
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                 state.isLoading = false
                 state.isError = true
                 state.message = action.payload
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.isLoggedIn = false
                state.user = null
            })
            .addCase(logout.rejected, (state, action) => {
                 state.isLoading = false
                 state.isError = true
                 state.message = action.payload
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer