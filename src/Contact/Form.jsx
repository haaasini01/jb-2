import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import img1 from "../assets/contact.png";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^[\+\d\s\-\(\)\.]{6,30}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

function Form() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Popup state
  const [toast, setToast] = useState({
    show: false,
    type: "success", // "success" | "error"
    message: "",
  });

  // Auto-hide popup after 3s
  useEffect(() => {
    if (!toast.show) return;

    // only auto-close success toasts
    if (toast.type !== "success") return;

    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.show, toast.type]);


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

    if (isSending) return;

    const result = schema.safeParse(formData);
    if (!result.success) {
      setToast({
        show: true,
        type: "error",
        message: result.error.errors[0].message,
      });
      return;
    }

    try {
      setIsSending(true);

      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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

      setToast({
        show: true,
        type: "success",
        message: "Message sent successfully. Our team will contact you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);

      setToast({
        show: true,
        type: "error",
        message: "Message failed to send. Please email us at customercare@jayessbauences.com",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#d3d0cb] py-12 md:py-16 relative">
      {/* Custom Popup */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div
            className={`w-[320px] sm:w-[360px] md:w-[400px]
              px-6 py-4 rounded-2xl shadow-xl border text-base font-medium 
              flex items-start justify-between gap-4
              ${
                toast.type === "success"
                  ? "bg-green-50 border-green-300 text-green-800"
                  : "bg-red-50 border-red-300 text-red-800"
              }`}
          >
            {/* message wraps properly */}
            <p className="leading-snug break-words whitespace-normal">
              {toast.message}
            </p>

            {/* user closes manually */}
            <button
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              className="text-2xl leading-none opacity-60 hover:opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      )}

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
                  className="w-full bg-transparent focus:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
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
                  className="w-full bg-transparent focus:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
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
                  className="w-full bg-transparent focus:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
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
                  className="w-full bg-transparent focus:bg-transparent border-b border-gray-500 pb-2 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`mt-4 inline-flex items-center justify-center gap-2 px-8 py-3
                  border text-xs tracking-widest rounded-lg transition-all
                  ${
                    isSending
                      ? "bg-gray-400 border-gray-400 text-black cursor-not-allowed opacity-70"
                      : "border-[#1c1c1c] hover:bg-[#D6B643] hover:border-[#D6B643] hover:text-black cursor-pointer"
                  }`}
              >
                {isSending && (
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                )}
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Form;
