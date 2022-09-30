import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario 
         pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default App;
