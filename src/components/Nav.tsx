// Nav.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavWrapper = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
  }

  @media screen and (max-width: 700px) {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;


export default function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/education.html`}>Education</Link></li>
        <li><Link to={`/work.html`}>Work</Link></li>
        <li><Link to={`/honors.html`}>Honors</Link></li>
        <li><Link to={`/skills.html`}>Skills</Link></li>
      </ul>
    </NavWrapper>
  );
}
