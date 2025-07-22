import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/auth/authSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { deleteBlog, getBlog, reset } from '../../../features/blog/blogSlice'
import RenderText from '../../../components/RenderText'
import { toast } from 'react-toastify'

const bloglist = [
    {
        title: 'Blog 01',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis asperiores ipsam tempora ipsum quidem nihil fuga cum eum minima, nostrum voluptatibus autem nisi incidunt inventore odio quibusdam. Tempora, expedita non iste, obcaecati est hic, soluta doloremque magni debitis corrupti iusto illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis asperiores ipsam tempora ipsum quidem nihil fuga cum eum minima, nostrum voluptatibus autem nisi incidunt inventore odio quibusdam. Tempora, expedita non iste, obcaecati est hic, soluta doloremque magni debitis corrupti iusto illo!',
        source: 'https://res.cloudinary.com/ibnulashir/image/upload/v1692353914/vstbxbnjqdft3igojytc.jpg'
    }
]

const Blog = () => {
    const dispatch = useDispatch()

    const [initial, setInitial] = useState(true)

    const { blogs, isBlogDeleted, isError, message } = useSelector((state) => state.blog)

    useEffect(() => {
        if (initial) {
            setInitial(false)
            dispatch(getBlog())
        } else if (isBlogDeleted) {
            toast.success(message)
            dispatch(reset())
            dispatch(getBlog())
        } else if (isError) {
            dispatch(reset())
            toast.error(message)
        }
    }, [initial, dispatch, isBlogDeleted, isError, message])

    const logoutHandler = () => {
        dispatch(logout())
    }

    const deleteBlogHandler = (item) => {
        if (window.confirm('Are you sure you want to delete')) {
            dispatch(deleteBlog(item._id))
        }
    }


    return (
        <div className='flex gap-2 min-h-[70vh]'>
            <div className="w-64 flex flex-col justify-between text-center bg-[rgba(132,191,181,0.6)]">
                <div className="flex flex-col justify-between">
                    <Link to='/admin/dashboard' className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Home</Link>
                    <Link to='/admin/blog' className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-orange-500'>Blog</Link>
                    <Link to='/admin/settings' className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Settings</Link>
                </div>
                <Link onClick={logoutHandler} className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Logout</Link>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center pr-3 py-2">
                    <p className="px-3 py-2 text-center text-xl font-semibold capitalize">
                        Buzz List
                    </p>
                    <Link to="/admin/blog/create" className='py-2 px-6 rounded-full border hover:bg-slate-100'>Create</Link>
                </div>
                <table
                    className="table-auto border my-5 border-primary mx-2 px-2"
                    style={{
                        width: "-webkit-fill-available",
                    }}
                >
                    <thead className="border-b">
                        <tr className="bg-primary grid grid-cols-12">
                            <th className="px-4 py-2 col-span-2 border-r">
                                Source
                            </th>
                            <th className="px-4 py-2 col-span-2 border-r">
                                Title
                            </th>
                            <th className="px-4 py-2 col-span-6 border-r">
                                Description
                            </th>
                            <th className="px-4 py-2 col-span-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs && blogs.length > 0 ? (
                            blogs.map((item, index) => (
                                <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                    <td className="px-4 py-2 col-span-2 border-r border-primary flex items-center justify-center">
                                        <img src={item.source} loading='lazy' alt={item.title} className='rounded max-h-24' />
                                    </td>
                                    <td className="px-4 py-2 col-span-2 border-r border-primary flex items-center justify-center">
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="px-0 py-2 col-span-6 border-r border-primary flex items-center justify-center">
                                        <p className='px-4 h-24 overflow-x-hidden overflow-y-auto w-full'>{<RenderText htmlContent={item.description} />}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                        <Link to={`/admin/blog/${item._id}`}
                                            className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                        ><AiFillEdit /></Link>
                                        <button
                                            onClick={() => deleteBlogHandler(item)}
                                            className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                        ><MdDelete /></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="odd:bg-gray-100 grid grid-cols-3">
                                <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blog