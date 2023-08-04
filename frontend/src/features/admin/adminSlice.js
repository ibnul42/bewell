import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService'
// get user from local storage
// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isContactAdded: false,
    isStepEdited: false,
    step: null,
    steps: null,
    contacts: null,
    msg: ''
}

// get steps
export const getSteps = createAsyncThunk('admin/steps', async (_, thunkAPI) => {
    try {
        return await adminService.getSteps()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getSingleStep = createAsyncThunk('admin/step', async (id, thunkAPI) => {
    try {
        return await adminService.getStep(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateStep = createAsyncThunk('admin/step-update', async (data, thunkAPI) => {
    try {
        return await adminService.updateStep(data)
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

export const getContacts = createAsyncThunk('admin/contact-get', async (_, thunkAPI) => {
    try {
        return await adminService.getContacts()
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
            state.isStepEdited = false
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
                state.step = null
            })
            .addCase(getSteps.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.msg = action.payload
                state.steps = null
            })
            .addCase(getSingleStep.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSingleStep.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.step = action.payload
                state.steps = null
            })
            .addCase(getSingleStep.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.msg = action.payload
                state.step = null
            })
            .addCase(updateStep.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateStep.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isStepEdited = true
                state.msg = action.payload.message
            })
            .addCase(updateStep.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.msg = action.payload
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
            .addCase(getContacts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.contacts = action.payload
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.contacts = []
                state.msg = action.payload
            })
    }
})

export const { reset } = adminSlice.actions

export default adminSlice.reducer