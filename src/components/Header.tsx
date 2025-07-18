// Header.tsx
import styled from 'styled-components';

const HeaderWrapper = styled.header <{ bg: string }>`
  text-align: left;
  color: #fff;
  background-color: ${({ bg }) => bg};

  padding: 1.5rem;

  h1, p{
    margin: 0;
    padding:0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    padding-left: 0;
    text-align: center;
  }
`;

export default function Header({ bg }: { bg: string }) {
  return (
    <HeaderWrapper bg={bg}>
      <h1>Lamar AlSubhi's Resume</h1>
      <p>
        Boston, MA {' | '}
        <a href="mailto:lamarmaalsubhi@gmail.com">Personal email</a>{' | '}
        <a href="mailto:lamarma@bu.edu">BU email</a>{' | '}
        <a href="mailto:lamar.alsubhi@kaust.edu">KAUST email</a> {' | '}
        <a href="https://www.linkedin.com/in/lamaralsubhi">LinkedIn Account</a>
      </p>
    </HeaderWrapper>
  );
}
