import React, { useState, useEffect } from "react";
import workData from "../../Data/Projects.json";
import "./Projects.css";

export default function Projects() {
  const [activeTab, setActive] = useState("general");
  const handleTabClick = (id) => {
    setActive(id);
  };

  const [activeAccordion, setActiveAccordion] = useState("general");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  // 🎯 Initialize slider inside React useEffect
  useEffect(() => {
    const initializeSlider = (sliderContainerId, nextButtonId, prevButtonId) => {
      const sliderContainer = document.getElementById(sliderContainerId);
      if (!sliderContainer) return;

      const slides = sliderContainer.querySelectorAll(".sItem");
      const nextButton = document.getElementById(nextButtonId);
      const prevButton = document.getElementById(prevButtonId);

      if (!nextButton || !prevButton) return;

      let currentIndex = 0;

      const calculateSlideWidth = () => {
        return slides.length > 0
          ? slides[0].offsetWidth + parseInt(window.getComputedStyle(slides[0]).marginRight)
          : 0;
      };

      const scrollToCurrentSlide = () => {
        const slideWidth = calculateSlideWidth();
        sliderContainer.scrollTo({
          left: currentIndex * slideWidth,
          behavior: "smooth",
        });
      };

      const updateCurrentIndex = () => {
        const slideWidth = calculateSlideWidth();
        currentIndex = Math.round(sliderContainer.scrollLeft / slideWidth);
      };

      nextButton.addEventListener("click", () => {
        updateCurrentIndex();
        if (currentIndex < slides.length - 1) {
          currentIndex++;
          scrollToCurrentSlide();
        }
      });

      prevButton.addEventListener("click", () => {
        updateCurrentIndex();
        if (currentIndex > 0) {
          currentIndex--;
          scrollToCurrentSlide();
        }
      });

      sliderContainer.addEventListener("scroll", () => {
        clearTimeout(sliderContainer.scrollTimeout);
        sliderContainer.scrollTimeout = setTimeout(() => {
          updateCurrentIndex();
        }, 100);
      });

      window.addEventListener("resize", () => {
        const slideWidth = calculateSlideWidth();
        sliderContainer.scrollTo({
          left: currentIndex * slideWidth,
          behavior: "auto",
        });
      });

      // Cleanup event listeners when component unmounts
      return () => {
        nextButton.removeEventListener("click", () => {});
        prevButton.removeEventListener("click", () => {});
        sliderContainer.removeEventListener("scroll", () => {});
        window.removeEventListener("resize", () => {});
      };
    };

    // 🎯 Attach sliders dynamically
    workData.categories.forEach((category, index) => {
      initializeSlider(`sContainer-${category.id}`, `next-${category.id}`, `prev-${category.id}`);
    });

  }, []); // Run only once after component mounts

  return (
    <>
      {/* Desktop View */}
      <div className="d-md-block d-none">
        <nav>
          <div
            className="nav nav-tabs border-bottom-0 justify-content-md-center flex-nowrap"
            id="nav-tab"
            role="tablist"
          >
            {workData.categories.map((category) => (
              <button
                key={category.id}
                className={`nav-link rounded-top-4 py-md-3 px-md-5 px-3 py-2 ${
                  activeTab === category.id ? "active" : ""
                }`}
                onClick={() => handleTabClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>
        <div className="works-content-area p-5 rounded-4 primary-bg">
          <div className="tab-content w-100">
            {workData.categories.map((category) => (
              <div
                key={category.id}
                className={`tab-pane fade ${
                  activeTab === category.id ? "show active" : ""
                }`}
              >
                <div className="row pb-md-0 pb-3">
                  {category.projects.map((project) => (
                    <div key={project.name} className="col-md-3 col-6 skills-widget mb-md-4">
                      <a href={project.link} target="_blank" rel="noreferrer nofollow" className="skill-item text-center">
                        <div className="skill-inner p-4 rounded-4 mb-4">
                          <div className="projectImg rounded-3 overflow-hidden">
                            <img src={project.image} className="w-100" loading="lazy" alt={project.name} />
                          </div>
                        </div>
                        <div className="btn link-button bg-transparent py-0 px-1 mx-auto d-block">
                          <small>{project.name}</small>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Accordion View */}
      <div className="d-md-none d-block project-acc">
        <div className="accordion tj-faq mx-1" id="faqOne">
          {workData.categories.map((category) => (
            <div className="accordion-item" key={category.id}>
              <button
                className={`faq-title ${activeAccordion === category.id ? "" : "collapsed"}`}
                onClick={() => toggleAccordion(category.id)}
              >
                {category.name}
              </button>
              <div
                id={`faq-${category.id}`}
                className={`accordion-collapse collapse ${activeAccordion === category.id ? "show" : ""}`}
                data-bs-parent="#faqOne"
              >
                <div className="accordion-body faq-text pt-0">
                  <div className="row sContainer pb-md-0 pb-3" id={`sContainer-${category.id}`}>
                    {category.projects.map((project) => (
                      <div className="col-md-3 col-6 skills-widget sItem mb-md-4" key={project.name}>
                        <a href={project.link} target="_blank" rel="noreferrer nofollow" className="skill-item text-center">
                          <div className="skill-inner p-3 rounded-4 mb-4">
                            <div className="projectImg rounded-3 overflow-hidden">
                              <img src={project.image} className="w-100" loading="lazy" alt={project.name} />
                            </div>
                          </div>
                          <div className="btn link-button bg-transparent py-0 px-1 mx-auto d-block">
                            <small>{project.name}</small>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="d-md-none mt-2 d-flex justify-content-end">
                    <button id={`prev-${category.id}`} className="arroIcons me-2">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button id={`next-${category.id}`} className="arroIcons">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
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
