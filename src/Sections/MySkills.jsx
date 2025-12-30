// import Skills from "../components/Skills/Skills";
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('../components/Skills/Skills'));
import Title from "../components/Title";

export default function MySkills() {
  return (
    <section className="skills section-padY pt-0" id="skills">
      <div className="container">
        <Title
          content="Technical Skills & Expertise"
          alignX="d-flex justify-content-center"
        />
         <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </section>
  );
}
