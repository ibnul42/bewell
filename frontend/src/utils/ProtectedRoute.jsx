import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    let isAuthenticated = false
    isAuthenticated = useSelector((state) => state.auth.user)

    if (isAuthenticated !== false) return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute