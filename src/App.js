import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emplisting from "./components/Emplisting";
import EmpCreate from "./components/EmpCreate";
import EmpDetails from "./components/EmpDetails";
import EmpEdit from "./components/EmpEdit";
function App() {
  return (
    <div className="App">
      <h1 className="crud-head">REACT CRUD OPERATIONS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetails />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
