import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createWeightLossFaq, editGeneralFaq, editWeightLossFaq, reset, singleGeneralFaq, singleWeightLossFaq } from '../../../features/admin/adminSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditGeneralFaq = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [initialState, setInitialState] = useState(true)

    const { isFaqCreated, msg, isError, isSingleFaq, isFaqEdited, weightLossFaq, isSingleGeneralFaq, generalFaq, isGeneralFaqEdited } = useSelector((state) => state.admin)

    const [inputValue, setInputValue] = useState({
        title: '',
        description: '',
        link: {
            type: false,
            title: '',
            link: ''
        }
    })

    const { title, description } = inputValue

    useEffect(() => {
        if (initialState) {
            dispatch(singleGeneralFaq(id))
            setInitialState(false)
        } else if (isError) {
            toast.error(msg)
            dispatch(reset())
        } else if (isSingleGeneralFaq) {
            setInputValue({
                title: generalFaq.title,
                description: generalFaq.description,
                link: {
                    type: generalFaq.link.type,
                    title: generalFaq.link.title,
                    link: generalFaq.link.link
                }
            })
            dispatch(reset())
        } else if (isGeneralFaqEdited) {
            toast.success(msg)
            dispatch(reset())
            navigate('/admin/dashboard')
        }
    }, [isError, dispatch, isFaqCreated, msg, navigate, initialState, id, isSingleFaq, weightLossFaq, isGeneralFaqEdited, isSingleGeneralFaq, generalFaq])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(editGeneralFaq({ data: inputValue, id }))
    }
    return (
        <div className='flex gap-2 min-h-[60vh] justify-center items-center'>
            <form onSubmit={submitHandler}>
                <div className="space-y-5 w-96 py-5">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900 text-center">Edit General FAQ</h2>

                    <div className="">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setInputValue((prev) => ({ ...prev, title: e.target.value }))}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="FAQ Title"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => setInputValue((prev) => ({ ...prev, description: e.target.value }))}
                                rows={3}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" checked={inputValue.link.type ? true : false} onChange={() => setInputValue((prev) => ({ ...prev, link: { ...prev.link, type: !inputValue.link.type } }))} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link Included</label>
                    </div>

                    {inputValue?.link?.type &&
                        <div className="">
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title-link"
                                            id="title-link"
                                            value={inputValue.link.title}
                                            onChange={(e) => setInputValue((prev) => ({ ...prev, link: { ...prev.link, title: e.target.value } }))}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        // placeholder="FAQ Title"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Link
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title-link"
                                            id="title-link"
                                            value={inputValue.link.link}
                                            onChange={(e) => setInputValue((prev) => ({ ...prev, link: { ...prev.link, link: e.target.value } }))}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        // placeholder="FAQ Title"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>

                <div className="flex items-center justify-end gap-x-6 py-5">
                    <Link state={{ redirect: 'generalFaq' }} to="/admin/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditGeneralFaq