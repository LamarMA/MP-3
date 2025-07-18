// Work.tsx

import { useEffect } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Image from '../components/Image';

const dark = "#3A2640";
const light = "#A095B2";
const medium = "#2C2A4A";

export default function Work() {
  useEffect(() => {
    document.title = "Work | Lamar's Resume";
  }, []);
  return (
    <>
      <Header bg={dark} />
      <Main navbtn={dark} navbg={medium} contentbg={light}>
        <h2> Work & Research </h2>
        <h3> Teaching Assistant (TA) </h3>
        <h4><i> Boston University, Computer Science Department</i> [<b>January 2023 -
          Present</b>]</h4>
        <p>Taught CS105: Introduction to Databases and Data Mining, teaching new students Python
          and SQL. I help the professor manage the whole class by actively making important decsions about the class.</p>
        <ul>
          <li> Taught 3 lab sections by reviewing course material weekly and solving practice
            programming problems.</li>
          <li> Held weekly office hours for students to receive help with programming.</li>
          <li> Graded problem sets, quizzes, and the final exam.</li>
          <li> Answered students’ questions on the course’s Piazza page.</li>
        </ul>
        <Image src="/assets/ta-pic.png" alt="TA picture" bc={dark} />


        <h3> Team Captain </h3>
        <h4><i>Industry-Adjacent Projects at UC Irvine: Engineering Autonomous Rovers</i>
          [<b>July 2022 - August 2022</b>]</h4>
        <p>Led a team of non-engineers to a first place win in a 5-week competition.</p>
        <ul>
          <li>Programmed a rover using an Arduino to follow a line and then search for an
            object.</li>
          <li>Installed IR sensors to detect a line of black tape on the ground.</li>
          <li>Laser-cut an acrylic board that was used as the body of the rover.</li>
          <li>Installed and programmed a PixyCam to detect a colored can.</li>
        </ul>



        <Image src="/assets/cap-pic.png" alt="captain pic" bc={dark} />

      </Main >
      <Footer bg={dark} />
    </>
  )
}
