import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";

import VisitorActivityTracker from "./components/VisitorActivityTracker";

function App() {
  return (
    <BrowserRouter>
      <VisitorActivityTracker />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admingmn" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;