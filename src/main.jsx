import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Tarifs from "./Pages/Tarifs/Tarifs.jsx";
import Contacte from "./Pages/Contacte/Contacte.jsx";
import Error from "./components/Error/Error.jsx";
import Header from "./components/Header/Header.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Header />
            <div style={{ marginTop: "90px", width: "100vw" }}>
                <Routes>
                    <Route path="*" element={<Error />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Tarifs" element={<Tarifs />}></Route>
                    <Route path="/Contacte" element={<Contacte />}></Route>
                </Routes>
            </div>
        </Router>
    </StrictMode>,
);
