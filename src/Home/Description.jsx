import two from "../assets/7.jpg";
import three from "../assets/12.jpg";
import four from "../assets/9.jpg";
import Container from "../common/Container";
import { useEffect, useState } from "react";


function Description() {
  const images = [two, three, four];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
          relative
          min-h-[50vh]
          max-h-[900px]
          flex
          items-start
          pt-32
          md:pt-52
          overflow-hidden
        "
    >
      <div className="absolute inset-0 will-change-opacity transition-opacity duration-1000">
        <img
          src={images[currentIndex]}
          alt="Interior"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full">
        <Container>
          <div className="grid grid-cols-1 items-start text-[#d3d0cb]">

            <div className="animate-fade-up">
              <div className="mb-4 tracking-wide text-8xl font-extrabold">
                <span>Curated. Timeless. </span>
                <span className="text-[#D6B643]">Purposeful.</span>
              </div>

              <div className="text-base md:text-xl mb-10 max-w-4xl">
                Designing interiors that thoughtfully balance functionality,
                comfort, and character where every space feels intuitive to use,
                comfortable to live in, and rich with personality.
              </div>

              <div className="flex justify items-center justify-center">
                <button
                  onClick={() => {
                    document
                      .getElementById("next-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
                    w-24 h-24 rounded-full
                    border border-[#d3d0cb]
                    flex items-center justify-center
                    text-[#d3d0cb]
                    hover:bg-[#d3d0cb] hover:text-black
                    transition-all
                    animate-bounce
                  "
                  aria-label="Scroll down"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}

export default Description;
