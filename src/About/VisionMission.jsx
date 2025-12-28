import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

function VisionMission() {
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
    <section
      ref={sectionRef}
      className="bg-[#f4f3ef] py-20"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">

          {/* OUR VISION */}
          <div
            className={`
              md:col-span-6
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1c1c1c] mb-6">
              Our Vision
            </h3>

            <div className="w-12 h-[2px] bg-[#D6B643] mb-6" />

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              At Jayess Bauences, we envision interiors that enhance everyday living in subtle, meaningful ways. Our goal is to create spaces that are harmonious, practical, and personal—where design and function come together naturally.
            </p>
          </div>

          {/* OUR MISSION */}
          <div
            className={`
              md:col-span-6
              transition-all duration-700 delay-200 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1c1c1c] mb-6">
              Our Mission
            </h3>

            <div className="w-12 h-[2px] bg-[#D6B643] mb-6" />

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              Our mission is to create well-considered interior solutions guided by strong architectural principles and executed with care. By working closely with our clients and following clear processes, quality materials, and refined detailing, we deliver spaces that are enduring, functional, and thoughtfully crafted.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default VisionMission;
