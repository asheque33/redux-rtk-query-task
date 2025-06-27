import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import {
  selectAccessToken,
  selectIsAuthenticated,
} from '@/redux/features/auth/authSlice';

const ProtectedRoute = ({ children }) => {
  const accessToken = useAppSelector(selectAccessToken);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  console.log(accessToken, isAuthenticated, 'protected route');
  return accessToken && isAuthenticated ? (
    children
  ) : (
    <Navigate to='/login' replace />
  );
};

export default ProtectedRoute;
