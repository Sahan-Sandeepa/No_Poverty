import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Header_bar from './components/header_bar';
import AddFinancial from './components/financial/AddFinancial';
import Financial from './components/financial/financial';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/financial'
      element={<Financial/>}
      />
      <Route path='/addfinancial'
      element={<AddFinancial/>}
      />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
