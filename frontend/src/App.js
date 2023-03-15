import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Header_bar from './components/header_bar';
import AddFinancial from './components/financial/AddFinancial';
import AddEvent from './components/Event/Admin/AddEvent';
import AllEvent from './components/Event/Admin/AllEvent';
import UpdateEvent from './components/Event/Admin/UpdateEvent';

function App() {
  return (
    <div>
      <AddEvent />,
      <AllEvent />,
      <UpdateEvent />
    </div>
  );
}

export default App;
