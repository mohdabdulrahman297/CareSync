import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div className='flex justify-center min-h-screen py-10'>
      {children}
    </div>
  )
}