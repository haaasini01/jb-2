import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import img1 from "../assets/contact.png";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^[\+\d\s\-\(\)\.]{6,30}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

function Form() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }

    try {
      const BACKEND_URL = import.meta.env.BACKEND_URL;
      const res = await fetch(`${BACKEND_URL}/user/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phoneNo: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Message sent successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Error sending message");
      console.error(err);
      alert(err.message || "Error sending message");
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#d3d0cb] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">

          {/* LEFT : IMAGE */}
          <div
            className={`
              lg:col-span-6
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              pointer-events-none
            `}
          >

            <div className="relative w-full max-w-lg mx-auto aspect-[4.5/5] overflow-hidden">
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
              relative z-10
              lg:col-span-6
              transition-all duration-700 delay-200 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            <div className="text-center lg:text-left">
              <span className="block text-xs tracking-widest text-gray-600 mb-3">
                GET IN TOUCH
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1c1c1c] mb-6 md:mb-8">
                Connect with us!
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">

              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent focus:bg-transparent autofill:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent focus:bg-transparent autofill:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-transparent focus:bg-transparent autofill:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wide text-gray-600 mb-2">
                  MESSAGE
                </label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent focus:bg-transparent autofill:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-block px-8 py-3 border border-[#1c1c1c] text-xs tracking-widest rounded-lg hover:bg-[#D6B643] hover:border-[#D6B643] hover:text-black cursor-pointer transition-all"
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
