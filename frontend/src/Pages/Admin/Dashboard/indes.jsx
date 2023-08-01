import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../../features/admin/adminSlice'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../../features/auth/authSlice'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { contacts } = useSelector((state) => state.admin)
    const { user, isLoggedOut, isLoggedIn } = useSelector((state) => state.admin)

    const userData = localStorage.getItem('user')

    useEffect(() => {
        // if (isLoggedOut) {
        //     toast.success('Logged out successfully')
        //     dispatch(reset())
        //     navigate('/login')
        // } 
        if (!userData) {
            navigate('/login')
        }
        if (!contacts) dispatch(getContacts())
    }, [contacts, dispatch, userData, navigate])

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div className='flex gap-2 min-h-[70vh]'>
            <div className="w-64 flex flex-col justify-between bg-[rgba(132,191,181,0.6)]">
                <button className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Home</button>
                <button onClick={logoutHandler} className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Logout</button>
            </div>
            <div className="flex-1">
                <div>
                    <div className="flex justify-between">
                        <h1 className="px-3 py-2 text-center text-xl font-semibold">
                            Contacts
                        </h1>
                        {/* <Link
                            to="/admin/home/create-timeline"
                            className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 capitalize m-2"
                        onClick={onEventCreate}
                        >
                            Create
                        </Link> */}
                    </div>
                    <table
                        className="table-auto border my-5 border-primary mx-2 px-2"
                        style={{
                            width: "-webkit-fill-available",
                        }}
                    >
                        <thead className="border-b">
                            <tr className="bg-primary grid grid-cols-12">
                                <th className="px-4 py-2 col-span-3 border-r">
                                    Name
                                </th>
                                <th className="px-4 py-2 col-span-3 border-r">
                                    Email
                                </th>
                                <th className="px-4 py-2 col-span-4 border-r">
                                    Phone
                                </th>
                                <th className="px-4 py-2 col-span-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts && contacts.length > 0 ? (
                                contacts.map((item, index) => (
                                    <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                        <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center">
                                            <p>{item.firstName} {item.lastName}</p>
                                        </td>
                                        <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                            {item.email}
                                        </td>
                                        <td className="px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                            {item.phone}
                                        </td>
                                        <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                            <a
                                                className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                href={`mailto:${item.email}`}>Mail</a>
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
        </div>
    )
}

export default Dashboard