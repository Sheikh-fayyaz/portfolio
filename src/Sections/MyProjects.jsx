import Title from "../components/Title";
// import Projects from "../components/Work/Projects";
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('../components/Work/Projects'));

export default function MyProjects() {
  return (
    <section className="projects-section section-padY pt-0" id="projects">
          <div className="container">
          <Title content="My Recent Works" alignX="d-flex justify-content-center" />
          <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
          </div>
        </section>
  )
}
