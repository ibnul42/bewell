import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService'
// get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isContactAdded: false,
    steps: null,
    msg: ''
}

// get steps
export const getSteps = createAsyncThunk('admin/steps', async (user, thunkAPI) => {
    try {
        return await adminService.getSteps()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const addContact = createAsyncThunk('admin/contact-add', async (data, thunkAPI) => {
    try {
        return await adminService.addContact(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.isContactAdded = false
            state.msg = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSteps.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getSteps.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.steps = action.payload
        })
        .addCase(getSteps.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.msg = action.payload
            state.steps = null
        })
        .addCase(addContact.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isContactAdded = true
            state.msg = action.payload.message
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.msg = action.payload
        })
    }
})

export const { reset } = adminSlice.actions

export default adminSlice.reducer