import React, { useState, useEffect } from "react";
import "./Projects.css";


export default function Projects() {
  const workData = {
    "categories": [
      {
        "id": "general",
        "name": "General",
        "projects": [
          {
            "name": "Hivision Foundation",
            "link": "http://www.hivisionfoundation.org/",
            "image": "assets/images/projects/general/hivision-foundation.webp"
          },
          {
            "name": "Seed Bird",
            "link": "https://seedbird.org/",
            "image": "assets/images/projects/general/seedbird-org.webp"
          },
          {
            "name": "Pragati Biotech",
            "link": "http://www.pragatibiotech.com/",
            "image": "assets/images/projects/general/pragati-biotech.webp"
          },
          {
            "name": "Royalton Hotel",
            "link": "https://www.royaltonhotel.in/",
            "image": "assets/images/projects/general/royalton-hotel.webp"
          },
          {
            "name": "Shantinath Granites",
            "link": "http://www.shantinathgranites.com/",
            "image": "assets/images/projects/general/shantinath-granites.webp"
          },
          {
            "name": "Sri MK Papers",
            "link": "https://www.srimkpapers.com/",
            "image": "assets/images/projects/general/sri-mk-papers.webp"
          },
          {
            "name": "Karachi Bakery",
            "link": "https://karachibakery.com/",
            "image": "assets/images/projects/general/karachi-bakery.webp"
          }
        ]
      },
      {
        "id": "construction",
        "name": "Construction",
        "projects": [
          {
            "name": "Sri Raja Constructions",
            "link": "http://www.srirajaconstructions.in/",
            "image": "assets/images/projects/real-estate/sri-raja-constructions.webp"
          },
          {
            "name": "Future Star Investments",
            "link": "https://www.futurestarsinvestments.com/",
            "image": "assets/images/projects/real-estate/future-star-investments.webp"
          },
          {
            "name": "Devansh Constructions",
            "link": "https://devanshconstructions.com/",
            "image": "assets/images/projects/real-estate/devansh-constructions.webp"
          },
          {
            "name": "IRA Steels",
            "link": "https://irasteels.com/",
            "image": "assets/images/projects/real-estate/irasteels.webp"
          }
        ]
      },
      {
        "id": "healthcare",
        "name": "Healthcare",
        "projects": [
          {
            "name": "Acuralabs",
            "link": "https://www.acuralabs.in/",
            "image": "assets/images/projects/pharma/acuralabs.webp"
          },
          {
            "name": "Remedy Hospitals",
            "link": "https://www.remedyhospitals.in/",
            "image": "assets/images/projects/pharma/remedy-hospitals.webp"
          },
          {
            "name": "Southerngem Hospitals",
            "link": "https://www.southerngem.in/",
            "image": "assets/images/projects/pharma/southern-gem-hospitals.webp"
          },
          {
            "name": "Scalare Pharma",
            "link": "http://www.scalarepharma.com/",
            "image": "assets/images/projects/pharma/scalare-pharma.webp"
          }
        ]
      },
      {
        "id": "education",
        "name": "Education",
        "projects": [
          {
            "name": "Little Angels Schools",
            "link": "https://littleangelsschools.co.in/",
            "image": "assets/images/projects/education/little-angels-schools.webp"
          },
          {
            "name": "Matrix College",
            "link": "https://www.matrixcollege.ca/",
            "image": "assets/images/projects/education/matrix-college.webp"
          },
          {
            "name": "LD Overseas Education",
            "link": "http://www.ldoverseaseducation.com/",
            "image": "assets/images/projects/education/ldoverseas-education.webp"
          },
          {
            "name": "CBIT",
            "link": "http://cbit.org.in/",
            "image": "assets/images/projects/education/cbit.webp"
          },
          {
            "name": "OdinSchool",
            "link": "https://www.odinschool.com/",
            "image": "assets/images/projects/education/Odinschool.webp"
          },
          {
            "name": "Canary The School",
            "link": "https://www.canarytheschool.com/",
            "image": "assets/images/projects/education/canary-the-school.webp"
          },
          {
            "name": "JGI Schools",
            "link": "https://www.jgischools.in/index.php/",
            "image": "assets/images/projects/education/jgi-schools.webp"
          }
        ]
      }
    ]
  };
  
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
                 type="button" role="tab" aria-controls={`${category.name}-panel`} aria-selected= {`${ activeTab === category.id ? "true" : "false" }`}
                className={`nav-link rounded-top-4 py-md-3 px-md-5 px-3 py-2 ${ activeTab === category.id ? "active" : "" }`}
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
                id={`${category.id}-panel`} role="tabpanel" aria-labelledby={`${category.id}-tab`}
                className={`tab-pane fade ${ activeTab === category.id ? "show active" : "" }`}
              >
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
                    </button>
                    <button id={`next-${category.id}`} className="arroIcons" aria-label="Next Projects">
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
