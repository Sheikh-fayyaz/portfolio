import ContactForm from "../components/ContactForm";
import Paragraph from "../components/Paragraph";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Title from "../components/Title";

export default function MyContact() {
  return (
    <section className="skills section-padY pt-0" id="contact">
      <div className="container">
        <div className="primary-bg rounded-4 p-md-5 p-4">
          <div className="row justify-content-between">
            <div className="col-md-5 col-12">
              <Title
                content="Let’s work together!"
                alignX="d-flex justify-content-start"
              />
              <Paragraph content="I'm currently available to take on new projects! Feel free to reach out if you have an idea or project you'd like to discuss. You can contact me anytime, as I’m available 24/7. " />
              <ul class="list-unstyled contact-info-list-3 my-5">
                <li>
                  <a href="tel:+917416208245">+91 7416208245</a>
                </li>
                <li>
                  <a href="mailto:sheikhfayyaz0311@gmail.com">
                    sheikhfayyaz0311@gmail.com
                  </a>
                </li>
              </ul>

              <SocialIcons />
            </div>
            <div className="col-md-5 col-12">
            <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
