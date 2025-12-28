import { useState } from "react";

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-8 text-left"
      >
        <span
          className={`
            text-lg font-medium leading-snug transition-colors
            ${open ? "text-[#D6B643]" : "text-[#1c1c1c]"}
            hover:text-[#D6B643] cursor-pointer
          `}
        >
          {question}
        </span>

        <span
          className={`
            text-2xl font-light transition-transform duration-300
            ${open ? "rotate-45 text-[#D6B643]" : "text-[#1c1c1c]"}
          `}
        >
          +
        </span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-base text-[#1c1c1c]/75 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
