import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import img from "../assets/6.jpg";

function GetInTouch() {
  const sectionRef = useRef(null);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // 🔁 RESET animation on route change
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [location.pathname]); // 👈 reattach observer per route

  return (
    <section ref={sectionRef} className="bg-[#1c1c1c] py-14">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT : Image */}
          <div className="lg:col-span-7">
            <div
              className={`
                relative w-full max-w-xl aspect-[20/9] overflow-hidden
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <img
                src={img}
                alt="Interior visualization"
                className="w-full h-full object-cover scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
            </div>
          </div>

          {/* RIGHT : Content */}
          <div
            className={`
              lg:col-span-5 text-[#d3d0cb]
              transition-all duration-700 delay-200 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight leading-snug mb-4">
              We’ll bring your vision to life —{" "}
              <span className="text-[#D6B643]">connect with us!</span>
            </h2>

            <p className="text-[#d3d0cb]/80 text-sm leading-relaxed mb-6">
              Your space may begin with many ideas. We refine and translate them into well-planned interiors that feel thoughtful, practical, and timeless.
            </p>

            <NavLink
              to="/contact"
              className="
                inline-block
                px-6 py-2.5
                border border-[#d3d0cb]
                text-xs tracking-wide
                hover:bg-[#D6B643]
                hover:text-black
                hover:border-[#D6B643]
                transition-all
              "
            >
              GET IN TOUCH
            </NavLink>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default GetInTouch;
