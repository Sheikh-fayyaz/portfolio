import "./Specialization.css";
import SpecializationData from "../../Data/Specialization.json";

export default function Specialization() {
  return (
    <div className="row specialization-row flex-md-wrap flex-nowrap overflow-x-auto">
      {SpecializationData.map(({ id, title, description }) => {
        return (
          <div key={id} className="col-md-6 col-10">
            <div className="specialization-card p-md-4 p-3 rounded-3 mb-4">
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