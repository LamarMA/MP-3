// Projects.tsx

import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styled from 'styled-components';

const dark = "#f77f00";
const light = "#fcbf49";
const medium = "#d62828";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// this handles making negative results red
const Result = styled.h2<{ isNeg: boolean }>`
  color: ${({ isNeg }) => (isNeg ? "#C52233" : "#FFFAFF")};
`;

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Lamar's Resume";
  }, []);

  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');

  const [result, setResult] = useState<number | null>(null);

  const handleCalculation = (operation: string) => {
    const firstNum = Number(num1);
    const secondNum = Number(num2);

    let total: number;
    switch (operation) {
      case 'adds':
        total = firstNum + secondNum;
        break;
      case 'subs':
        total = firstNum - secondNum;
        break;
      case 'mults':
        total = firstNum * secondNum;
        break;
      case 'divs':
        total = firstNum / secondNum;
        break;
      case 'pows':
        total = Math.pow(firstNum, secondNum);
        break;
      default:
        total = 0; // wont let me setResult without this
    }
    setResult(total);
    setNum1('');
    setNum2('');
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <>
      <Header bg={dark} />
      <Main navbg={medium} contentbg={light}>
        <h2>Projects</h2>
        <p> i should've spent more time to be familiar with the syntax of all of this. I hope by the end of the course, ill feel more comfortable but they keep saying all of web dev is a weird science. It makes me want to study C. Anyways: </p>


        <InputWrapper>
          <label>
            Enter the first number:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </label>
          <label>
            Enter the second number:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </label>
        </InputWrapper>

        <ButtonWrapper>
          <button onClick={() => handleCalculation('adds')}>+</button>
          <button onClick={() => handleCalculation('subs')}>-</button>
          <button onClick={() => handleCalculation('mults')}>×</button>
          <button onClick={() => handleCalculation('divs')}>÷</button>
          <button onClick={() => handleCalculation('pows')}>EXP</button>
          <button onClick={handleClear}>CLEAR</button>
        </ButtonWrapper>

        {result !== null && (
          <Result isNeg={result < 0}>{result}</Result>
        )}
      </Main>
      <Footer bg={dark} />
    </>
  );
}