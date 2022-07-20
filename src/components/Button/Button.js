import styled from 'styled-components';

export default function Button() {
  return <StyledButton>Klick!</StyledButton>;
}

const StyledButton = styled.button`
  border: none;
  background-color: teal;
  font-size: 3rem;
`;
