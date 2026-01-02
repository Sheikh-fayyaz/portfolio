import "./Education.css";

export default function Education() {
  const ExperienceData = [
    {
      "id":"1",
      "designation": "Senior Frontend Developer",
      "company": "Greycampus Edutech",
      "employmentType": "Full-time",
      "duration": "Jul 2023 to Dec 2025",
      "responsibilities": [
        "Designed and developed scalable React.js and Next.js applications using reusable, modular UI components.",
"Built and customized HubSpot CMS themes, templates, and modules using HubL, HTML, CSS, and JavaScript via the Design Manager.",
"Implemented dynamic content and marketing features in HubSpot CMS by customizing themes, modules, and integrating HubL with JavaScript.",
"Converted Figma, Sketch, and Adobe XD designs into pixel-perfect, responsive, and accessible user interfaces.",
"Implemented A/B testing using Statsig and HubSpot tools to optimize layouts, content, and conversion rates.",
"Developed SEO-friendly landing pages using HubSpot Forms, CTAs, and CRM integrations for efficient lead capture.",
"Utilized HubDB to manage structured data and generate dynamic pages for events, listings, and content tables.",
"Applied performance optimizations such as code splitting, lazy loading, and component memoization to improve page speed.",
"Ensured WCAG compliance, semantic HTML usage, and cross-browser compatibility across all projects.",
"Collaborated closely with design, marketing, and sales teams to align technical implementation with business objectives.",
"Managed version control and deployments using Git, GitHub, and Vercel."
]

    },
    {
      "id":"2",
      "designation": "Web Designer",
      "company": "Adroit Infoactive Services",
      "employmentType": "Full-time",
      "duration": "March 2021 to Jul 2023",
      "responsibilities": [
        "Built responsive, mobile-first web interfaces using HTML5, CSS3, SASS, Bootstrap 5, Tailwind CSS, and JavaScript.",
"Translated Figma designs and visual mockups into accessible, pixel-perfect front-end code.",
"Met with clients to gather website requirements, discuss feedback, and present functional prototypes.",
"Integrated REST APIs to fetch and display dynamic data, enhancing application interactivity.",
"Ensured cross-browser compatibility so websites function consistently across all major browsers.",
"Optimized website performance and load times using techniques such as lazy loading and asset optimization.",
"Applied SEO best practices using semantic HTML and optimized metadata to improve search engine rankings.",
"Collaborated with designers and back-end developers to deliver seamless and user-friendly digital experiences.",
"Tested, debugged, and resolved front-end issues to ensure smooth functionality and reliability.",
"Maintained strong brand consistency and visual standards across all web projects.",
]

    },
    {
      "id":"3",
      "designation": "Junior Frontend/UI Developer",
      "company": "Ziraff Technologies",
      "employmentType": "Full-time",
      "duration": "Jun 2020 to Dec 2020",
      "responsibilities": [
        "Converted PSD design files into accurate, pixel-perfect HTML and CSS templates using best practices.",
"Customized pre-built website themes to align with unique branding and design requirements.",
"Assisted in integrating images, icons, and content into new or existing web pages.",
"Learned and applied foundational UI/UX principles and web graphic design concepts.",
"Performed QA, basic site testing, and bug reporting to support senior team members.",
"Helped maintain component and style consistency across all delivered web content.",
]

    }
  ];

  const EducationData = [
   
    {
      "id":"1",
      "degree": "B.Tech CSE",
      "institution": "Jawaharlal Nehru Technological University (JNTUH)",
      "duration": "2015 - 2018",
      "highlights": [
        "Comprehensive understanding of computer systems, software, and hardware.",
        "Proficiency in programming languages like C, Java, Python, and more.",
        "Knowledge of data structures, algorithms, and database management systems.",
        "Familiarity with operating systems, computer networks, and cybersecurity principles.",
        "Experience in software development, web development, and mobile application development.",
        "Exposure to emerging technologies like AI, ML, and Cloud Computing.",
        "Strong problem-solving, analytical, and coding skills."
      ]
    },
    {
      "id":"2",
      "degree": "Diploma in IT",
      "institution": "Maulana Azad National Urdu University, Hyderabad (MANUU)",
      "duration": "2012 - 2015",
      "highlights": [
        "Fundamental knowledge of computer systems, software, and hardware.",
        "Basic programming skills in languages like C, Java, or Python.",
        "Understanding of networking concepts and internet technologies.",
        "Proficiency in database management and SQL queries.",
        "Introduction to web development using HTML, CSS, and JavaScript.",
        "Exposure to IT tools and applications for business and communication.",
        "Practical skills in troubleshooting and maintaining IT systems."
      ]
    }
  ];


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
                        <h5 className="title fw-semibold">{data.designation}</h5>
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
                        <h5 className="title fw-semibold">{data.degree}</h5>
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
