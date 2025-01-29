export default function DownloadButton() {
  return (
    <a
      href="assets/pdf/fayyaz_resume_frontend_developer.pdf"
      target="_blank"
      className="primary-btn header-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill"
      download=""
    >
      Download CV
      <span className="icon_box">
        <i className="fa-solid fa-arrow-down icon_first"></i>
        <i className="fa-solid fa-arrow-down icon_second"></i>
      </span>
    </a>
  );
}
