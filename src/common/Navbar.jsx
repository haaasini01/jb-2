import { NavLink, useNavigate, useLocation } from "react-router-dom";
import JB from "./Jb";
import Container from "../common/Container";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetInTouch = () => {
    if (location.pathname === "/contact") {
      // already on contact → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-[#d3d0cb]">
      <Container>
        <div className="flex items-center justify-between py-4 gap-16 text-[16px] tracking-[.05em]">

          <JB />

          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT US" },
            { to: "/services", label: "SERVICES" },
            { to: "/contact", label: "CONTACT US" },
          ].map(({ to, label }) => (
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

          {/* GET IN TOUCH */}
          <button
            onClick={handleGetInTouch}
            className="px-4 py-2 border-2 border-[#d3d0cb] transition-all hover:bg-[#d3d0cb] hover:text-black rounded-sm"
          >
            GET IN TOUCH
          </button>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
