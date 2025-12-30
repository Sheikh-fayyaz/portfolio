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

    { id: "8", title: "ReactJS", logo: images["../../assets/images/icons/react.svg"].default, number: "85%" },
    { id: "9", title: "Next.js", logo: images["../../assets/images/icons/next-js.svg"].default, number: "75%" },
    { id: "10", title: "HubSpot", logo: images["../../assets/images/icons/hubspot-1.svg"].default, number: "90%" },
    { id: "11", title: "Strapi", logo: images["../../assets/images/icons/strapi.svg"].default, number: "90%" },

    { id: "12", title: "GitHub", logo: images["../../assets/images/icons/github.svg"].default, number: "90%" },
    { id: "13", title: "Vercel", logo: images["../../assets/images/icons/vercel.svg"].default, number: "90%" },
    { id: "14", title: "Statsig / AB Test", logo: images["../../assets/images/icons/statsig.svg"].default, number: "90%" },

    { id: "15", title: "Google Search Console", logo: images["../../assets/images/icons/gsc.svg"].default, number: "90%" },
    { id: "16", title: "PageSpeed Insights", logo: images["../../assets/images/icons/pagespeed-insights.svg"].default, number: "90%" },
    { id: "17", title: "Figma", logo: images["../../assets/images/icons/figma.svg"].default, number: "70%" },

    
  ];

  return (
    <div className="row justify-content-center">
      {skillsData.map(({ id, title, logo, number }) => (
        <div className="col-md-2 col-4" key={id}>
          <div className="skill-card text-center mb-4">
            <div className="skill-card-inner primary-bg p-md-4 p-3 rounded-4 mb-3">
              <div className="logo-holder bg-light rounded-circle mb-md-3 mb-2 d-flex justify-content-center mx-auto">
              <img
                src={logo}  // ✅ Use imported image path
                loading="lazy"
                className="d-block"
                alt={title}
                width={80}
                height={80}
              />
              </div>
              <p className="d-md-block d-none skill-title">{title}</p>
              {/* <small className="number opacity-75">{number}</small> */}
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}
