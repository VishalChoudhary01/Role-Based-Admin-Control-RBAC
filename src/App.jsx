import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Dashboard from "./component/Dashboard";
import RoleManagement from "./component/RoleManagement";
function App() {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-[#e0e0e0ea] to-[#c1e1c1ae] fixed -z-50"></div>
      {/* <div className='bg-black w-full fixed h-full'></div> */}
      <section className="w-full h-[dvh]">
        <Router>
          <Navbar />
          <div>
            <Dashboard />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/rolemanger" element={<RoleManagement />} />
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
