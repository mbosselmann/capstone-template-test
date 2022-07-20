import styled from 'styled-components';

export default function Button() {
  return <StyledButton>Klick!</StyledButton>;
}

const StyledButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: 3rem;
  border-radius: 15px;
  padding: 8px;
`;
