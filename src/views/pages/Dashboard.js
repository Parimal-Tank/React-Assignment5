import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbars from '../../components/Navbars'
import Products from './Products'

const Dashboard = () => {

  const { state } = useLocation();

  return (
    <div>
        <Navbars loginUserData={state} />
        <Products />
    </div>
  )
}

export default Dashboard
