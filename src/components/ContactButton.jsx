import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="primary-btn contact-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill"
      rel="noopener noreferrer"
    >
      Contact Me
      <span className="icon_box">
        <FontAwesomeIcon icon={faArrowRight} className="icon_first" />
        <FontAwesomeIcon icon={faArrowRight} className="icon_second" />
      </span>
    </a>
  );
}
