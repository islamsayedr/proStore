import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Review1 from "./pages/Review1";
import Review2 from "./pages/Review2";
import Confirm from "./pages/Confirm";


function App() {


  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Review1" element={<Review1 />} />
          <Route path="/Review2" element={<Review2 />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
    </>
  );
}

export default App;
