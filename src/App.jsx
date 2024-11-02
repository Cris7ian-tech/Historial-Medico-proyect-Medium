import "./App.css";
import PacientesForm from "./components/PacientesForm";
import PacientesLista from "./components/PacientesLista";
import PatientsProvider from "./components/Context/patientsProvider";

function App() {
  

  return (
    <>
      <PatientsProvider>
        <div className="container">
          <h1>Demo Manejo de Pacientes</h1>
          <PacientesForm />
          <PacientesLista />
        </div>
      </PatientsProvider>
    </>
  );
}

export default App;
