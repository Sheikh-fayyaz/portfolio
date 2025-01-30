import Paragraph from "../components/Paragraph"
import Title from "../components/Title";
import ContactButton from "../components/ContactButton";

export default function AboutMe() {
  return (
    <section className="about-me section-padY" id="about-me">
      <div className="container">
      <div className="primary-bg p-md-5 p-4 rounded-4">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <Title content="About Me"/>
            <Paragraph mb="mb-md-5 mb-4" content="I am a frontend developer with over 4 years of experience creating responsive, user-friendly web solutions. Proficient in HTML, CSS, JavaScript, Bootstrap, and HubSpot CMS, I specialize in turning designs into functional, high-performance websites. With expertise in SEO, UI development, and modern frameworks like React.js and Sass, I deliver tailored digital experiences that meet client needs. " />
            <ContactButton/>
          </div>
        </div>
        </div>
      </div>
      </section>
  )
}
