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
      <Main navbg={medium} contentbg={light}>
        <h2> Home </h2>
        <h3> Description</h3>
        <p> Hello! I'm a senior Computer Science student at Boston University.
          I'm originally from Jeddah, Saudi Arabia.
          I'm highly interested in embedded systems and systems design in general.
          I'm pursuing a minor in English for my love of English Literature. </p>
        <p> This picture is baby Lamar, I use it as a profile picture everywhere. It's kind of my logo.</p>
        <Image src="/assets/babypic.jpg" alt="baby lamar" bc={dark} />
      </Main>
      <Footer bg={dark} />
    </>
  )
}
