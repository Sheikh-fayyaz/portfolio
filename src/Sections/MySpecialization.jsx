import Title from "../components/Title";
// import Specialization from "../components/Specialization/Specialization";
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('../components/Specialization/Specialization'));

export default function MySpecialization() {
  return (
    <section className="specialization section-padY">
      <div className="container">
      <Title content="My Specialization" alignX="d-flex justify-content-center" />
      <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </section>
  );
}
