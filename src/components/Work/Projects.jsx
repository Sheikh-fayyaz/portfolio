import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./Projects.css";

// ✅ Fix: Import all images dynamically using Vite's `import.meta.glob()`
const images = import.meta.glob('../../assets/images/projects/**/*.webp', { eager: true });

export default function Projects() {
  const workData = {
    categories: [
      {
        id: "general",
        name: "General",
        projects: [
          { name: "Hivision Foundation", link: "http://www.hivisionfoundation.org/", image: images["../../assets/images/projects/general/hivision-foundation.webp"].default },
          { name: "Seed Bird", link: "https://seedbird.org/", image: images["../../assets/images/projects/general/seedbird-org.webp"].default },
          { name: "Pragati Biotech", link: "http://www.pragatibiotech.com/", image: images["../../assets/images/projects/general/pragati-biotech.webp"].default },
          { name: "Royalton Hotel", link: "https://www.royaltonhotel.in/", image: images["../../assets/images/projects/general/royalton-hotel.webp"].default },
          { name: "Shantinath Granites", link: "http://www.shantinathgranites.com/", image: images["../../assets/images/projects/general/shantinath-granites.webp"].default },
          { name: "Sri MK Papers", link: "https://www.srimkpapers.com/", image: images["../../assets/images/projects/general/sri-mk-papers.webp"].default },
          { name: "Karachi Bakery", link: "https://karachibakery.com/", image: images["../../assets/images/projects/general/karachi-bakery.webp"].default },
          { name: "Tigeranalytics Clone", link: "https://40195053.hs-sites.com/tigeranalytics-home", image: images["../../assets/images/projects/general/tigeranalytics-home-clone.webp"].default },
        ]
      },
      {
        id: "construction",
        name: "Construction",
        projects: [
          { name: "Sri Raja Constructions", link: "http://www.srirajaconstructions.in/", image: images["../../assets/images/projects/real-estate/sri-raja-constructions.webp"].default },
          { name: "Future Star Investments", link: "https://www.futurestarsinvestments.com/", image: images["../../assets/images/projects/real-estate/future-star-investments.webp"].default },
          { name: "Devansh Constructions", link: "https://devanshconstructions.com/", image: images["../../assets/images/projects/real-estate/devansh-constructions.webp"].default },
          { name: "IRA Steels", link: "https://irasteels.com/", image: images["../../assets/images/projects/real-estate/irasteels.webp"].default },
        ]
      },
      {
        id: "healthcare",
        name: "Healthcare",
        projects: [
          { name: "Acuralabs", link: "https://www.acuralabs.in/", image: images["../../assets/images/projects/pharma/acuralabs.webp"].default },
          { name: "Remedy Hospitals", link: "https://www.remedyhospitals.in/", image: images["../../assets/images/projects/pharma/remedy-hospitals.webp"].default },
          { name: "Southerngem Hospitals", link: "https://www.southerngem.in/", image: images["../../assets/images/projects/pharma/southern-gem-hospitals.webp"].default },
          { name: "Scalare Pharma", link: "http://www.scalarepharma.com/", image: images["../../assets/images/projects/pharma/scalare-pharma.webp"].default },
        ]
      },
      {
        id: "education",
        name: "Education",
        projects: [
          { name: "Little Angels Schools", link: "https://littleangelsschools.co.in/", image: images["../../assets/images/projects/education/little-angels-schools.webp"].default },
          { name: "Matrix College", link: "https://www.matrixcollege.ca/", image: images["../../assets/images/projects/education/matrix-college.webp"].default },
          { name: "LD Overseas Education", link: "http://www.ldoverseaseducation.com/", image: images["../../assets/images/projects/education/ldoverseas-education.webp"].default },
          { name: "CBIT", link: "http://cbit.org.in/", image: images["../../assets/images/projects/education/cbit.webp"].default },
          { name: "OdinSchool", link: "https://www.odinschool.com/", image: images["../../assets/images/projects/education/Odinschool.webp"].default },
          { name: "Canary The School", link: "https://www.canarytheschool.com/", image: images["../../assets/images/projects/education/canary-the-school.webp"].default },
          { name: "JGI Schools", link: "https://www.jgischools.in/index.php/", image: images["../../assets/images/projects/education/jgi-schools.webp"].default },
        ]
      }
    ]
  };
  

  const [activeTab, setActive] = useState("general");
  const handleTabClick = (id) => setActive(id);
  const [activeAccordion, setActiveAccordion] = useState("general");
  const toggleAccordion = (id) => setActiveAccordion(activeAccordion === id ? "" : id);

  useEffect(() => {
    const initializeSlider = (sliderContainerId, nextButtonId, prevButtonId) => {
      const sliderContainer = document.getElementById(sliderContainerId);
      if (!sliderContainer) return;

      const slides = sliderContainer.querySelectorAll(".sItem");
      const nextButton = document.getElementById(nextButtonId);
      const prevButton = document.getElementById(prevButtonId);

      if (!nextButton || !prevButton) return;

      let currentIndex = 0;

      const calculateSlideWidth = () => slides.length > 0
        ? slides[0].offsetWidth + parseInt(window.getComputedStyle(slides[0]).marginRight)
        : 0;

      const scrollToCurrentSlide = () => {
        const slideWidth = calculateSlideWidth();
        sliderContainer.scrollTo({ left: currentIndex * slideWidth, behavior: "smooth" });
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
        sliderContainer.scrollTimeout = setTimeout(() => updateCurrentIndex(), 100);
      });

      window.addEventListener("resize", () => {
        const slideWidth = calculateSlideWidth();
        sliderContainer.scrollTo({ left: currentIndex * slideWidth, behavior: "auto" });
      });

      return () => {
        nextButton.removeEventListener("click", () => {});
        prevButton.removeEventListener("click", () => {});
        sliderContainer.removeEventListener("scroll", () => {});
        window.removeEventListener("resize", () => {});
      };
    };

    workData.categories.forEach((category) => {
      initializeSlider(`sContainer-${category.id}`, `next-${category.id}`, `prev-${category.id}`);
    });
  }, []);

  return (
    <>
      <div className="d-md-block d-none">
        <nav>
          <div className="nav nav-tabs border-bottom-0 justify-content-md-center flex-nowrap" id="nav-tab" role="tablist">
            {workData.categories.map((category) => (
              <button key={category.id} type="button"
                role="tab"
                aria-controls={`${category.name}-panel`}
                aria-selected={`${activeTab === category.id ? "true" : "false"}`}
                className={`nav-link rounded-top-4 py-md-3 px-md-5 px-3 py-2 ${activeTab === category.id ? "active" : ""}`}
                onClick={() => handleTabClick(category.id)}>
                {category.name}
              </button>
            ))}
          </div>
        </nav>
        <div className="works-content-area p-5 rounded-4 primary-bg">
          <div className="tab-content w-100">
            {workData.categories.map((category) => (
              <div key={category.id}
                id={`${category.id}-panel`} role="tabpanel" aria-labelledby={`${category.id}-tab`}
                className={`tab-pane fade ${activeTab === category.id ? "show active" : ""}`}>
                <div className="row pb-md-0 pb-3">
                  {category.projects.map((project) => (
                    <div key={project.name} className="col-md-3 col-6 skills-widget mb-md-4">
                      <a href={project.link} target="_blank" rel="noreferrer nofollow" className="skill-item text-center">
                        <div className="skill-inner p-4 rounded-4 mb-4">
                          <div className="projectImg rounded-3 overflow-hidden">
                            <img src={project.image} className="w-100" loading="lazy" alt={`${project.name} Website`} />
                          </div>
                        </div>
                        <div className="btn link-button bg-transparent py-0 px-1 mx-auto d-block">
                          <small>{project.name}
                            <span className="icon_box">
                              <FontAwesomeIcon icon={faArrowRight} className="icon_first" />
                              <FontAwesomeIcon icon={faArrowRight} className="icon_second" />
                            </span>
                          </small>
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

      <div className="d-md-none d-block project-acc">
        <div className="accordion tj-faq mx-1" id="faqOne">
          {workData.categories.map((category) => (
            <div className="accordion-item" key={category.id}>
              <button
                className={`faq-title d-flex justify-content-between ${activeAccordion === category.id ? "" : "collapsed"}`}
                onClick={() => toggleAccordion(category.id)}
              >
                {category.name}
                <FontAwesomeIcon icon={activeAccordion === category.id ? faMinus : faPlus} className="icon_first" />
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
                              <img src={project.image} className="w-100" loading="lazy" alt={`${project.name} Website`} />
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
                    <button id={`prev-${category.id}`} className="arroIcons me-2" aria-label="Previous Projects">
                      <i className="fa-solid fa-arrow-left"></i>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button id={`next-${category.id}`} className="arroIcons" aria-label="Next Projects">
                    <FontAwesomeIcon icon={faArrowRight} />
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
