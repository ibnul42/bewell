import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import blogService from './blogService'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isBlogCreated: false,
    isSingleBlog: false,
    isBlogEdited: false,
    isBlogDeleted: false,
    blogs: null,
    blog: null,
    message: ''
}

// create a new blog
export const createBlog = createAsyncThunk('blog/create', async (data, thunkAPI) => {
    try {
        return await blogService.createBlog(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get blogs
export const getBlog = createAsyncThunk('blog/all-blogs', async (_, thunkAPI) => {
    try {
        return await blogService.getBlogs()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get single blog
export const getSingleBlog = createAsyncThunk('blog/single-blog', async (id, thunkAPI) => {
    try {
        return await blogService.getSingleBlog(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get single blog
export const editBlog = createAsyncThunk('blog/single-blog-edit', async (data, thunkAPI) => {
    try {
        return await blogService.editSingleBlog(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete single blog
export const deleteBlog = createAsyncThunk('blog/single-blog-delete', async (id, thunkAPI) => {
    try {
        return await blogService.deleteBlog(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.isBlogCreated = false
            state.isSingleBlog = false
            state.isBlogEdited = false
            state.isBlogDeleted = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isBlogCreated = true
                state.message = action.payload
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.blogs = []
                state.message = action.payload
            })
            .addCase(getSingleBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSingleBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isSingleBlog = true
                state.blog = action.payload
            })
            .addCase(getSingleBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.blog = {}
                state.message = action.payload
            })
            .addCase(editBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isBlogEdited = true
                state.message = action.payload.message
            })
            .addCase(editBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isBlogDeleted = true
                state.message = action.payload.message
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = blogSlice.actions

export default blogSlice.reducer