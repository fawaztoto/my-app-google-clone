import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
 
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;



 {/* <Route path='/' element={<Home/>} />  
        <Route path='/' element={<Home/>} />  
        <Route path='/' element={<Home/>} />   */}