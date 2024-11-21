import { Outlet } from "react-router-dom"
import PacientesForm from "./pacientesForm"

const formulario = () => {
  return (
    <>formulario
      <PacientesForm />
      <Outlet />
    </>
  )
}

export default formulario