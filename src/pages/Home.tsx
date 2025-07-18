// Home.tsx

import { useEffect } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Image from '../components/Image';

const dark = "#011638";
const light = "#647590";
const medium = "#20405A";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Lamar's Resume";
  }, []);
  return (
    <>
      <Header bg={dark} />
      <Main navbtn={dark} navbg={medium} contentbg={light}>
        <h2> Home </h2>
        <h3> Description</h3>
        <p> Hello! I'm a master's student in Computer Science at KAUST,
          originally from Jeddah, Saudi Arabia. I'm passionate about
          embedded systems and systems design in general.
          I completed my undergraduate studies in Computer Science at
          Boston University, where I also minored in English out of a
          deep love for literature.
        </p>
        <p> This picture is baby Lamar, I use it as a profile picture everywhere. It's kind of my logo.</p>
        <Image src="/assets/babypic.jpg" alt="baby lamar" bc={dark} />
      </Main>
      <Footer bg={dark} />
    </>
  )
}
