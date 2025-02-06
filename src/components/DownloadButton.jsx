import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function DownloadButton() {
  return (
    <a
      href="src/assets/pdf/fayyaz_resume_frontend_developer.pdf"
      target="_blank"
      className="primary-btn header-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill"
      download=""
      rel="noopener noreferrer"
    >
      Download CV
      <span className="icon_box">
        <FontAwesomeIcon icon={faArrowDown} className="icon_first" />
        <FontAwesomeIcon icon={faArrowDown} className="icon_second" />
      </span>
    </a>
  );
}
