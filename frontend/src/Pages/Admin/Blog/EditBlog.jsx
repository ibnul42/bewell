import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog, getSingleBlog, reset } from '../../../features/blog/blogSlice'
import { useNavigate, useParams } from 'react-router-dom'
import RenderText from '../../../components/RenderText'
import { toast } from 'react-toastify'

// Configure the toolbar options
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // Text style options
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // Lists
    // ['link', 'image', 'video'],                      // Insert options
    // ['clean'],                                       // Remove formatting
]

const EditBlog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params

    const preset_key = import.meta.env.VITE_PRESET_KEY
    const cloud_name = import.meta.env.VITE_CLOUD_NAME

    const [initial, setInitial] = useState(true)
    const [image, setImage] = useState()
    const [file, setFile] = useState()
    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState({
        title: '',
        description: '',
    })

    const { title, description } = inputValue

    const { isSingleBlog, blog, isError, message, isBlogEdited } = useSelector((state) => state.blog)


    useEffect(() => {
        if (initial) {
            setInitial(false)
            dispatch(getSingleBlog(id))
        } else if (isSingleBlog) {
            setInputValue((prev) => ({
                ...prev,
                title: blog.title
            }))
            setValue(blog.description)
            setImage(blog.source)
            setFile(blog.source)
            dispatch(reset())
        } else if (isError) {
            toast.error(message)
            dispatch(reset())
        } else if (isBlogEdited) {
            toast.success(message)
            dispatch(reset())
            navigate('/admin/blog')
        }
    }, [dispatch, isSingleBlog, id, navigate, isBlogEdited, blog, isError, message, initial])

    const handleFile = (e) => {
        setFile(e.target.files[0])
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage))
    }
    const uploadHandler = () => {
        if (!title || !value || !file) {
            toast.error('Please fill all the fields')
        } else if (typeof file === 'string') {
            const data = {
                title,
                description: value,
                source: file
            }
            dispatch(editBlog({ id: blog._id, data }))
        } else {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', preset_key)
            axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
                .then(res => {
                    const data = {
                        title,
                        description: value,
                        source: res.data.secure_url
                    }
                    dispatch(editBlog({ id: blog._id, data }))
                })
                .catch(err => {
                    toast.error(err.response.data.error.message)
                })
        }
    }
    return (
        <div className='max-w-7xl mx-auto px-2 min-h-[70vh] flex flex-col items-center gap-3 py-5'>
            <h1 className="text-2xl font-semibold leading-7 text-gray-900 text-center">Create Blog</h1>
            <div className="w-96">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setInputValue((prev) => ({ ...prev, title: e.target.value }))}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Blog Title"
                    />
                </div>
            </div>
            <div className="w-96">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <ReactQuill theme="snow" value={value} onChange={setValue} modules={{
                        toolbar: toolbarOptions,
                    }} className="w-full h-60" />
                </div>
            </div>
            <div className="w-96 z-50">
                <div className="flex justify-between items-center">
                    <input type="file" name="image" id="image" onChange={handleFile} />
                    {/* <button onClick={uploadHandler} className='border py-1 px-5 rounded cursor-pointer'>SUBMIT</button> */}
                </div>
                {image && <img src={image} alt="Uploaded" className='aspect-video object-cover object-center' style={{ marginTop: '20px', maxWidth: '100%' }} />}
            </div>
            <div className="w-96 z-50 flex justify-center">
                <button onClick={uploadHandler} className='border py-2 px-5 rounded cursor-pointer bg-[#A6CBC5] hover:bg-[#84BFB5] transition-all text-white'>SUBMIT</button>
            </div>
        </div>
    )
}

export default EditBlog