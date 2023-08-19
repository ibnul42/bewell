import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoading } = useSelector((state) => state.auth);
  const user = localStorage.getItem('user')
  const token = user ? JSON.parse(localStorage.getItem('user'))['token'] : null

  if (isLoading) return <div className="h-full w-full">
    <div className="animate-spin"></div>
  </div>

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
