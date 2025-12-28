import { useRef, useEffect, useState } from "react";
import Container from "../common/Container";

import img1 from "../assets/10.jpg"; // background
import img3 from "../assets/6.jpg";  // right image

function Why2() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
        ref={sectionRef}
        className="
            relative
            h-screen
            min-h-[50vh]
            max-h-[800px]
            overflow-hidden
            
            xl:py-20
            2xl:py-32
        "
    >



      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div
            className="
                grid
                grid-cols-1
                lg:grid-cols-12
                gap-16
                items-center
                h-full
            "
            >

            {/* LEFT CONTENT */}
            <div
              className={`
                text-[#d3d0cb]
                lg:col-span-7
                transition-opacity duration-700
                ${visible ? "animate-fade-left" : "opacity-0"}
              `}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Designing Spaces <br />
                <span className="text-[#D6B643]">Built to Feel Personal.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm md:text-base">
                {[
                  "Smart Design-Led Approach",
                  "Attention to Detail & Finish",
                  "Built for Long-Term Quality",
                  "Strong Focus on Residential Projects",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-[#D6B643]">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-[#d3d0cb] max-w-xl text-sm md:text-base">
                From private homes to workspaces and commercial interiors, we manage every stage of the design process with care, ensuring results that are practical, refined, and lasting.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`
                lg:col-span-5
                transition-opacity duration-700
                ${visible ? "animate-fade-right" : "opacity-0"}
              `}
            >
              <div
                className="
                  mx-auto
                  p-4
                  md:p-6
                  xl:p-8
                "
              >
                <div
                  className="
                    relative
                    w-full
                    max-w-2xl
                    aspect-[2.5/3]
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    bg-[#d3d0cb]
                  "
                >
                  <img
                    src={img3}
                    alt="Interior"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}

export default Why2;
