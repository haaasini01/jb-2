import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import img1 from "../assets/6.jpg";
import img2 from "../assets/10.jpg";

function AboutManifesto() {
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
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#d3d0cb] py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

          {/* LEFT : IMAGE COMPOSITION */}
          <div className="lg:col-span-5 relative">

            {/* Back image (NOW WITH BORDER) */}
            <div
              className={`
                w-[75%] aspect-[3/4]
                border border-[#D6B643]
                p-2 bg-[#d3d0cb]
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <img
                src={img1}
                alt="Interior design by Jayess Bauences"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Front overlapping image */}
            <div
              className={`
                absolute top-28 right-0 w-[70%] aspect-[3/4]
                border border-[#D6B643]
                p-2 bg-[#d3d0cb]
                transition-all duration-700 delay-300 ease-out
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
              `}
            >
              <img
                src={img2}
                alt="Interior styling detail"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT : TEXT CONTENT */}
          <div
            className={`
              lg:col-span-7
              transition-all duration-700 delay-200 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
            `}
          >
            <span className="block text-xs tracking-widest text-gray-500 mb-3">
              ABOUT JAYESS BAUENCES
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1c1c] leading-tight mb-6">
              We create interiors that
              <br />
              are thoughtful and built to last
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
              As part of <span className="font-semibold">Jayess Builders</span>, Jayess Bauences draws from strong architectural principles to shape its interior design approach. Each space is planned to balance aesthetics with everyday usability, resulting in calm, well-composed environments.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
              Working across both residential and commercial projects, we shape concepts into carefully detailed interiors that remain relevant over time, rather than following short-lived trends.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#D6B643] text-base">✓</span>
                Design and quality control throughout the project lifecycle
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D6B643] text-base">✓</span>
                Clearly defined timelines with regular on-site evaluations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D6B643] text-base">✓</span>
                A considered approach to design development and execution
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default AboutManifesto;
