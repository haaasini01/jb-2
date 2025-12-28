import Description from "./Description";
import Container from "../common/Container";
import Why from "./Why";
import Why2 from "./Why2";
import DesignProcess from "./DesignProcess";

function Home() {
  return (
    <>
      <Description />
      <section id="next-section">
        <Why />
      </section>
      <Why2/>
      <DesignProcess/>
      
    </>
  );
}

export default Home;
