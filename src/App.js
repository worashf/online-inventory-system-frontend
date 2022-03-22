import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage'
import StorePage from './pages/StorePage';
import SupplierPage from './pages/SupplierPage';
import CustomerPage from './pages/CustomerPage';
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
          <Route path="/category" element={<CategoryPage/>}>
         
         </Route>
          <Route path="/brand" element={<BrandPage/>}>
         
          </Route>
          <Route path="/store" element={<StorePage/>}>
         
         </Route>
        
         <Route path="/supplier" element={<SupplierPage/>}>
         
         </Route>
         <Route path="/customer" element={<CustomerPage/>}>
         
         </Route>
          </Routes>


      </Router>
    </div>
  );
}

export default App;
