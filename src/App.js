import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import CategoryPage from './pages/CategoryPage';

import  {  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CategoryPage/>}>
         
          </Route>
        
          </Routes>


      </Router>
    </div>
  );
}

export default App;
