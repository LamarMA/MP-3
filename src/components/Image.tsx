// image.tsx
import styled from 'styled-components';

const StyledImage = styled.img<{ bc: string }>`
  max-width: 60%;
  border: 5px solid ${({ bc }) => bc};

  @media screen and (max-width: 720px) {
    max-width: 40%;
  }
`;

export default function Image({
  src,
  alt,
  bc,
}: {
  src: string;
  alt: string;
  bc: string;
}) {
  return <StyledImage src={src} alt={alt} bc={bc} />;
}
