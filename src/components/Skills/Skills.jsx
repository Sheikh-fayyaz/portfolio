import "./Skills.css";

// ✅ FIX: Dynamically import all images
const images = import.meta.glob('../../assets/images/icons/*.svg', { eager: true });

export default function Skills() {
  const skillsData = [
    { id: "1", title: "HTML5", logo: images["../../assets/images/icons/html5.svg"].default, number: "92%" },
    { id: "2", title: "CSS3", logo: images["../../assets/images/icons/css3.svg"].default, number: "90%" },
    { id: "3", title: "SASS", logo: images["../../assets/images/icons/sass.svg"].default, number: "85%" },
    { id: "4", title: "Bootstrap 5", logo: images["../../assets/images/icons/bootstrap5.svg"].default, number: "90%" },
    { id: "5", title: "Tailwind", logo: images["../../assets/images/icons/tailwind.svg"].default, number: "90%" },
    { id: "6", title: "JavaScript", logo: images["../../assets/images/icons/javascript.svg"].default, number: "85%" },
    { id: "7", title: "Jquery", logo: images["../../assets/images/icons/jquery2.svg"].default, number: "80%" },
    { id: "8", title: "ReactJS", logo: images["../../assets/images/icons/react.svg"].default, number: "85%" },
    { id: "9", title: "HubSpot", logo: images["../../assets/images/icons/hubspot-1.svg"].default, number: "90%" },
    { id: "10", title: "Figma", logo: images["../../assets/images/icons/figma.svg"].default, number: "70%" },
    { id: "11", title: "Photoshop", logo: images["../../assets/images/icons/photoshop.svg"].default, number: "75%" }
  ];

  return (
    <div className="row justify-content-center">
      {skillsData.map(({ id, title, logo, number }) => (
        <div className="col-md-2 col-4" key={id}>
          <div className="skill-card text-center mb-4">
            <div className="skill-card-inner primary-bg p-md-4 p-3 rounded-4 mb-3">
              <img
                src={logo}  // ✅ Use imported image path
                loading="lazy"
                className="d-block mx-auto mb-md-4 mb-3"
                alt={title}
              />
              <small className="number opacity-75">{number}</small>
            </div>
            <p className="d-md-block d-none">{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
