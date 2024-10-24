// Footer.tsx
import styled from 'styled-components';

const FooterWrapper = styled.footer <{ bg: string }>`
  background-color: ${({ bg }) => bg};
  text-align: center;
  color: #fff;
  padding: 0.5vw;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 720px) {
    padding: 1vw;
  }
`;

export default function Footer({ bg }: { bg: string }) {
  return (
    <FooterWrapper bg={bg}>
      <p>
        All rights reserved by Lamar AlSubhi{' '}
        <a href="/credits">&#169;</a>.
      </p>
    </FooterWrapper>
  );
}
