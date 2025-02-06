import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./Projects.css";

// ✅ FIX: Use relative path in import.meta.glob()
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
        ],
      },
      {
        id: "construction",
        name: "Construction",
        projects: [
          { name: "Sri Raja Constructions", link: "http://www.srirajaconstructions.in/", image: images["../../assets/images/projects/real-estate/sri-raja-constructions.webp"].default },
          { name: "Future Star Investments", link: "https://www.futurestarsinvestments.com/", image: images["../../assets/images/projects/real-estate/future-star-investments.webp"].default },
          { name: "Devansh Constructions", link: "https://devanshconstructions.com/", image: images["../../assets/images/projects/real-estate/devansh-constructions.webp"].default },
          { name: "IRA Steels", link: "https://irasteels.com/", image: images["../../assets/images/projects/real-estate/irasteels.webp"].default },
        ],
      },
    ],
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
      {/* Desktop View */}
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
    </>
  );
}
