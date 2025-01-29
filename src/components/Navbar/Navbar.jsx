import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
  <div className="container justify-content-md-center justify-content-end">
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}


    <div className="menu-bar d-lg-none navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <button>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
               </div>


    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link px-0 active" href="#">Home</a>
        <a className="nav-link px-0" href="#about-me">About Me</a>
        <a className="nav-link px-0" href="#skills">Skills</a>
        <a className="nav-link px-0" href="#projects">Projects</a>
        <a className="nav-link px-0" href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}
