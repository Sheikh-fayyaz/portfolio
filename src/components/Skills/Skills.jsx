import "./Skills.css";
import SKillsData from "../../Data/Skills.json";

export default function Skills() {
  return (
    <div className="row justify-content-center">
      {SKillsData.map(({ id, title, logo, number }) => {
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
