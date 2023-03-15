import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Header_bar from './components/header_bar';
import AddFinancial from './components/financial/AddFinancial';
import AddEvent from './components/Event/Admin/AddEvent';
import AllEvent from './components/Event/Admin/AllEvent';

function App() {
  return (
    <div>
      <AddEvent />
      <AllEvent />
    </div>
  );
}

export default App;
