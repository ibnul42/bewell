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
    isFaqDeleted: false,
    isFaqCreated: false,
    isFaqEdited: false,
    isSingleFaq: false,
    isGeneralFaq: false,
    isSingleGeneralFaq: false,
    isGeneralFaqCreated: false,
    isGeneralFaqEdited: false,
    isGeneralFaqDeleted: false,
    isService: false,
    isSingleService: false,
    isServiceEdited: false,
    step: null,
    steps: null,
    contacts: null,
    weightLossFaq: null,
    weightLossFaqs: null,
    generalFaq: null,
    generalFaqs: null,
    service: null,
    services: null,
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

export const getWeightLossFaq = createAsyncThunk('admin/weight-loss-faq-get', async (_, thunkAPI) => {
    try {
        return await adminService.getWeightLossFaq()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const singleWeightLossFaq = createAsyncThunk('admin/weight-loss-faq-single', async (id, thunkAPI) => {
    try {
        return await adminService.singleWeightLossFaq(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteWeightLossFaq = createAsyncThunk('admin/weight-loss-faq-delete', async (id, thunkAPI) => {
    try {
        return await adminService.deleteWeightLossFaq(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const createWeightLossFaq = createAsyncThunk('admin/weight-loss-faq-create', async (data, thunkAPI) => {
    try {
        return await adminService.createWeightLossFaq(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const editWeightLossFaq = createAsyncThunk('admin/weight-loss-faq-edit', async (data, thunkAPI) => {
    try {
        return await adminService.editWeightLossFaq(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getGeneralFaq = createAsyncThunk('admin/general-faq-get', async (_, thunkAPI) => {
    try {
        return await adminService.getGeneralFaq()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const singleGeneralFaq = createAsyncThunk('admin/general-faq-get-single', async (id, thunkAPI) => {
    try {
        return await adminService.singleGeneralFaq(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const editGeneralFaq = createAsyncThunk('admin/general-faq-get-edit', async (data, thunkAPI) => {
    try {
        return await adminService.editGeneralFaq(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteGeneralFaq = createAsyncThunk('admin/general-faq-get-delete', async (id, thunkAPI) => {
    try {
        return await adminService.deleteGeneralFaq(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const createGeneralsFaq = createAsyncThunk('admin/general-faq-get-create', async (data, thunkAPI) => {
    try {
        return await adminService.createGeneralFaq(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getServices = createAsyncThunk('admin/service-get', async (_, thunkAPI) => {
    try {
        return await adminService.getServices()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const singleService = createAsyncThunk('admin/service-single', async (id, thunkAPI) => {
    try {
        return await adminService.singleService(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const editService = createAsyncThunk('admin/service-edit', async (data, thunkAPI) => {
    try {
        return await adminService.editService(data)
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
            state.isFaqDeleted = false
            state.isFaqCreated = false
            state.isFaqEdited = false
            state.isSingleFaq = false
            state.isGeneralFaq = false
            state.isSingleGeneralFaq = false
            state.isGeneralFaqCreated = false
            state.isGeneralFaqEdited = false
            state.isGeneralFaqDeleted = false
            state.isService = false
            state.isSingleService = false
            state.isServiceEdited = false
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
            })
            .addCase(getSingleStep.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSingleStep.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.step = action.payload
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
                state.steps = null
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
            .addCase(getWeightLossFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWeightLossFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.weightLossFaqs = action.payload
            })
            .addCase(getWeightLossFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.weightLossFaqs = []
                state.msg = action.payload
            })
            .addCase(singleWeightLossFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(singleWeightLossFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSingleFaq = true
                state.isSuccess = true
                state.weightLossFaq = action.payload
            })
            .addCase(singleWeightLossFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.weightLossFaq = null
                state.msg = action.payload
            })
            .addCase(deleteWeightLossFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteWeightLossFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isFaqDeleted = true
                state.msg = action.payload.message
            })
            .addCase(deleteWeightLossFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(createWeightLossFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createWeightLossFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isFaqCreated = true
                state.msg = action.payload.message
            })
            .addCase(createWeightLossFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(editWeightLossFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editWeightLossFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isFaqEdited = true
                state.msg = action.payload.message
            })
            .addCase(editWeightLossFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(getGeneralFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGeneralFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.generalFaqs = action.payload
            })
            .addCase(getGeneralFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.generalFaqs = []
                state.msg = action.payload
            })
            .addCase(singleGeneralFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(singleGeneralFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSingleGeneralFaq = true
                state.isSuccess = true
                state.generalFaq = action.payload
            })
            .addCase(singleGeneralFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.generalFaq = null
                state.msg = action.payload
            })
            .addCase(editGeneralFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editGeneralFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isGeneralFaqEdited = true
                state.msg = action.payload.message
            })
            .addCase(editGeneralFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(deleteGeneralFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGeneralFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isGeneralFaqDeleted = true
                state.msg = action.payload.message
            })
            .addCase(deleteGeneralFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(createGeneralsFaq.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGeneralsFaq.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isGeneralFaqCreated = true
                state.msg = action.payload.message
            })
            .addCase(createGeneralsFaq.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
            .addCase(getServices.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.services = action.payload
            })
            .addCase(getServices.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.services = []
                state.msg = action.payload
            })
            .addCase(singleService.pending, (state) => {
                state.isLoading = true
            })
            .addCase(singleService.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSingleService = true
                state.isSuccess = true
                state.service = action.payload
            })
            .addCase(singleService.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.service = {}
                state.msg = action.payload
            })
            .addCase(editService.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editService.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isServiceEdited = true
                state.msg = action.payload.message
            })
            .addCase(editService.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.msg = action.payload
            })
    }
})

export const { reset } = adminSlice.actions

export default adminSlice.reducer