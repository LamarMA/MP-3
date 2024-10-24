// Nav.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavWrapper = styled.nav`
  padding: 1vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 1vw;
    margin: 4vw 0;
    border: solid 0.4vw #fff;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/honors">Honors</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </NavWrapper>
  );
}
