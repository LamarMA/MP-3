// Honors.tsx

import { useEffect } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Image from '../components/Image';

const dark = "#111D13";
const light = "#6BA06A";
const medium = "#0E402D";

export default function Honors() {
  useEffect(() => {
    document.title = "Honors | Lamar's Resume";
  }, []);
  return (
    <>
      <Header bg={dark} />
      <Main navbg={medium} contentbg={light}>
        <h2> Awards & Honors  </h2>
        <h3> Qimam Fellow </h3>
        <h4><i> Qimam Fellowship, McKinsey & Company</i> [<b>May 2023 - Present</b>]</h4>
        <p> Qimam is a fellowship program supported by leading national and international
          companies that aims to
          identify, develop, and empower the most distinguished Saudi university students to
          achieve their potential.
        </p>
        <Image src="/assets/qimam-pic.png" alt="Qimam picture" bc={dark} />


        <h3> Scholarship Recipient </h3>
        <h4> <i> KAUST Gifted Student Program (KGSP) Scholarship</i> [<b>June 2021 -
          Present</b>]</h4>
        <p> KGSP is a prestigious scholarship awarded by King Abdullah University of Science &
          Technology (KAUST) to
          a select group of Saudi students allowing them to pursue undergraduate degrees in
          STEM fields in the US.
          Highlighted in multiple articles on the KGSP website: <a
            href="https://kgsp.kaust.edu.sa/news/news/2022/10/14/kgsp-custom-program-highlight">Custom
            Program Highlight</a> and <a
              href="https://kgsp.kaust.edu.sa/news/news/2023/07/27/2023-kgsp-qimam-fellows">Qimam
            Highlight</a>.
        </p>
        <Image src="/assets/kgsp-pic.png" alt="KGSP picture" bc={dark} />

      </Main >
      <Footer bg={dark} />
    </>
  )
}
