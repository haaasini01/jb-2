import Accordion from "./Accordion";
import Container from "../common/Container";
import { motion } from "framer-motion";

function FAQSection() {
  const faqs = [
    {
      q: "What services does Jayess Bauences offer?",
      a: "We provide end-to-end interior design services including residential, commercial, space planning, 3D visualization, and turnkey execution.",
    },
    {
      q: "Do you handle complete turnkey projects?",
      a: "Yes. From design to execution, vendor coordination, and final handover — we manage the entire process.",
    },
    {
      q: "Can services be customized based on budget?",
      a: "Absolutely. Every project is tailored to your requirements, timeline, and budget without compromising design intent.",
    },
  ];

  return (
    <section className="bg-[#F4F1EC] py-12 md:py-20 lg:py-28">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-[#D6B643] mb-3 md:mb-4">
            Need clarity?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1c1c1c] mb-4 md:mb-6">
            Frequently Asked <span className="text-[#D6B643]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#1c1c1c]/70 max-w-2xl">
            Answers to common questions about our process, services, and approach.
          </p>
        </motion.div>

        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="
              bg-[#F4F1EC]
              rounded-3xl
              border border-[#cfc7bb]
              px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16
              space-y-8 md:space-y-10
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
            "
          >
            {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <Accordion
                question={item.q}
                answer={item.a}
              />

              {/* Divider */}
              {index !== faqs.length - 1 && (
                <div className="mt-10 h-[1px] w-full bg-[#d9d2c4]" />
              )}
            </motion.div>
          ))}

          </div>
        </motion.div>

      </Container>
    </section>
  );
}

export default FAQSection;
