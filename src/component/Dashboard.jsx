import {useState} from 'react'
import Admin from '../pages/Admin'
import Sidebar from './Sidebar'
const Dashboard = () => {
    const [isSidebarOpen,setSidebarOpen]=useState(false)
    const ToggleSidebar=()=>setSidebarOpen(!isSidebarOpen)
  return (
    <div>
        <Sidebar isSidebarOpen={isSidebarOpen} ToggleSidebar={ToggleSidebar}/>
    </div>
  )
}

export default Dashboard
