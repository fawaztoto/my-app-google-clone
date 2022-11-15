import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
 
          <Route path="/" exact  element={<Home />} />
          <Route path='/SearchPage' element ={<SearchPage />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App; 



 {/* <Route path='/' element={<Home/>} />  
        <Route path='/' element={<Home/>} />  
        <Route path='/' element={<Home/>} />   */}