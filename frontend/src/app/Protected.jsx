import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const token = JSON.parse(localStorage.getItem('user'))['token']

    return token ? <Outlet /> : <Navigate to='/login' />
}

export default Protected