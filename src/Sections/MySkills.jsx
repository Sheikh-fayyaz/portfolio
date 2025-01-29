import Skills from "../components/Skills/Skills";
import Title from "../components/Title";

export default function MySkills() {
  return (
    <section className="skills section-padY pt-0" id="skills">
      <div className="container">
        <Title
          content="My Skills"
          alignX="d-flex justify-content-center"
        />
        <Skills />
      </div>
    </section>
  );
}
