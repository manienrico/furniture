//import './App.css';
import { Routes,Route } from "react-router-dom";

import { About, Contact, Error, Home, Shop } from "./pages/pages";

import { Navbar } from "./components/components"
function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Navbar />}>
          <Route index /*path="/home"*/ element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
