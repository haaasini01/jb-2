import Container from "../common/Container";
import { motion } from "framer-motion";

// images
import s1 from "../assets/6.jpg";
import s2 from "../assets/10.jpg";
import s3 from "../assets/8.jpg";
import s4 from "../assets/1.jpg";
import s5 from "../assets/3.jpg";
import s6 from "../assets/5.jpg";
import bg from "../assets/8.jpg";

const services = [
  {
    title: "Luxury Residential Design",
    desc:
      "Personalized interior concepts crafted around your lifestyle, preferences, and everyday comfort. We focus on balance, material harmony, and timeless elegance.",
    img: s1,
  },
  {
    title: "Commercial Interiors",
    desc:
      "Purpose-driven spaces designed to support productivity, brand identity, and long-term functionality across offices and retail environments.",
    img: s2,
  },
  {
    title: "Space Planning & Styling",
    desc:
      "Thoughtful layouts and refined styling that optimize flow, proportion, and visual clarity — ensuring every square foot is intentional.",
    img: s3,
  },
  {
    title: "3D Visualization",
    desc:
      "High-quality renders and walkthroughs that help you visualize the design before execution and make confident decisions early.",
    img: s4,
  },
  {
    title: "Smart Automation Services",
    desc:
      "Integrated smart solutions for lighting, security, and climate control — enhancing comfort without overwhelming the space.",
    img: s5,
  },
  {
    title: "Turnkey Project Management",
    desc:
      "End-to-end execution covering design coordination, vendor management, and on-site supervision — delivered with precision.",
    img: s6,
  },
];

function Info() {
  return (
    <section className="relative bg-[#1c1c1c] py-28 text-[#E6E1D9] overflow-hidden">

      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-[420px] bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-[#1c1c1c]/40 to-[#1c1c1c]" />

      <Container className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4">
            OUR <span className="text-[#D6B643]">SERVICES</span>
          </h1>

          <p className="text-base text-[#E6E1D9]/70 max-w-xl mx-auto">
            Thoughtfully crafted interior solutions designed to elevate how you live and work.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {services.map((service, i) => {
            const fromLeft = i % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
                className="group"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                  <span className="text-[#D6B643]">— </span>
                  {service.title}
                </h2>

                <p className="text-base text-[#E6E1D9]/75 leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default Info;
