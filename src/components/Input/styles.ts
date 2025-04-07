import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  color: var(--gray6);
  border-radius: 0.5rem;
  padding: 0 1rem;
  height: 3rem;

  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 1rem;
    outline: none;
  }
`;
