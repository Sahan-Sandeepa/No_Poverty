import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Header_bar from './components/header_bar';
import AddFinancial from './components/financial/AddFinancial';
import Financial from './components/financial/financial';
import Modalll from './components/financial/modalll';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
