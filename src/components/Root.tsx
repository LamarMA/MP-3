import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Education from '../pages/Education';
import Work from '../pages/Work';
import Honors from '../pages/Honors';
import Skills from '../pages/Skills';


export default function Root() {
  return (
    <Routes>
      <Route
        path={`/`}
        element={<Home />}
      />
      <Route
        path={`/education.html`}
        element={<Education />}
      />
      <Route
        path={`/work.html`}
        element={<Work />}
      />
      <Route
        path={`/honors.html`}
        element={<Honors />}
      />
      <Route
        path={`/skills.html`}
        element={<Skills />}
      />

    </Routes>
  )
}