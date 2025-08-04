import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from "./components/navBar/NavBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Header from "./components/Header.jsx";
import Highlights from "./pages/Highlights.jsx";
import Contact from "./pages/Contact.jsx"; // your second page
import './index.css'; // or your actual CSS filename



const App = () => {
    return (
        <div className="w-full min-h-screen bg-[#151515] font-palanquin-custom">
            {/* Global Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Newsreader:wght@400;700&family=Palanquin:wght@400;700&display=swap" rel="stylesheet" />

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/highlights" element={<Highlights />} />Contact
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
