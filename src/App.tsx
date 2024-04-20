import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Review1 from "./pages/Review1";
import Review2 from "./pages/Review2";
import Confirm from "./pages/Confirm";
import { useState } from "react";


function App() {
  const [plan, setPlan] =useState("");
 function selver(){
  setPlan("selver")
 }
 function gold(){
  setPlan("gold")
 }
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home  selver={selver} gold={gold} />} />
          <Route path="/payment" element={<Payment plan={plan}/>} />
          <Route path="/Review1" element={<Review1 plan={plan}/>} />
          <Route path="/Review2" element={<Review2 plan={plan}/>} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
    </>
  );
}

export default App;
