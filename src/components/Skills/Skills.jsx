import "./Skills.css";

export default function Skills() {
  const imgData = [
    {
      "id": "1",
      "title": "HTML5",
      "logo": "src/assets/images/icons/html5.svg",
      "number": "92%"
    },
    {
        "id": "2",
        "title": "CSS3",
        "logo": "src/assets/images/icons/css3.svg",
        "number": "90%"
      },
      {
        "id": "3",
        "title": "SASS",
        "logo": "src/assets/images/icons/sass.svg",
        "number": "85%"
      },
      {
        "id": "4",
        "title": "Bootstrap 5",
        "logo": "src/assets/images/icons/bootstrap5.svg",
        "number": "90%"
      },
      {
        "id": "5",
        "title": "Tailwind",
        "logo": "src/assets/images/icons/tailwind.svg",
        "number": "90%"
      },
      {
        "id": "6",
        "title": "JavaScript",
        "logo": "src/assets/images/icons/javascript.svg",
        "number": "85%"
      },
      {
        "id": "7",
        "title": "Jquery",
        "logo": "src/assets/images/icons/jquery2.svg",
        "number": "80%"
      },
      {
        "id": "8",
        "title": "ReactJS",
        "logo": "src/assets/images/icons/react.svg",
        "number": "85%"
      },
      {
        "id": "9",
        "title": "HubSpot",
        "logo": "src/assets/images/icons/hubspot-1.svg",
        "number": "90%"
      },
      {
        "id": "10",
        "title": "Figma",
        "logo": "src/assets/images/icons/figma.svg",
        "number": "70%"
      },
      {
        "id": "11",
        "title": "Photoshop",
        "logo": "src/assets/images/icons/photoshop.svg",
        "number": "75%"
      }
]

  
  return (
    <div className="row justify-content-center">
      {imgData.map(({ id, title, logo, number }) => {
        return (
          <div className="col-md-2 col-4" key={id}>
            <div className="skill-card text-center mb-4">
              <div className="skill-card-inner primary-bg p-md-4 p-3 rounded-4 mb-3">
                <img
                  src={logo}
                  className="d-block mx-auto mb-md-4 mb-3"
                  alt={title}
                />
                <small className="number opacity-75">{number}</small>
              </div>
              <p className="d-md-block d-none">{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
