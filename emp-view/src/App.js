import './App.css';
import Navbar from './component/Navbar';
import EmpList from './component/EmpList';
import AddEmp from './component/AddEmp';
import EditEmployee from './component/EditEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* it is constant this is not route */}
        <Navbar/>
     <Routes>
        <Route path='/' element={ <EmpList/> } />
        {/* if this path is getting then redirect to this element */}
        <Route path='/AddEmp' element={ <AddEmp/> } />
        <Route path="/EditEmployee/:id" element={ <EditEmployee/> } />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
