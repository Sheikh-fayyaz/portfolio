import Title from "../components/Title";
import Specialization from "../components/Specialization/Specialization";

export default function MySpecialization() {
  return (
    <section className="specialization section-padY">
      <div className="container">
      <Title content="My Specialization" alignX="d-flex justify-content-center" />
        <Specialization />
      </div>
    </section>
  );
}
