import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Header_bar from './components/header_bar';
import AddFinancial from './components/financial/AddFinancial';
import Financial from './components/financial/financial';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/financial'
            component={Financial}
          />
          <Route path='/addfinancial'
            component={AddFinancial}

          />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
