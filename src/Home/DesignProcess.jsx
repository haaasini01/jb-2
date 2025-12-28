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
      animation: "animate-fade-left",
    },
    {
      title: "Estimation",
      desc: "Clear and transparent reiterated estimates are prepared with defined timelines, ensuring alignment before we move forward.",
      animation: "animate-fade-up",
    },
    {
      title: "Implementation",
      desc: "Our team brings the design to life with precision, craftsmanship, and careful attention to every detail.",
      animation: "animate-fade-up",
    },
    {
      title: "Handover",
      desc: "We deliver a refined, complete space—ready to be lived in and enjoyed, exactly as envisioned.",
      animation: "animate-fade-right",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#d3d0cb] py-24">
      <Container>

        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">

          {/* Left heading */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c1c1c] mb-6">
              Design Process
            </h2>

            <div className="w-12 h-[2px] bg-[#D6B643] mb-6" />

            <p className="text-[#6b6b6b] text-lg leading-relaxed">
              From concept to completion, we follow a structured yet flexible
              process that transforms ideas into thoughtfully designed spaces.
            </p>
          </div>

          {/* Right pill */}
          <div className="md:pt-3">
            <span className="inline-flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-full text-sm text-gray-700">
              <span className="w-2 h-2 bg-[#D6B643] rounded-full" />
              OUR APPROACH
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                transition-all duration-700 ease-out
                opacity-0 translate-y-6
                ${visible ? `${step.animation} opacity-100 translate-y-0` : ""}
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
