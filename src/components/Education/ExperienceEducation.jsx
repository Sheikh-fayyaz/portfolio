import "./Education.css";
import ExperienceData from "../../Data/Experience.json";
import EducationData from "../../Data/Education.json";

export default function Education() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="education-holder rounded-4 primary-bg p-md-5 p-4 mb-md-0 mb-4">
            <h6 className="education-title fw-semibold text-uppercase mb-md-4 mb-3 primary-color">
              Experience
            </h6>
            <div className="content-holder">
              <div className="content-item">
                <div className="works-content-box">
                  {ExperienceData.map((data) => {
                    return (
                      <div className="works-item work-item1" key={data.id}>
                        <h5 className="title text-uppercase">{data.designation}</h5>
                        <h6 className="sub-title">{data.company}</h6>
                        <span className="opacity-50">
                          {data.employmentType} | {data.duration}{" "}
                        </span>

                        <ul className="mt-3 ps-0">
                          {data.responsibilities.map((point, index) => {
                            return <li key={index}>{point}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="education-holder rounded-4 primary-bg p-md-5 p-4">
            <h6 className="education-title fw-semibold text-uppercase mb-md-4 mb-3 primary-color">
              Education
            </h6>
            <div className="content-holder">
              <div className="content-item">
                <div className="works-content-box">
                  {EducationData.map((data) => {
                    return (
                      <div className="works-item work-item1" key={data.id}>
                        <h5 className="title text-uppercase">{data.degree}</h5>
                        <h6 className="sub-title">{data.institution}</h6>
                        <span className="opacity-50">{data.duration}</span>

                        <ul className="mt-3 ps-0">
                          {data.highlights.map((point, index) => {
                            return <li key={index}>{point}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
