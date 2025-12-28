import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import imgLeft from "../assets/6.jpg";
import imgRight from "../assets/10.jpg";
import bg from "../assets/8.jpg"; // background image

function AboutIntro() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1c1c1c] py-28 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/60 via-[#1c1c1c]/75 to-[#1c1c1c]/90" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Container>

          {/* HEADING */}
          <div
            className={`
              mb-20
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div className="w-12 h-[2px] bg-[#D6B643] mb-6" />
            <h2 className="text-4xl md:text-5xl xl:text-[56px] font-normal tracking-tight text-[#d3d0cb]">
              Discover our <span className="text-[#D6B643] font-bold">journey</span>
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

            {/* LEFT IMAGE + TEXT */}
            <div
              className={`
                lg:col-span-5 space-y-6
                transition-all duration-700 delay-100 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={imgLeft}
                  alt="Design detail"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[15px] md:text-base text-[#d3d0cb]/80 leading-relaxed max-w-sm">
                At Jayess Bauences, our journey is shaped by a commitment to
                thoughtful design, precision execution, and spaces that feel
                deeply personal.
              </p>
            </div>

            {/* CENTER MICRO COPY */}
            <div
              className={`
                lg:col-span-3 pt-24
                transition-all duration-700 delay-200 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <p className="text-xs uppercase tracking-widest text-[#d3d0cb]/60 mb-4">
                Our Foundation
              </p>

              <p className="text-[15px] md:text-base text-[#d3d0cb]/80 leading-relaxed">
                Rooted in architectural discipline and guided by years of
                experience, our work balances function, material honesty, and
                timeless aesthetics.
              </p>
            </div>

            {/* RIGHT IMAGE + TEXT */}
            <div
              className={`
                lg:col-span-4 space-y-6
                transition-all duration-700 delay-300 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <p className="text-xs uppercase tracking-widest text-[#d3d0cb]/60">
                Redefining Excellence
              </p>

              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={imgRight}
                  alt="Interior lighting detail"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[15px] md:text-base text-[#d3d0cb]/80 leading-relaxed max-w-sm">
                Every project is an opportunity to refine how people live, work,
                and experience space — quietly, beautifully, and with intention.
              </p>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutIntro;
