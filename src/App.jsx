import { Routes, Route } from "react-router-dom";
import PostSingle from "./views/PostSingle";
import Home from "./views/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import PostLand from "./views/PostLand";
import Team from "./views/Team";
import Contact from "./views/Contact";

function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostLand />} />
        <Route path="/post/:id" element={<PostSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    </>
  );
}

export default App;
