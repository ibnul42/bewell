import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleStep, reset, updateStep } from '../../../features/admin/adminSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditStep = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const param = useParams()
    const { step: id } = param

    const { step, isStepEdited, isSuccess, isError, msg } = useSelector((state) => state.admin)

    const [initialized, setInitialized] = useState(true)

    const [inputValue, setInputValue] = useState({
        name: '',
        desc: ''
    })

    const { name, desc } = inputValue

    useEffect(() => {
        if (initialized) {
            dispatch(getSingleStep(id))
            setInitialized(false)
        }
        if (isStepEdited) {
            toast.success(msg)
            dispatch(reset())
            navigate('/admin/dashboard')
        } else if (isError) {
            toast.error(msg)
            dispatch(reset())
        } else if (isSuccess && step) {
            setInputValue({
                name: step.name,
                desc: step.desc
            })
        }
    }, [dispatch, step, id, isError, isStepEdited, isSuccess, msg, navigate, initialized])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateStep({ ...inputValue, id: step._id }))
    }
    return (
        <div className='flex gap-2 min-h-[60vh] justify-center items-center'>
            <form onSubmit={submitHandler}>
                <div className="space-y-5 w-96">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900 text-center">{step?.title}</h2>

                    <div className="">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setInputValue((prev) => ({ ...prev, name: e.target.value }))}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="janesmith"
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
                                id="desc"
                                name="desc"
                                value={desc}
                                onChange={(e) => setInputValue((prev) => ({ ...prev, desc: e.target.value }))}
                                rows={3}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link state={{redirect: 'steps'}} to="/admin/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
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

export default EditStep