import './SocialIcons.css'
export default function SocialIcons() {
  return (
    <ul className="list-unstyled social-icons mb-0">
      <li>
        <a
          href="https://www.linkedin.com/in/sheikh-fayyaz-885256190"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Sheikh-fayyaz" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=917416208245&amp;text=Hi%20Fayyaz%2C%20I%20want%20to%20connect"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </li>
      <li>
        <a href="mailto:sheikhfayyaz0311@gmail.com" target="_blank">
          <i className="far fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href="tel:+917416208245" target="_blank">
          <i className="fas fa-phone"></i>
        </a>
      </li>
    </ul>
  );
}
