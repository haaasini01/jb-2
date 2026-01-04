import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import JB from "./Jb";
import Container from "../common/Container";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetInTouch = () => {
    if (location.pathname === "/contact") {
      // already on contact → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact");
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/services", label: "SERVICES" },
    { to: "/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-[#d3d0cb]">
      <Container>
        <div className="flex items-center justify-between py-4 gap-4 text-[16px] tracking-[.05em]">

          <JB />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-colors ${
                    isActive
                      ? "text-[#D6B643] border-[#D6B643]"
                      : "border-transparent hover:border-[#d3d0cb]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop GET IN TOUCH */}
          <button
            onClick={handleGetInTouch}
            className="hidden lg:block px-4 py-2 border-2 border-[#d3d0cb] transition-all hover:bg-[#d3d0cb] hover:text-black rounded-sm"
          >
            GET IN TOUCH
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-[#d3d0cb]/20 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b-2 pb-2 transition-colors ${
                      isActive
                        ? "text-[#D6B643] border-[#D6B643]"
                        : "border-transparent hover:border-[#d3d0cb]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={handleGetInTouch}
                className="w-full text-left px-4 py-2 border-2 border-[#d3d0cb] transition-all hover:bg-[#d3d0cb] hover:text-black rounded-sm"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
