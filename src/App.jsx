import { Routes, Route, useLocation } from "react-router-dom";
import PostSingle from "./views/PostSingle";
import Home from "./views/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import PostLand from "./views/PostLand";
import Team from "./views/Team";
import Contact from "./views/Contact";
import Login from "./components/Login";
import CreatePost from "./views/CreatePost";
import ProtectedRoute from "./middlewares/ProtectedRoute"; // Importa el componente de protección
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  // Definir rutas donde el Navbar no debe ser visible
  const noNavbarRoutes = ["/login"];

  return (
    <>
      <Helmet>
        <title>EDM Love MX</title>
        <meta name="description" content=" Blog de EDM en México" />
      </Helmet>

      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostLand />} />
        <Route path="/post/:id" element={<PostSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/createPost"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
