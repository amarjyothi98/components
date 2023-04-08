import Modal from "./components/modal/Modal";
import Navbar from "./components/topbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
       {/* <Navbar/> */}
       <Modal/>
    </Router>
    </>
  );
}

export default App;
