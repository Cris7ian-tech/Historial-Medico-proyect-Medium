import { Link } from "react-router-dom"
import SidebarMenuDos from "../components/SidebarMenuDos"


const Inicio = () => {
  return (
    <>
    
    <SidebarMenuDos />
    <button><Link to="/dashboard">Ir a Dashboard</Link></button>
    </>
  )
}

export default Inicio