import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './SocialIcons.css';

export default function SocialIcons() {
  return (
    <ul className="list-unstyled social-icons mb-0">
      <li>
        <a
          href="https://www.linkedin.com/in/sheikh-fayyaz-885256190"
          target="_blank"
          aria-label="LinkedIn Profile"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Sheikh-fayyaz"
          target="_blank"
          aria-label="GitHub Profile"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=917416208245&amp;text=Hi%20Fayyaz%2C%20I%20want%20to%20connect"
          target="_blank"
          aria-label="Chat on WhatsApp"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
      <li>
        <a
          href="mailto:sheikhfayyaz0311@gmail.com"
          target="_blank"
          aria-label="Send Email"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a href="tel:+917416208245" target="_blank" aria-label="Call Me" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </li>
    </ul>
  );
}
