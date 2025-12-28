import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import img1 from "../assets/contact.png";

function Form() {
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
    <section ref={sectionRef} className="bg-[#d3d0cb] py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT : IMAGE */}
          <div
            className={`
              lg:col-span-6
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div className="relative w-full max-w-lg aspect-[4.5/5] overflow-hidden">
              <img
                src={img1}
                alt="Contact Jayess Bauences"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT : FORM */}
          <div
            className={`
              lg:col-span-6
              transition-all duration-700 delay-200 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            {/* Heading */}
            <span className="block text-xs tracking-widest text-gray-600 mb-3">
              GET IN TOUCH
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1c1c] mb-8">
              Connect with us!
            </h2>

            <form className="space-y-6 max-w-md">

              {/* Name */}
              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full
                    bg-transparent
                    border-b border-gray-500
                    pb-2
                    text-sm
                    outline-none
                    placeholder-gray-500
                    focus:border-[#D6B643]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full
                    bg-transparent
                    border-b border-gray-500
                    pb-2
                    text-sm
                    outline-none
                    placeholder-gray-500
                    focus:border-[#D6B643]
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="
                    w-full
                    bg-transparent
                    border-b border-gray-500
                    pb-2
                    text-sm
                    outline-none
                    placeholder-gray-500
                    focus:border-[#D6B643]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  MESSAGE
                </label>
                <input
                  type="text"
                  placeholder="Tell us about your project"
                  className="
                    w-full
                    bg-transparent
                    border-b border-gray-500
                    pb-2
                    text-sm
                    outline-none
                    placeholder-gray-500
                    focus:border-[#D6B643]
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-4
                  inline-block
                  px-8 py-3
                  border border-[#1c1c1c]
                  text-xs tracking-widest
                  hover:bg-[#D6B643]
                  hover:border-[#D6B643]
                  hover:text-black
                  rounded-lg
                  transition-all
                "
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Form;
