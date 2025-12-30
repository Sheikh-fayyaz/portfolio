import Paragraph from "../components/Paragraph"
import Title from "../components/Title";
import ContactButton from "../components/ContactButton";

export default function AboutMe() {
  return (
    <section className="about-me section-padY" id="about-me">
      <div className="container">
      <div className="primary-bg p-md-5 p-4 rounded-4 aboutBg">
        <div className="row justify-content-end">
          <div className="col-lg-7 col-md-7">
            <Title content="About Me"/>
            <Paragraph mb="mb-md-5 mb-4" content="Frontend Developer with 5+ years of experience building fast, responsive, and scalable web applications. Strong expertise in HTML5, CSS3, SASS, JavaScript, Bootstrap 5, Tailwind CSS, and modern frameworks like React.js and Next.js. Experienced in HubSpot CMS and Strapi CMS, including HubL, HubDB, forms, CTAs, and CRM integrations. Proven in converting Figma designs to pixel-perfect, accessible, and SEO-optimized interfaces, with hands-on experience in performance optimization, A/B testing, API integration, and deployments using Git, GitHub, and Vercel." />
            <ContactButton/>
          </div>

        </div>
        </div>
      </div>
      </section>
  )
}
