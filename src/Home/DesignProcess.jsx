import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

function DesignProcess() {
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

  const steps = [
    {
      title: "Design Brief",
      desc: "We begin with thoughtful conversations to understand your vision, preferences, and lifestyle—forming a strong foundation for your space.",
      transform: "-translate-x-10",
    },
    {
      title: "Estimation",
      desc: "Clear and transparent reiterated estimates are prepared with defined timelines, ensuring alignment before we move forward.",
      transform: "translate-y-6",
    },
    {
      title: "Implementation",
      desc: "Our team brings the design to life with precision, craftsmanship, and careful attention to every detail.",
      transform: "translate-y-6",
    },
    {
      title: "Handover",
      desc: "We deliver a refined, complete space—ready to be lived in and enjoyed, exactly as envisioned.",
      transform: "translate-x-10",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#d3d0cb] py-12 md:py-20 lg:py-24">
      <Container>

        {/* Header row */}
        <div className="mb-8 md:mb-12">

          {/* OUR APPROACH pill - above heading */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 border border-gray-500 rounded-full text-xs sm:text-sm text-gray-700">
              <span className="w-2 h-2 bg-[#D6B643] rounded-full" />
              OUR APPROACH
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1c1c1c] mb-4 md:mb-6">
              Design Process
            </h2>

            <div className="w-12 h-[2px] bg-[#D6B643] mb-4 md:mb-6" />

            <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed">
              From concept to completion, we follow a structured yet flexible
              process that transforms ideas into thoughtfully designed spaces.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${step.transform}`}
              `}
            >
              {/* Step number */}
              <div className="text-[#D6B643] text-2xl font-bold tracking-widest mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1c1c1c] mb-4">
                {step.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#D6B643] mb-5" />

              {/* Description */}
              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default DesignProcess;
