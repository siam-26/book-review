import { Outlet } from "react-router-dom"
import Navbar from "../../Pages/Shared/Navbar/Navbar"
import './Main.css';


const Main = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Main