import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../../features/auth/authSlice"

const Login = () => {
  const location = useLocation()
  const [logoutUser, setLogoutUser] = useState(
    location?.state?.logout ? true : false
  )
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  })

  const { email, password } = inputValue

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message, isLoggedIn } =
    useSelector((state) => state.auth)

  const userData = localStorage.getItem('user')

  useEffect(() => {
    if (userData) {
      navigate('/admin/dashboard')
    } else if (isError) {
      toast.error(message)
      dispatch(reset())
    } else if (isLoggedIn && isSuccess) {
      toast.success('Login Successfull!')
      dispatch(reset())
      navigate('/admin/dashboard')
    }
    else if (user) {
      toast.success("Login successfull!")
      navigate("/admin/dashboard")
    }
  }, [user, isError, message, dispatch, isLoggedIn, isSuccess, navigate])

  const onChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    // setLogoutUser(false)
    dispatch(login(inputValue))
  }

  return (
    <div className="flex flex-col py-2 justify-center items-center">
      <form
        onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 max-w-sm w-full mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </div>
  )
}

export default Login
