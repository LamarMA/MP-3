// Education.tsx

import { useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styled from 'styled-components';

const dark = "#3f0d12";
const light = "#CC8F96";
const medium = "#6A2430";

const Table = styled.table`
  margin: auto;
  justify-content: center;
  border-collapse: collapse;
  max-width: 100%;
  th, td {
    border: 0.5vw solid #38040E;
    padding: 0.5vw
  }

  a{
    color: #fff;
  }
`;

export default function Education() {
  useEffect(() => {
    document.title = "Education | Lamar's";
  }, []);

  return (
    <>
      <Header bg={dark} />
      <Main navbg={medium} contentbg={light}>
        <h2> Education </h2>
        <h4> <i>Boston University, Boston, MA</i> [Expected Graduation: <b>May 2025</b>]</h4>

        <ul>
          <li> GPA: 3.61</li>
          <li> Minoring in English</li>
        </ul>

        <p>I'm a senior Computer Science student at Boston University.
          I'm highly interested in embedded systems and systems design in general.
          I'm pursuing a minor in English for my love of English Literature. </p>

        <h2> Important CS classes </h2>
        <Table>
          <tr>
            <th>Course ID </th>
            <th>Course Name</th>
            <th>Course Link</th>
          </tr>
          <tr>
            <td>CS111</td>
            <td>Introduction to Computer Science 1</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-111/"> BU CAS CS111
            </a></td>
          </tr>
          <tr>
            <td>CS112</td>
            <td>Introduction to Computer Science 2</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-112/"> BU CAS CS112
            </a></td>
          </tr>
          <tr>
            <td>CS131</td>
            <td>Combinatoric Structures</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-131/"> BU CAS CS131
            </a></td>
          </tr>
          <tr>
            <td>CS132</td>
            <td>Geometric Algorithms</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-132/"> BU CAS CS132
            </a></td>
          </tr>
          <tr>
            <td>CS210</td>
            <td>Computer Systems</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-210/"> BU CAS CS210
            </a></td>
          </tr>
          <tr>
            <td>CS237</td>
            <td>Probability in Computing</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-237/"> BU CAS CS237
            </a></td>
          </tr>
          <tr>
            <td>CS330</td>
            <td>Introduction to Analysis of Algorithms</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-330/"> BU CAS CS330
            </a></td>
          </tr>
          <tr>
            <td>CS411</td>
            <td>Software Engineering</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-411/"> BU CAS CS411
            </a></td>
          </tr>
          <tr>
            <td>CS320</td>
            <td>Concepts of Programming Languages</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-320/"> BU CAS CS320
            </a></td>
          </tr>
          <tr>
            <td>CS350</td>
            <td>Fundamentals of Computing Systems</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-350/"> BU CAS CS350
            </a></td>
          </tr>
          <tr>
            <td>CS440</td>
            <td>Introduction to Artificial Intelligence</td>
            <td><a href="https://www.bu.edu/academics/cas/courses/cas-cs-440/"> BU CAS CS440
            </a></td>
          </tr>
        </Table>

      </Main>
      <Footer bg={dark} />
    </>
  )
}
