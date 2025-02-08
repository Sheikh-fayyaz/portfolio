import "./Specialization.css";

export default function Specialization() {
  const SpecializationData = [
    {
      "id": "01",
      "title": "Wireframe to Code Conversion",
      "description": "I transform static wireframes or mockups into functional, pixel-perfect HTML/CSS/JavaScript interfaces, ensuring the design vision is accurately realized."
    },
    {
      "id": "02",
      "title": "Responsive Design",
      "description": "I develop websites that adapt seamlessly to all screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones."
    },
    {
      "id": "03",
      "title": "Performance Optimization",
      "description": "I boost website speed by optimizing code, enabling lazy loading, and improving Core Web Vitals like LCP and CLS for better UX and SEO."
    },
    {
      "id": "04",
      "title": "Cross-Browser Compatibility",
      "description": "I ensure the website or application functions flawlessly across all major browsers like Chrome, Firefox, Safari, and Edge by testing and debugging."
    },
    {
      "id": "05",
      "title": "CMS-Based Website",
      "description": "I develop websites using content management systems like WordPress or HubSpot CMS, allowing easy content updates and scalability."
    },
    {
      "id": "06",
      "title": "API Integrations",
      "description": "I connect frontend interfaces with backend APIs (REST or GraphQL) to fetch, display, and interact with dynamic data seamlessly."
    }
  ];
  
  return (
    <div className="row specialization-row flex-md-wrap flex-nowrap overflow-x-auto">
      {SpecializationData.map(({ id, title, description }) => {
        return (
          <div key={id} className="col-md-6 col-10">
            <div className="specialization-card p-md-4 p-3 rounded-3 mb-4 d-flex align-items-center">
              <div className="row">
                <div className="col-md-5 col-12">
                  <h5 className="mb-md-0 mb-4 fw-bold">
                    <span className="me-4 fw-semibold primary-color d-inline-block mb-3">{id}</span> <br/>{title}
                  </h5>
                </div>
                <div className="col-md-7 col-12">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}