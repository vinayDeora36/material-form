import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import WpMapsPro from "./components/WpMapsPro";
import AllUser from "./components/AllUsers";
import AddUsers from "./components/AddUsers";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
import AccBody from "./Accordian/AccBody";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/WPMAPSPRO" element={<AccBody/>} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/" element={<AddUsers />} />
          <Route path="/add" element={<AddUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
