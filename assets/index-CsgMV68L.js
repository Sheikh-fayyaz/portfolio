import{j as e,r as u,e as C,c as E}from"./vendor-CvTJruwG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function I(){return e.jsx("nav",{className:"navbar navbar-expand-lg mt-3",children:e.jsxs("div",{className:"container justify-content-md-center justify-content-end",children:[e.jsx("div",{className:"menu-bar d-lg-none navbar-toggler",children:e.jsxs("button",{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}),e.jsx("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarNavAltMarkup",children:e.jsxs("div",{className:"navbar-nav",children:[e.jsx("a",{className:"nav-link px-0 active",href:"#",children:"Home"}),e.jsx("a",{className:"nav-link px-0",href:"#about-me",children:"About Me"}),e.jsx("a",{className:"nav-link px-0",href:"#skills",children:"Skills"}),e.jsx("a",{className:"nav-link px-0",href:"#projects",children:"Projects"}),e.jsx("a",{className:"nav-link px-0",href:"#contact",children:"Contact"})]})})]})})}function P({smallText:i,bigText1:t,bigText2:n}){return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mb-md-3 mb-2 d-block fs-3",children:i}),e.jsxs("h1",{className:"grad-text",children:[e.jsx("span",{className:"hero-title",children:t})," ",e.jsx("br",{}),e.jsx("span",{className:"hero-title text-md-nowrap",children:n})]})]})}function k({imgPath:i,imgAlt:t,imgLoading:n,imgfetchpriority:r}){return e.jsx("img",{src:i,className:"w-100 rounded-4 first-fold-img",alt:t,loading:n,fetchpriority:r})}const M="/portfolio/assets/fayyaz-pic-DNHy-hKe.webp",z="/portfolio/assets/fayyaz-pic-mobile-BAbDjZ20.webp";function T(){return e.jsxs("a",{href:"assets/pdf/fayyaz_resume_frontend_developer.pdf",target:"_blank",className:"primary-btn header-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill",download:"",children:["Download CV",e.jsxs("span",{className:"icon_box",children:[e.jsx("i",{className:"fa-solid fa-arrow-down icon_first"}),e.jsx("i",{className:"fa-solid fa-arrow-down icon_second"})]})]})}function S(){return e.jsxs("ul",{className:"list-unstyled social-icons mb-0",children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.linkedin.com/in/sheikh-fayyaz-885256190",target:"_blank","aria-label":"LinkedIn Profile",children:e.jsx("i",{className:"fa-brands fa-linkedin-in"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/Sheikh-fayyaz",target:"_blank","aria-label":"GitHub Profile",children:e.jsx("i",{className:"fa-brands fa-github"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://api.whatsapp.com/send?phone=917416208245&text=Hi%20Fayyaz%2C%20I%20want%20to%20connect",target:"_blank","aria-label":"Chat on WhatsApp",children:e.jsx("i",{className:"fa-brands fa-whatsapp"})})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:sheikhfayyaz0311@gmail.com",target:"_blank","aria-label":"Send Email",children:e.jsx("i",{className:"far fa-envelope"})})}),e.jsx("li",{children:e.jsx("a",{href:"tel:+917416208245",target:"_blank","aria-label":"Call Me",children:e.jsx("i",{className:"fas fa-phone"})})})]})}function y({content:i,mb:t}){return e.jsx("p",{className:`${t}`,children:i})}function L(){return e.jsx("section",{className:"hero-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row justify-content-between align-items-center",children:[e.jsxs("div",{className:"col-lg-7 col-md-7 col-12 text-md-start text-center",children:[e.jsx(P,{smallText:"I am Sheikh Fayyaz",bigText1:"Next-Level",bigText2:"Frontend Developer."}),e.jsx("div",{className:"theme-bg-shadow position-relative d-md-none d-block px-4 my-4",children:e.jsx("div",{className:"primary-bg rounded-4",children:e.jsx(k,{imgPath:z,imgAlt:"sheikh fayyaz Frontend Developer",imgLoading:"eager"})})}),e.jsx(y,{mb:"mb-md-5 mb-3",content:"I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people."}),e.jsxs("div",{className:"d-flex align-items-center gap-4 flex-wrap justify-content-md-start justify-content-center",children:[e.jsx("div",{className:"",children:e.jsx(T,{})}),e.jsx("div",{className:"",children:e.jsx(S,{})})]})]}),e.jsx("div",{className:"col-lg-3 col-md-3 col-12",children:e.jsx("div",{className:"theme-bg-shadow position-relative d-md-block d-none",children:e.jsx(k,{imgPath:M,imgAlt:"sheikh fayyaz Frontend Developer",imgLoading:"eager"})})})]})})})}function g({content:i,alignX:t}){return e.jsx("div",{className:`${t}`,children:e.jsx("h2",{className:"section-title grad-text mb-md-5 mb-4",children:i})})}function _(){return e.jsxs("a",{href:"assets/pdf/fayyaz_resume_frontend_developer.pdf",target:"_blank",className:"primary-btn contact-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill",download:"",children:["Contact Me",e.jsxs("span",{className:"icon_box",children:[e.jsx("i",{className:"fa-solid fa-arrow-right icon_first"}),e.jsx("i",{className:"fa-solid fa-arrow-right icon_second"})]})]})}function F(){return e.jsx("section",{className:"about-me section-padY",id:"about-me",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"primary-bg p-md-5 p-4 rounded-4",children:e.jsx("div",{className:"row justify-content-end",children:e.jsxs("div",{className:"col-lg-7",children:[e.jsx(g,{content:"About Me"}),e.jsx(y,{mb:"mb-md-5 mb-4",content:"I am a frontend developer with over 4 years of experience creating responsive, user-friendly web solutions. Proficient in HTML, CSS, JavaScript, Bootstrap, and HubSpot CMS, I specialize in turning designs into functional, high-performance websites. With expertise in SEO, UI development, and modern frameworks like React.js and Sass, I deliver tailored digital experiences that meet client needs. "}),e.jsx(_,{})]})})})})})}function A(){const i=[{id:"01",title:"Wireframe to Code Conversion",description:"I transform static wireframes or mockups into functional, pixel-perfect HTML/CSS/JavaScript interfaces, ensuring the design vision is accurately realized."},{id:"02",title:"Responsive Design",description:"I develop websites that adapt seamlessly to all screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones."},{id:"03",title:"Performance Optimization",description:"I boost website speed by optimizing code, enabling lazy loading, and improving Core Web Vitals like LCP and CLS for better UX and SEO."},{id:"04",title:"Cross-Browser Compatibility",description:"I ensure the website or application functions flawlessly across all major browsers like Chrome, Firefox, Safari, and Edge by testing and debugging."},{id:"05",title:"CMS-Based Website",description:"I develop websites using content management systems like WordPress or HubSpot CMS, allowing easy content updates and scalability."},{id:"06",title:"API Integrations",description:"I connect frontend interfaces with backend APIs (REST or GraphQL) to fetch, display, and interact with dynamic data seamlessly."}];return e.jsx("div",{className:"row specialization-row flex-md-wrap flex-nowrap overflow-x-auto",children:i.map(({id:t,title:n,description:r})=>e.jsx("div",{className:"col-md-6 col-10",children:e.jsx("div",{className:"specialization-card p-md-4 p-3 rounded-3 mb-4",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-5 col-12",children:e.jsxs("h5",{className:"mb-md-0 mb-4 fw-bold",children:[e.jsx("span",{className:"me-4 fw-semibold primary-color d-inline-block mb-3",children:t})," ",e.jsx("br",{}),n]})}),e.jsx("div",{className:"col-md-7 col-12",children:e.jsx("p",{children:r})})]})})},t))})}function D(){return e.jsx("section",{className:"specialization section-padY",children:e.jsxs("div",{className:"container",children:[e.jsx(g,{content:"My Specialization",alignX:"d-flex justify-content-center"}),e.jsx(A,{})]})})}function H(){const i=[{id:"1",title:"HTML5",logo:"assets/images/icons/html5.svg",number:"92%"},{id:"2",title:"CSS3",logo:"assets/images/icons/css3.svg",number:"90%"},{id:"3",title:"SASS",logo:"assets/images/icons/sass.svg",number:"85%"},{id:"4",title:"Bootstrap 5",logo:"assets/images/icons/bootstrap5.svg",number:"90%"},{id:"5",title:"Tailwind",logo:"assets/images/icons/tailwind.svg",number:"90%"},{id:"6",title:"JavaScript",logo:"assets/images/icons/javascript.svg",number:"85%"},{id:"7",title:"Jquery",logo:"assets/images/icons/jquery2.svg",number:"80%"},{id:"8",title:"ReactJS",logo:"assets/images/icons/react.svg",number:"85%"},{id:"9",title:"HubSpot",logo:"assets/images/icons/hubspot-1.svg",number:"90%"},{id:"10",title:"Figma",logo:"assets/images/icons/figma.svg",number:"70%"},{id:"11",title:"Photoshop",logo:"assets/images/icons/photoshop.svg",number:"75%"}];return e.jsx("div",{className:"row justify-content-center",children:i.map(({id:t,title:n,logo:r,number:s})=>e.jsx("div",{className:"col-md-2 col-4",children:e.jsxs("div",{className:"skill-card text-center mb-4",children:[e.jsxs("div",{className:"skill-card-inner primary-bg p-md-4 p-3 rounded-4 mb-3",children:[e.jsx("img",{src:`/portfolio/${r}`,loading:"lazy",className:"d-block mx-auto mb-md-4 mb-3",alt:n}),e.jsx("small",{className:"number opacity-75",children:s})]}),e.jsx("p",{className:"d-md-block d-none",children:n})]})},t))})}function $(){return e.jsx("section",{className:"skills section-padY pt-0",id:"skills",children:e.jsxs("div",{className:"container",children:[e.jsx(g,{content:"My Skills",alignX:"d-flex justify-content-center"}),e.jsx(H,{})]})})}function B(){const i={categories:[{id:"general",name:"General",projects:[{name:"Hivision Foundation",link:"http://www.hivisionfoundation.org/",image:"assets/images/projects/general/hivision-foundation.webp"},{name:"Seed Bird",link:"https://seedbird.org/",image:"assets/images/projects/general/seedbird-org.webp"},{name:"Pragati Biotech",link:"http://www.pragatibiotech.com/",image:"assets/images/projects/general/pragati-biotech.webp"},{name:"Royalton Hotel",link:"https://www.royaltonhotel.in/",image:"assets/images/projects/general/royalton-hotel.webp"},{name:"Shantinath Granites",link:"http://www.shantinathgranites.com/",image:"assets/images/projects/general/shantinath-granites.webp"},{name:"Sri MK Papers",link:"https://www.srimkpapers.com/",image:"assets/images/projects/general/sri-mk-papers.webp"},{name:"Karachi Bakery",link:"https://karachibakery.com/",image:"assets/images/projects/general/karachi-bakery.webp"}]},{id:"construction",name:"Construction",projects:[{name:"Sri Raja Constructions",link:"http://www.srirajaconstructions.in/",image:"assets/images/projects/real-estate/sri-raja-constructions.webp"},{name:"Future Star Investments",link:"https://www.futurestarsinvestments.com/",image:"assets/images/projects/real-estate/future-star-investments.webp"},{name:"Devansh Constructions",link:"https://devanshconstructions.com/",image:"assets/images/projects/real-estate/devansh-constructions.webp"},{name:"IRA Steels",link:"https://irasteels.com/",image:"assets/images/projects/real-estate/irasteels.webp"}]},{id:"healthcare",name:"Healthcare",projects:[{name:"Acuralabs",link:"https://www.acuralabs.in/",image:"assets/images/projects/pharma/acuralabs.webp"},{name:"Remedy Hospitals",link:"https://www.remedyhospitals.in/",image:"assets/images/projects/pharma/remedy-hospitals.webp"},{name:"Southerngem Hospitals",link:"https://www.southerngem.in/",image:"assets/images/projects/pharma/southern-gem-hospitals.webp"},{name:"Scalare Pharma",link:"http://www.scalarepharma.com/",image:"assets/images/projects/pharma/scalare-pharma.webp"}]},{id:"education",name:"Education",projects:[{name:"Little Angels Schools",link:"https://littleangelsschools.co.in/",image:"assets/images/projects/education/little-angels-schools.webp"},{name:"Matrix College",link:"https://www.matrixcollege.ca/",image:"assets/images/projects/education/matrix-college.webp"},{name:"LD Overseas Education",link:"http://www.ldoverseaseducation.com/",image:"assets/images/projects/education/ldoverseas-education.webp"},{name:"CBIT",link:"http://cbit.org.in/",image:"assets/images/projects/education/cbit.webp"},{name:"OdinSchool",link:"https://www.odinschool.com/",image:"assets/images/projects/education/Odinschool.webp"},{name:"Canary The School",link:"https://www.canarytheschool.com/",image:"assets/images/projects/education/canary-the-school.webp"},{name:"JGI Schools",link:"https://www.jgischools.in/index.php/",image:"assets/images/projects/education/jgi-schools.webp"}]}]},[t,n]=u.useState("general"),r=a=>{n(a)},[s,o]=u.useState("general"),m=a=>{o(s===a?"":a)};return u.useEffect(()=>{const a=(l,d,c)=>{const p=document.getElementById(l);if(!p)return;const x=p.querySelectorAll(".sItem"),b=document.getElementById(d),f=document.getElementById(c);if(!b||!f)return;let h=0;const v=()=>x.length>0?x[0].offsetWidth+parseInt(window.getComputedStyle(x[0]).marginRight):0,N=()=>{const j=v();p.scrollTo({left:h*j,behavior:"smooth"})},w=()=>{const j=v();h=Math.round(p.scrollLeft/j)};return b.addEventListener("click",()=>{w(),h<x.length-1&&(h++,N())}),f.addEventListener("click",()=>{w(),h>0&&(h--,N())}),p.addEventListener("scroll",()=>{clearTimeout(p.scrollTimeout),p.scrollTimeout=setTimeout(()=>{w()},100)}),window.addEventListener("resize",()=>{const j=v();p.scrollTo({left:h*j,behavior:"auto"})}),()=>{b.removeEventListener("click",()=>{}),f.removeEventListener("click",()=>{}),p.removeEventListener("scroll",()=>{}),window.removeEventListener("resize",()=>{})}};i.categories.forEach((l,d)=>{a(`sContainer-${l.id}`,`next-${l.id}`,`prev-${l.id}`)})},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-md-block d-none",children:[e.jsx("nav",{children:e.jsx("div",{className:"nav nav-tabs border-bottom-0 justify-content-md-center flex-nowrap",id:"nav-tab",role:"tablist",children:i.categories.map(a=>e.jsx("button",{type:"button",role:"tab","aria-controls":`${a.name}-panel`,"aria-selected":`${t===a.id?"true":"false"}`,className:`nav-link rounded-top-4 py-md-3 px-md-5 px-3 py-2 ${t===a.id?"active":""}`,onClick:()=>r(a.id),children:a.name},a.id))})}),e.jsx("div",{className:"works-content-area p-5 rounded-4 primary-bg",children:e.jsx("div",{className:"tab-content w-100",children:i.categories.map(a=>e.jsx("div",{id:`${a.id}-panel`,role:"tabpanel","aria-labelledby":`${a.id}-tab`,className:`tab-pane fade ${t===a.id?"show active":""}`,children:e.jsx("div",{className:"row pb-md-0 pb-3",children:a.projects.map(l=>e.jsx("div",{className:"col-md-3 col-6 skills-widget mb-md-4",children:e.jsxs("a",{href:l.link,target:"_blank",rel:"noreferrer nofollow",className:"skill-item text-center",children:[e.jsx("div",{className:"skill-inner p-4 rounded-4 mb-4",children:e.jsx("div",{className:"projectImg rounded-3 overflow-hidden",children:e.jsx("img",{src:l.image,className:"w-100",loading:"lazy",alt:`${l.name} Website`})})}),e.jsx("div",{className:"btn link-button bg-transparent py-0 px-1 mx-auto d-block",children:e.jsx("small",{children:l.name})})]})},l.name))})},a.id))})})]}),e.jsx("div",{className:"d-md-none d-block project-acc",children:e.jsx("div",{className:"accordion tj-faq mx-1",id:"faqOne",children:i.categories.map(a=>e.jsxs("div",{className:"accordion-item",children:[e.jsx("button",{className:`faq-title ${s===a.id?"":"collapsed"}`,onClick:()=>m(a.id),children:a.name}),e.jsx("div",{id:`faq-${a.id}`,className:`accordion-collapse collapse ${s===a.id?"show":""}`,"data-bs-parent":"#faqOne",children:e.jsxs("div",{className:"accordion-body faq-text pt-0",children:[e.jsx("div",{className:"row sContainer pb-md-0 pb-3",id:`sContainer-${a.id}`,children:a.projects.map(l=>e.jsx("div",{className:"col-md-3 col-6 skills-widget sItem mb-md-4",children:e.jsxs("a",{href:l.link,target:"_blank",rel:"noreferrer nofollow",className:"skill-item text-center",children:[e.jsx("div",{className:"skill-inner p-3 rounded-4 mb-4",children:e.jsx("div",{className:"projectImg rounded-3 overflow-hidden",children:e.jsx("img",{src:l.image,className:"w-100",loading:"lazy",alt:`${l.name} Website`})})}),e.jsx("div",{className:"btn link-button bg-transparent py-0 px-1 mx-auto d-block",children:e.jsx("small",{children:l.name})})]})},l.name))}),e.jsxs("div",{className:"d-md-none mt-2 d-flex justify-content-end",children:[e.jsx("button",{id:`prev-${a.id}`,className:"arroIcons me-2","aria-label":"Previous Projects",children:e.jsx("i",{className:"fa-solid fa-arrow-left"})}),e.jsx("button",{id:`next-${a.id}`,className:"arroIcons","aria-label":"Next Projects",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]})})]},a.id))})})]})}function q(){return e.jsx("section",{className:"projects-section section-padY pt-0",id:"projects",children:e.jsxs("div",{className:"container",children:[e.jsx(g,{content:"My Recent Works",alignX:"d-flex justify-content-center"}),e.jsx(B,{})]})})}function W(){const i=[{id:"1",designation:"Frontend Developer",company:"Greycampus Edutech",employmentType:"Full-time",duration:"Jul 2023 to Present",responsibilities:["Design and develop responsive and visually appealing modules, templates, and themes using HubSpot's Design Manager.","Proficient in translating Figma designs into functional and responsive web pages.","Ensure consistency in branding and user experience across all digital touchpoints.","Implement SEO best practices within HubSpot CMS."]},{id:"2",designation:"Web Designer",company:"Adroit Infoactive Services",employmentType:"Full-time",duration:"March 2021 to Jul 2023",responsibilities:["Experience in creating and maintaining functional, attractive, and responsive websites.","Determining the structure and design of web pages.","Maintain and improve websites.","Design mobile-based features.","Collaborate with back-end developers and web designers to improve usability.","Get feedback from, and build solutions for, users and customers.","Ensure high-quality graphic standards and brand consistency.","Developing features to enhance the user experience.","Ensuring web design is optimized for smartphones.","Optimizing web pages for maximum speed and scalability."]},{id:"3",designation:"UI UX Developer",company:"Ziraff Technologies",employmentType:"Full-time",duration:"Jun 2020 to Dec 2020",responsibilities:["Proficient in converting PSD designs into pixel-perfect HTML templates.","Expertise in customizing website themes to meet specific design and functionality requirements.","Assisting senior developers in the creation and integration of pages, images, icons, and components."]}],t=[{id:"1",degree:"B.Tech CSE",institution:"Jawaharlal Nehru Technological University (JNTUH)",duration:"2015 - 2018",highlights:["Comprehensive understanding of computer systems, software, and hardware.","Proficiency in programming languages like C, Java, Python, and more.","Knowledge of data structures, algorithms, and database management systems.","Familiarity with operating systems, computer networks, and cybersecurity principles.","Experience in software development, web development, and mobile application development.","Exposure to emerging technologies like AI, ML, and Cloud Computing.","Strong problem-solving, analytical, and coding skills."]},{id:"2",degree:"Diploma in IT",institution:"Maulana Azad National Urdu University, Hyderabad (MANUU)",duration:"2012 - 2015",highlights:["Fundamental knowledge of computer systems, software, and hardware.","Basic programming skills in languages like C, Java, or Python.","Understanding of networking concepts and internet technologies.","Proficiency in database management and SQL queries.","Introduction to web development using HTML, CSS, and JavaScript.","Exposure to IT tools and applications for business and communication.","Practical skills in troubleshooting and maintaining IT systems."]}];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 col-12",children:e.jsxs("div",{className:"education-holder rounded-4 primary-bg p-md-5 p-4 mb-md-0 mb-4",children:[e.jsx("h6",{className:"education-title fw-semibold text-uppercase mb-md-4 mb-3 primary-color",children:"Experience"}),e.jsx("div",{className:"content-holder",children:e.jsx("div",{className:"content-item",children:e.jsx("div",{className:"works-content-box",children:i.map(n=>e.jsxs("div",{className:"works-item work-item1",children:[e.jsx("h5",{className:"title text-uppercase",children:n.designation}),e.jsx("h6",{className:"sub-title",children:n.company}),e.jsxs("span",{className:"opacity-50",children:[n.employmentType," | ",n.duration," "]}),e.jsx("ul",{className:"mt-3 ps-0",children:n.responsibilities.map((r,s)=>e.jsx("li",{children:r},s))})]},n.id))})})})]})}),e.jsx("div",{className:"col-md-6 col-12",children:e.jsxs("div",{className:"education-holder rounded-4 primary-bg p-md-5 p-4",children:[e.jsx("h6",{className:"education-title fw-semibold text-uppercase mb-md-4 mb-3 primary-color",children:"Education"}),e.jsx("div",{className:"content-holder",children:e.jsx("div",{className:"content-item",children:e.jsx("div",{className:"works-content-box",children:t.map(n=>e.jsxs("div",{className:"works-item work-item1",children:[e.jsx("h5",{className:"title text-uppercase",children:n.degree}),e.jsx("h6",{className:"sub-title",children:n.institution}),e.jsx("span",{className:"opacity-50",children:n.duration}),e.jsx("ul",{className:"mt-3 ps-0",children:n.highlights.map((r,s)=>e.jsx("li",{children:r},s))})]},n.id))})})})]})})]})})}function O(){return e.jsx("section",{className:"skills section-padY pt-0",children:e.jsxs("div",{className:"container",children:[e.jsx(g,{content:"Education & Work Experience",alignX:"d-flex justify-content-center"}),e.jsx(W,{})]})})}const J=()=>{const[i,t]=u.useState({fname:"",lname:"",email:"",phone:"",message:""}),[n,r]=u.useState(!1),[s,o]=u.useState({fname:"",lname:"",email:"",phone:""}),m=d=>{const{name:c,value:p}=d.target;t(x=>({...x,[c]:p}))},a=()=>{const d={};let c=!0;return i.fname.trim()||(d.fname="First name is required.",c=!1),i.lname.trim()||(d.lname="Last name is required.",c=!1),i.email.trim()?/\S+@\S+\.\S+/.test(i.email)||(d.email="Please enter a valid email.",c=!1):(d.email="Email is required.",c=!1),i.phone.trim()||(d.phone="Phone number is required.",c=!1),o(d),c},l=d=>{d.preventDefault(),a()&&C.sendForm("service_w9dlk8a","template_xgbd3vg",d.target,"user_your_user_id").then(c=>{console.log("SUCCESS!",c.status,c.text),r(!0)},c=>{console.log("FAILED...",c),alert("Failed to send message. Please try again.")})};return e.jsx("div",{className:"tj-contact-form style-2",children:n?e.jsx("div",{id:"thankyou",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-10 skills-widget style-2 mb-md-4",children:e.jsxs("div",{className:"skill-item text-center",style:{border:"1px solid var(--tj-theme-primary)",backgroundColor:"var(--tj-theme-secondary)"},children:[e.jsx("div",{className:"mb-3",children:e.jsx("img",{src:"./assets/img/icons/check.png",width:"120",height:"120",loading:"lazy",alt:"Hivision Foundation"})}),e.jsx("h5",{children:"Thank you for submitting your details."}),e.jsx("small",{children:"We have received your details and will get back to you soon."})]})})})}):e.jsxs("form",{id:"contactForm",className:"contact-form mt-md-0 mt-5",onSubmit:l,children:[e.jsx("div",{className:"form_group",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("input",{type:"text",name:"fname",placeholder:"First name",value:i.fname,onChange:m}),e.jsx("small",{className:"mt-2",style:{display:s.fname?"block":"none"},children:s.fname})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("input",{type:"text",name:"lname",placeholder:"Last name",value:i.lname,onChange:m}),e.jsx("small",{className:"mt-2",style:{display:s.lname?"block":"none"},children:s.lname})]})]})}),e.jsxs("div",{className:"form_group",children:[e.jsx("input",{type:"email",name:"email",placeholder:"Email address",value:i.email,onChange:m}),e.jsx("small",{className:"mt-2",style:{display:s.email?"block":"none"},children:s.email})]}),e.jsxs("div",{className:"form_group",children:[e.jsx("input",{type:"tel",name:"phone",placeholder:"Phone number",value:i.phone,onChange:m}),e.jsx("small",{className:"mt-2",style:{display:s.phone?"block":"none"},children:s.phone})]}),e.jsx("div",{className:"form_group",children:e.jsx("textarea",{name:"message",placeholder:"Message",value:i.message,onChange:m})}),e.jsx("div",{className:"form_btn",children:e.jsxs("button",{type:"submit",className:"primary-btn border-0 contact-button d-inline-flex align-items-center text-decoration-none px-4 py-3 fw-semibold rounded-pill",children:["Send Message",e.jsxs("span",{className:"icon_box",children:[e.jsx("i",{className:"fa-solid fa-arrow-right icon_first"}),e.jsx("i",{className:"fa-solid fa-arrow-right icon_second"})]})]})})]})})};function R(){return e.jsx("section",{className:"skills section-padY pt-0",id:"contact",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"primary-bg rounded-4 p-md-5 p-4",children:e.jsxs("div",{className:"row justify-content-between",children:[e.jsxs("div",{className:"col-md-5 col-12",children:[e.jsx(g,{content:"Let’s work together!",alignX:"d-flex justify-content-start"}),e.jsx(y,{content:"I'm currently available to take on new projects! Feel free to reach out if you have an idea or project you'd like to discuss. You can contact me anytime, as I’m available 24/7. "}),e.jsxs("ul",{className:"list-unstyled contact-info-list-3 my-5",children:[e.jsx("li",{children:e.jsx("a",{href:"tel:+917416208245",children:"+91 7416208245"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:sheikhfayyaz0311@gmail.com",children:"sheikhfayyaz0311@gmail.com"})})]}),e.jsx(S,{})]}),e.jsx("div",{className:"col-md-5 col-12",children:e.jsx(J,{})})]})})})})}function U(){return e.jsx("footer",{className:"footer section-padY pt-0",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"primary-bg rounded-top-4 p-md-5 p-4",children:e.jsxs("ul",{className:"d-flex flex-wrap justify-content-center list-unstyled mb-0",children:[e.jsx("li",{children:e.jsx("a",{className:"nav-link mx-3 mb-md-0 mb-2",href:"#",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link mx-3 mb-md-0 mb-2",href:"#about-me",children:"About Me"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link mx-3 mb-md-0 mb-2",href:"#skills",children:"Skills"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link mx-3 mb-md-0 mb-2",href:"#projects",children:"Projects"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link mx-3 mb-md-0 mb-2",href:"#contact",children:"Contact"})})]})})})})}function Y(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"main",children:[e.jsx(I,{}),e.jsx(L,{}),e.jsx(F,{}),e.jsx(D,{}),e.jsx($,{}),e.jsx(q,{}),e.jsx(O,{}),e.jsx(R,{}),e.jsx(U,{})]})})}E.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(Y,{})}));
