import { Link } from "react-router-dom";
import "./StyleHeader.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";

function Header() {
    const [shownav, setShownav] = useState(false);

    return (
        <nav>
            <Link
                to="/"
                className="nav-icon"
                aria-label="Visit homepage"
                aria-current="page"
            >
                <img src={Logo} alt="logo Amstramgramme" />
            </Link>
            <div className="main-navlinks">
                <button
                    className="humburger"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={shownav}
                    onClick={() => {
                        setShownav(!shownav);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`navlinks-container ${shownav ? "open" : ""}`}>
                    <Link
                        to="/"
                        className="navbar_link_item"
                        aria-current="page"
                    >
                        Acceuil
                    </Link>

                    <Link to="/Tarifs" className="navbar_link_item">
                        Tarifs
                    </Link>

                    <Link to="/About" className="navbar_link_item">
                        About
                    </Link>

                    <Link to="/Contacte" className="navbar_link_item">
                        Contacte
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
