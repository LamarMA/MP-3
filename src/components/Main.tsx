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

const Sidebar = styled.nav<{ btn: string, bg: string }>`
  width: 25%;
  background-color: ${({ bg }) => bg};
  
  a {
    display: inline-block;
    width: 20vh; /* fixed width for all buttons */
    text-align: center;
    background-color: ${({ btn }) => btn};
    color: white;
    font-weight: bold;
    padding: 1.5vh;
    margin: 1.5vh;
    border-radius: 20vh;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  a:hover {
    background-color: white;
    color: ${({ btn }) => btn};
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 700px) {
    width: 100%;
    a{
      padding: 1.5vh;
      margin: 1.5vh;
      width: 12vh;
    }
  }
`;

const ContentArea = styled.div<{ bg: string }>`
  max-width: 100%;
  flex: 1;
  background-color: ${({ bg }) => bg};
  padding: 2rem;
`;

export default function Main({ navbtn, navbg, contentbg, children }: {
  navbtn: string;
  navbg: string;
  contentbg: string;
  children: ReactNode;
}) {
  return (
    <MainWrapper>
      <Sidebar btn={navbtn} bg={navbg}>
        <Nav />
      </Sidebar>
      <ContentArea bg={contentbg}>{children}</ContentArea>
    </MainWrapper>
  );
}
