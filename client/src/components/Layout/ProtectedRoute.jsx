import { useSelector } from "react-redux"
import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

export default function ProtectedRoute() {
  const { currentUser } = useSelector(state => state.user)
  console.log(currentUser)
  return currentUser && currentUser.login && currentUser.login ? <Outlet /> : <Navigate to={'/login'} />
}
