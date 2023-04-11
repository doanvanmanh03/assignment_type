import {Outlet} from 'react-router-dom'
import Userfooter from './footer'
import Userheader from './header'
import { Navbar } from './navbar'
import Login from './Login'
import Singin from './Singin'


const UserLayout = () => {
    return <>
    
        {/* Content */}
        <Userheader/>
        <Navbar/>
        <Outlet/>
       <Userfooter/>
    
       
    </>
}

export default UserLayout