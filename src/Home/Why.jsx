import Container from "../common/Container";

function Why() {
  return (
    <section className="bg-[#d3d0cb] py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">

          {/* Left side – smaller */}
          <div className="md:col-span-4">
            <span className="
              inline-flex items-center gap-2
              px-5 py-2
              border border-gray-500
              rounded-full
              text-sm tracking-wide
              text-gray-700
            ">
              <span className="w-2 h-2 bg-[#D6B643] rounded-full"></span>
              A NEW PERSPECTIVE ON INTERIORS
            </span>
          </div>

          {/* Right side – larger */}
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-[#D6B643]">Jayess Bauences</span>
              <br/>
              <span className="text-black">  | Interior Designers</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Jayess Bauences Interior Design delivers end-to-end interior solutions tailored to your budget, ensuring a smooth and seamless experience from start to finish. We focus on thoughtful design, quality execution, and attention to detail in every space.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Why;
