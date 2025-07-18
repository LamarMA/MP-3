// Skills.tsx

import { useEffect } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const dark = "#28190E";
const light = "#796553";
const medium = "#5E5345";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills | Lamar's Resume";
  }, []);
  return (
    <>
      <Header bg={dark} />
      <Main navbtn={dark} navbg={medium} contentbg={light}>
        <h2> Skills </h2>

        <h3> Languages </h3>
        <p> To me, language is a form of communication, no matter what is communicated or who it is
          being communicated to. Therefore, here is a list of the languages I can use</p>
        <ol>
          <li>Arabic</li>
          <li>English</li>
          <li>Python</li>
          <li>Java</li>
          <li>OCaml</li>
          <li>SQL</li>
          <li>Go</li>
          <li>C</li>
          
        </ol>

        <h2> Extracurricular Activities</h2>

        <h3> Vice-President</h3>
        <h4><i> Saudi Cultural Club at Boston University</i> [<b>May 2024 - May 2025</b>]</h4>
        <p> Coordinated and facilitated events such as the Saudi National Day and Founding Day.

        </p>
      </Main>
      <Footer bg={dark} />
    </>
  )
}
