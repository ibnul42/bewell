import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <div className="h-full w-full">
    <div className="animate-spin"></div>
  </div>

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
