
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import AccBody from "./Accordian/AccBody";
import AllLocation from "./components/AllLocation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/wpgmp_form_location" element={<AccBody/>} />
          <Route path="/all" element={<AllLocation />} />
          <Route path="/"element={<AccBody/>} />
          <Route path="/edit/:id/"element={<AccBody/>}  />
    
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
