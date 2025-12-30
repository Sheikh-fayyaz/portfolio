import "./Specialization.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

export default function Specialization() {
  const SpecializationData = [
    {
      id: "01",
      title: "Figma & Wireframe to Code Conversion",
      description:
        "I translate Figma, Sketch, or Adobe XD designs into pixel-perfect, accessible, and maintainable HTML, CSS, and JavaScript, following clean code standards."
    },
    {
      id: "02",
      title: "Responsive & Mobile-First Design",
      description:
        "I build mobile-first, fully responsive layouts that deliver consistent user experiences across desktops, tablets, and smartphones."
    },
    {
      id: "03",
      title: "Performance Optimization",
      description:
        "I optimize applications for speed and Core Web Vitals (LCP, CLS, INP) using code splitting, lazy loading, and asset optimization to improve UX and SEO."
    },
    {
      id: "04",
      title: "Cross-Browser Compatibility",
      description:
        "I ensure seamless functionality across Chrome, Firefox, Safari, and Edge through thorough testing, debugging, and standards-compliant code."
    },
    {
      id: "05",
      title: "CMS-Driven & Marketing Websites",
      description:
        "I develop scalable, content-driven websites using HubSpot CMS and Strapi, leveraging HubL, HubDB, smart content, and reusable modules for easy updates."
    },
    {
      id: "06",
      title: "API Integration",
      description:
        "I integrate REST and GraphQL APIs to connect frontend interfaces with backend systems, enabling dynamic data rendering and interactive experiences."
    },
    {
      id: "07",
      title: "Component-Based UI Development",
      description:
        "I design reusable, modular UI components using React and Next.js to build scalable applications that are easy to maintain and extend."
    },
    {
      id: "08",
      title: "A/B Testing & Conversion Optimization",
      description:
        "I implement A/B testing using tools like Statsig and CMS experiments to validate UI changes and improve conversions through data-driven decisions."
    },
    {
      id: "09",
      title: "Accessibility & Semantic HTML",
      description:
        "I follow WCAG guidelines and semantic HTML practices to build inclusive, accessible web experiences for all users."
    },
    {
      id: "10",
      title: "SEO-Focused Frontend Development",
      description:
        "I apply frontend SEO best practices, including semantic markup, optimized metadata, performance tuning, and crawl-friendly page structures."
    }
  ];

  // 🔹 Group into rows (2 cards per row)
  const rows = [];
  for (let i = 0; i < SpecializationData.length; i += 2) {
    rows.push(SpecializationData.slice(i, i + 2));
  }

  return (
    <>
    <div className="specialization-wrapper position-relative d-md-block d-none">
      {/* Navigation buttons */}
      <div className="specialization-nav specialization-prev"></div>
      <div className="specialization-nav specialization-next"></div>

      <Swiper
        direction="vertical"
        modules={[Navigation, Mousewheel]}
        navigation={{
          prevEl: ".specialization-prev",
          nextEl: ".specialization-next"
        }}
        mousewheel={{ releaseOnEdges: true }}
        slidesPerView={3}          // ✅ 3 rows = 6 cards
        spaceBetween={24}
        className="specialization-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 }
        }}
      >
        {rows.map((row, index) => (
          <SwiperSlide key={index}>
            <div className="row">
              {row.map(({ id, title, description }) => (
                <div key={id} className="col-md-6 col-12">
                  {/* ✅ CARD DESIGN UNCHANGED */}
                  <div className="specialization-card p-md-4 p-3 rounded-3 mb-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-md-5 col-12">
                        <h5 className="mb-md-0 mb-4 fw-bold">
                          <span className="me-4 fw-semibold primary-color d-inline-block mb-3">
                            {id}
                          </span>
                          <br />
                          {title}
                        </h5>
                      </div>
                      <div className="col-md-7 col-12">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

<div className="d-md-none d-block">
     <div className="row specialization-row flex-nowrap overflow-x-auto">
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
    </div>
    </>

  );
}
