import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import TeamPage from "./pages/teams/TeamPage";
import ServicePage from "./pages/Service/ServicePage";
import BlogPage from "./pages/Blog/BlogPage";
import FooterPage from "./pages/Footer/FooterPage";
import Nav from "./components/Hero/Nav";


export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/"  element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
   

      </Routes>
      <FooterPage />
    </Router>
  );
}
