// Main.tsx

// this component killed me 

import styled from 'styled-components';
import Nav from './Nav';
import { ReactNode } from 'react';

const MainWrapper = styled.div`
  display: flex;
  height:100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.nav<{ bg: string }>`
  width: 30%;
  background-color: ${({ bg }) => bg};
  padding: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ContentArea = styled.div<{ bg: string }>`
  width: 100%;
  flex: 1;
  background-color: ${({ bg }) => bg};
  padding: 2rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default function Main({ navbg, contentbg, children }: {
  navbg: string;
  contentbg: string;
  children: ReactNode;
}) {
  return (
    <MainWrapper>
      <Sidebar bg={navbg}>
        <Nav />
      </Sidebar>
      <ContentArea bg={contentbg}>{children}</ContentArea>
    </MainWrapper>
  );
}
