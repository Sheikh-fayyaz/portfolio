import React, { useState } from "react";
import workData from "../../Data/Projects.json";
import "./Projects.css";
import "./logic.js";

export default function Projects() {
  const [activeTab, setActive] = useState("general");
  const handleTabClick = (id) => {
    setActive(id);
  };

  const [activeAccordion, setActiveAccordion] = useState("general");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <>
      <div className="d-md-block d-none">
        <nav>
          <div
            className="nav nav-tabs border-bottom-0 justify-content-md-center flex-nowrap"
            id="nav-tab"
            role="tablist"
          >
            {workData.categories.map((category) => {
              return (
                <button
                  key={category.id}
                  className={`nav-link rounded-top-4 py-md-3 px-md-5 px-3 py-2 ${
                    activeTab === category.id ? "active" : ""
                  }`}
                  id={`nav-${category.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${category.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${category.id}`}
                  onClick={() => handleTabClick(category.id)}
                  aria-selected={activeTab === category.id}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </nav>
        <div className="works-content-area p-5 rounded-4 primary-bg">
          <div className="tab-content w-100" id="nav-tabContent">
            {workData.categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className={`tab-pane fade ${
                    activeTab === category.id ? "show active" : ""
                  }`}
                  id={`nav-${category.id}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.id}-tab`}
                >
                  <div className="row pb-md-0 pb-3">
                    {category.projects.map((project, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="col-md-3 col-6 skills-widget mb-md-4"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer nofollow"
                              className="skill-item text-center"
                            >
                              <div className="skill-inner p-4 rounded-4 mb-4">
                                <div className="projectImg rounded-3 overflow-y-hidden">
                                  <img
                                    src={project.image}
                                    className="w-100"
                                    loading="lazy"
                                    alt={project.name}
                                  />
                                </div>
                              </div>
                              <div className="btn link-button bg-transparent py-0 px-1 mx-auto d-block">
                                <small>{project.name}</small>
                                <span className="icon_box">
                                  <i className="fa-solid fa-arrow-right icon_first"></i>
                                  <i className="fa-solid fa-arrow-right icon_second"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-md-none d-block project-acc">
  <div className="accordion tj-faq mx-1" id="faqOne">
    {workData.categories.map((category, index) => (
      <div className="accordion-item" key={category.id}>
        <button
          className={`faq-title ${index === 0 ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#faq-${category.id}`}
          aria-expanded={index === 0}
          onClick={() => toggleAccordion(category.id)}
          aria-controls={`faq-${category.id}`}
        >
          {category.name}
        </button>
        <div
          id={`faq-${category.id}`}
          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
          data-bs-parent="#faqOne"
        >
          <div className="accordion-body faq-text pt-0">
            <div
              className="row sContainer pb-md-0 pb-3"
              id={`sContainer${index}`}
            >
              {category.projects.map((project, index) => (
                <div
                  className="col-md-3 col-6 skills-widget sItem mb-md-4"
                  key={index}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="skill-item text-center"
                  >
                    <div className="skill-inner p-3 rounded-4 mb-4">
                      <div className="projectImg rounded-3 overflow-y-hidden">
                        <img
                          src={project.image}
                          className="w-100"
                          loading="lazy"
                          alt={project.name}
                        />
                      </div>
                    </div>
                    <div className="btn link-button bg-transparent py-0 px-1 mx-auto d-block">
                      <small>{project.name}</small>
                      <span className="icon_box">
                        <i className="fa-solid fa-arrow-right icon_first"></i>
                        <i className="fa-solid fa-arrow-right icon_second"></i>
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="d-md-none mt-2 d-flex justify-content-end">
              <a className="arroIcons me-2" id={`prev${index}`}>
                <i className="fa-solid fa-arrow-left"></i>
              </a>
              <a className="arroIcons" id={`next${index}`}>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  );
}
