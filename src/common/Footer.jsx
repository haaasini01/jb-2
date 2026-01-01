import { NavLink } from "react-router-dom";
import Container from "../common/Container";

function Footer() {
  return (<div>
    <div className="h-[1px] bg-[#d3d0cb]/20" />
    <footer className="bg-[#1c1c1c] text-[#d3d0cb] pt-16 pb-8">
      <Container>
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-12">

          {/* LEFT : Logo + About */}
          <div className="md:col-span-5">
            {/* Logo placeholder */}
            <div className="w-40 h-10 bg-[#d3d0cb]/20 mb-6" />

            <p className="text-sm leading-relaxed text-[#d3d0cb]/80 max-w-md">
              With over 6+ years of experience, we specialize in interior design and development for both residential and commercial spaces, delivering tailored solutions that bring your vision to life.
            </p>
          </div>

          {/* CENTER : Visit Us */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.3em] mb-6 text-white">
              VISIT US
            </h4>

            <div className="text-sm text-[#d3d0cb]/80 space-y-4">
              <div className="leading-snug">
                <p>Jayess Bauences</p>
                <p>Interior Designers</p>
                <p>Hyderabad, Telangana</p>
              </div>

              <p>+91 9515310196</p>
              <p>+91 9515496226</p>
              <p>jayessbauences@gmail.com</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1c1c1c] hover:bg-[#D6B643] transition"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919515496226"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1c1c1c] hover:bg-[#D6B643] transition"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 20l1.7-5A8 8 0 1 1 20 11a8 8 0 0 1-8 8 7.9 7.9 0 0 1-4-1L3 20z" />
                  <path d="M9.5 9.5c.5 2 2.5 4 4.5 4.5" />
                </svg>
              </a>

            </div>
          </div>

          {/* RIGHT : Menu */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.3em] mb-6 text-white">
              MENU
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className="hover:text-[#D6B643] transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-[#D6B643] transition">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-[#D6B643] transition">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-[#D6B643] transition">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="mt-5 w-full h-[1px] bg-[#d3d0cb]/25" />
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="text-center text-xs text-[#d3d0cb]/60">
          Copyright © 2025 Jayess Bauences. All Rights Reserved
        </div>

      </Container>
    </footer>
    </div>
  );
}

export default Footer;
