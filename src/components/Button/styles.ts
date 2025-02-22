import styled from "styled-components";

export const Container = styled.button`
  padding: 12px 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  background: var(--green);
  border: none;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: var(--green-light);
    transform: scale(1.05);
  }

  &:active {
    background: var(--green-dark);
    transform: scale(0.95);
  }

  &:disabled {
    background: var(--gray4);
    color: var(--gray5);
    cursor: not-allowed;
  }
`;
