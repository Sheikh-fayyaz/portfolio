import Education from "../components/Education/ExperienceEducation";
import Title from "../components/Title";

export default function MyEducation() {
  return (
    <section className="skills section-padY pt-0">
      <div className="container">
        <Title
          content="Education & Work Experience"
          alignX="d-flex justify-content-center"
        />
        <Education/>
      </div>
    </section>
  );
}
