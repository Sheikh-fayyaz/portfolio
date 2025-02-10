import "./Education.css";

export default function Education() {
  const ExperienceData = [
    {
      "id":"1",
      "designation": "Frontend Developer",
      "company": "Greycampus Edutech",
      "employmentType": "Full-time",
      "duration": "Jul 2023 to Present",
      "responsibilities": [
        "Design and develop responsive and visually appealing modules, templates, and themes using HubSpot's Design Manager.",
        "Proficient in translating Figma designs into functional and responsive web pages.",
        "Ensure consistency in branding and user experience across all digital touchpoints.",
        "Implement SEO best practices within HubSpot CMS."
      ]
    },
    {
      "id":"2",
      "designation": "Web Designer",
      "company": "Adroit Infoactive Services",
      "employmentType": "Full-time",
      "duration": "March 2021 to Jul 2023",
      "responsibilities": [
        "Experience in creating and maintaining functional, attractive, and responsive websites.",
        "Determining the structure and design of web pages.",
        "Maintain and improve websites.",
        "Design mobile-based features.",
        "Collaborate with back-end developers and web designers to improve usability.",
        "Get feedback from, and build solutions for, users and customers.",
        "Ensure high-quality graphic standards and brand consistency.",
        "Developing features to enhance the user experience.",
        "Ensuring web design is optimized for smartphones.",
        "Optimizing web pages for maximum speed and scalability."
      ]
    },
    {
      "id":"3",
      "designation": "UI UX Developer",
      "company": "Ziraff Technologies",
      "employmentType": "Full-time",
      "duration": "Jun 2020 to Dec 2020",
      "responsibilities": [
        "Proficient in converting PSD designs into pixel-perfect HTML templates.",
        "Expertise in customizing website themes to meet specific design and functionality requirements.",
        "Assisting senior developers in the creation and integration of pages, images, icons, and components."
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
