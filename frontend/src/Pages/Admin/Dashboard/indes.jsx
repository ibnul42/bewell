import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGeneralFaq, deleteWeightLossFaq, getContacts, getGeneralFaq, getSteps, getWeightLossFaq } from '../../../features/admin/adminSlice'
import { Link, useLocation } from 'react-router-dom'
import { logout, reset } from '../../../features/auth/authSlice'
import { toast } from 'react-toastify'
import { TbMailForward } from 'react-icons/tb'
import { IoMdExpand } from 'react-icons/io'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import Expand from '../../../components/Expand'

const allItems = ['steps', 'contacts', 'weightLoss', 'generalFaq']

const Dashboard = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const [selectedItem, setSelectedItem] = useState(location?.state?.redirect ? location.state.redirect : allItems[0])

    const [currentContact, setCurrentContact] = useState(null)

    const { contacts, steps, weightLossFaqs, isFaqDeleted, msg, generalFaqs, isGeneralFaqDeleted } = useSelector((state) => state.admin)


    useEffect(() => {
        if (selectedItem) {
            if (selectedItem === 'steps') {
                dispatch(getSteps())
            } else if (selectedItem === 'contacts') {
                dispatch(getContacts())
            } else if (selectedItem === 'weightLoss') {
                dispatch(getWeightLossFaq())
            } else if (selectedItem === 'generalFaq') {
                dispatch(getGeneralFaq())
            }
        }
        if (isFaqDeleted) {
            toast.success(msg)
            dispatch(reset())
            dispatch(getWeightLossFaq())
        }
        if (isGeneralFaqDeleted) {
            toast.success(msg)
            dispatch(reset())
            dispatch(getGeneralFaq())
        }
    }, [selectedItem, dispatch, isFaqDeleted, msg, isGeneralFaqDeleted])

    const contactHandler = (item) => {
        setCurrentContact(item)
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    const deleteFaq = (item) => {
        if (confirm('Are you sure you want to delete')) {
            dispatch(deleteWeightLossFaq(item._id))
        }
    }


    const deleteFaqGeneral = (item) => {
        if (confirm('Are you sure you want to delete')) {
            dispatch(deleteGeneralFaq(item._id))
        }
    }

    return (
        <div className='flex gap-2 min-h-[70vh]'>
            <div className="w-64 flex flex-col justify-between bg-[rgba(132,191,181,0.6)]">
                <button className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Home</button>
                <button onClick={logoutHandler} className='py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white'>Logout</button>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap gap-3 my-5">
                    {allItems && allItems.map((item, index) => (
                        <button onClick={() => setSelectedItem(item)} key={index} className='px-4 py-2 border rounded-md hover:bg-slate-100 font-semibold capitalize'>{item}</button>
                    ))}
                </div>
                <div>
                    {selectedItem === 'steps' &&
                        <div className="">
                            <div className="flex justify-between">
                                <h1 className="px-3 py-2 text-center text-xl font-semibold">
                                    Steps
                                </h1>
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
                                            Title
                                        </th>
                                        <th className="px-4 py-2 col-span-3 border-r">
                                            Name
                                        </th>
                                        <th className="px-4 py-2 col-span-4 border-r">
                                            Description
                                        </th>
                                        <th className="px-4 py-2 col-span-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {steps && steps.length > 0 ? (
                                        steps.map((item, index) => (
                                            <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                                <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center">
                                                    <p>{item.title}</p>
                                                </td>
                                                <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                                    {item.name}
                                                </td>
                                                <td className="px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                                    {item.desc}
                                                </td>
                                                <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                                    <Link to={`/admin/dashboard/${item._id}`}
                                                        // onClick={() => contactHandler(item)}
                                                        className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                    ><AiFillEdit /></Link>
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
                        </div>}
                    {selectedItem === 'contacts' &&
                        <div className="">
                            <div className="flex justify-between">
                                <p className="px-3 py-2 text-center text-xl font-semibold">
                                    Contacts
                                </p>
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
                                                    <button
                                                        onClick={() => contactHandler(item)}
                                                        className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                    ><IoMdExpand /></button>
                                                    <a
                                                        className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                        href={`mailto:${item.email}`}><TbMailForward /></a>
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
                        </div>}
                    {selectedItem === 'weightLoss' &&
                        <div className="">
                            <div className="flex justify-between items-center pr-3">
                                <p className="px-3 py-2 text-center text-xl font-semibold capitalize">
                                    weight Loss Faqs
                                </p>
                                <Link to="/admin/dashboard/loss-faq/create" className='py-2 px-6 rounded-full border hover:bg-slate-100'>Create</Link>
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
                                            Title
                                        </th>
                                        <th className="px-4 py-2 col-span-7 border-r">
                                            Description
                                        </th>
                                        <th className="px-4 py-2 col-span-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {weightLossFaqs && weightLossFaqs.length > 0 ? (
                                        weightLossFaqs.map((item, index) => (
                                            <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                                <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center">
                                                    <p>{item.title}</p>
                                                </td>
                                                <td className="px-4 py-2 col-span-7 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                                    {item.description}
                                                </td>
                                                <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                                    <Link to={`/admin/dashboard/loss-faq/${item._id}`}
                                                        className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                    ><AiFillEdit /></Link>
                                                    <button
                                                        onClick={() => deleteFaq(item)}
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
                        </div>}
                    {selectedItem === 'generalFaq' &&
                        <div className="">
                            <div className="flex justify-between items-center pr-3">
                                <p className="px-3 py-2 text-center text-xl font-semibold capitalize">
                                    general Faqs
                                </p>
                                <Link to="/admin/dashboard/general-faq/create" className='py-2 px-6 rounded-full border hover:bg-slate-100'>Create</Link>
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
                                            Title
                                        </th>
                                        <th className="px-4 py-2 col-span-7 border-r">
                                            Description
                                        </th>
                                        <th className="px-4 py-2 col-span-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {generalFaqs && generalFaqs.length > 0 ? (
                                        generalFaqs.map((item, index) => (
                                            <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                                <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center">
                                                    <p>{item.title}</p>
                                                </td>
                                                <td className="px-4 py-2 col-span-7 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto">
                                                    {item.description}
                                                </td>
                                                <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                                    <Link to={`/admin/dashboard/general-faq/${item._id}`}
                                                        className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                    ><AiFillEdit /></Link>
                                                    <button
                                                        onClick={() => deleteFaqGeneral(item)}
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
                        </div>}
                </div>
            </div>
            {currentContact && <Expand setCurrentContact={setCurrentContact} user={currentContact} />}
        </div>
    )
}

export default Dashboard