import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Contact } from "lucide-react";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <nav className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-bracket">{"{"}</span>
            <span className="logo-text">Cassio.dev</span>
            <span className="logo-bracket">{"}"}</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
            {/* <li><Link to="/servicos" onClick={closeMenu}>Serviços</Link></li> */}
            <li><Link to="/portfolio" onClick={closeMenu}>Portfólio</Link></li>
            <li>
              <Link to="/contato" className="btn-contato" onClick={closeMenu}>
                Contato
                <Contact size={18} />
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
        {/* <Link to="/servicos" onClick={closeMenu}>Serviços</Link> */}
        <Link to="/portfolio" onClick={closeMenu}>Portfólio</Link>
        <Link to="/contato" className="btn-contato" onClick={closeMenu}>
          Contato
        </Link>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu} />}
    </>
  );
}
