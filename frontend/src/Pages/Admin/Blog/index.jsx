import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/auth/authSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const bloglist = [
    {
        title: 'Blog 01',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis asperiores ipsam tempora ipsum quidem nihil fuga cum eum minima, nostrum voluptatibus autem nisi incidunt inventore odio quibusdam. Tempora, expedita non iste, obcaecati est hic, soluta doloremque magni debitis corrupti iusto illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis asperiores ipsam tempora ipsum quidem nihil fuga cum eum minima, nostrum voluptatibus autem nisi incidunt inventore odio quibusdam. Tempora, expedita non iste, obcaecati est hic, soluta doloremque magni debitis corrupti iusto illo!',
        source: 'https://res.cloudinary.com/ibnulashir/image/upload/v1692353914/vstbxbnjqdft3igojytc.jpg'
    }
]

const Blog = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <div className='flex gap-2 min-h-[70vh]'>
            <div className="w-64 flex flex-col justify-between text-center bg-[rgba(132,191,181,0.6)]">
                <div className="flex flex-col justify-between">
                    <Link to='/admin/dashboard' className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Home</Link>
                    <Link to='/admin/blog' className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-orange-500'>Blog</Link>
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
                {/* <div className="grid grid-cols-2 gap-10 py-3 px-5 border border-[#90C3BB] rounded-md my-2 mx-2 shadow-[0_4px_3px_3px_rgba(0,0,0,0.1)]">
                    <div className="border-4 border-[#90C3BB] rounded-md overflow-hidden shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)]">
                        <img src="https://res.cloudinary.com/ibnulashir/image/upload/v1692353914/vstbxbnjqdft3igojytc.jpg" alt="name" className='w-full aspect-video object-cover object-center' />
                    </div>
                    <div className="space-y-2 h-auto flex flex-col justify-between">
                        <p className='font-bold text-xs'>JUNE 20, 2023</p>
                        <p className='text-2xl font-bold'>Recognizing and rewarding employees in a challenging economic environment</p>
                        <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis asperiores ipsam tempora ipsum quidem nihil fuga cum eum minima, nostrum voluptatibus autem nisi incidunt inventore odio quibusdam. Tempora, expedita non iste, obcaecati est hic, soluta doloremque magni debitis corrupti iusto illo!</p>
                        <p className='font-bold'>by Beewell</p>
                    </div>
                </div> */}
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
                        {bloglist && bloglist.length > 0 ? (
                            bloglist.map((item, index) => (
                                <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                    <td className="px-4 py-2 col-span-2 border-r border-primary flex items-center justify-center">
                                        <img src={item.source} alt={item.title} className='rounded' />
                                    </td>
                                    <td className="px-4 py-2 col-span-2 border-r border-primary flex items-center justify-center">
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-6 border-r border-primary flex items-center justify-center">
                                        <p className='h-24 overflow-y-auto'>{item.description}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                        <Link to={`/admin/blog/${item.title}`}
                                            className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                        ><AiFillEdit /></Link>
                                        <button
                                            // onClick={() => deleteFaqGeneral(item)}
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