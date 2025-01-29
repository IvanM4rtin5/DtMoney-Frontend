import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e2c',
}

export const Container = styled.form`
  max-height: 500px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--gray4);
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem 1.5rem;
    margin: 0 auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      color: var(--gray7);
      font-size: 1.5rem;
      margin: 0;
    }
    
    @media (max-width: 768px) {
        font-size: 1.25rem;
      }

    .close-button {
      background: transparent;
      border: 0;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        width: 20px;
        height: 20px;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  input {
    padding: 3px;
    width: 100%;
    height: 3rem;
    color: var(--gray7);
    font-size: 1rem;
    font-weight: 400;
    background: var(--gray2);
    border: 0;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--gray6);
    }
  }

  button[type="submit"] {
    margin-top: 1rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 768px) {
      height: 3.5rem;
      font-size: 0.875rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background: ${({ isActive, activeColor }) => isActive
    ? transparentize(0.9, colors[activeColor])
    : 'var(--gray4)'};  
  border: 1px solid var(--gray5);
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;

  @media (max-width: 768px) {
    height: 3.5rem;
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;

    @media (max-width: 720px) {
      width: 16px;
      height: 16px;
    }
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--gray6);
  }
  @media (max-width: 700px) {
      font-size: 0.875rem;
      margin-left: 0.5rem;
    }
`;