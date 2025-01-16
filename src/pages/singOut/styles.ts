import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Centraliza o conteúdo verticalmente abaixo do Header */
  min-height: 100vh;
  background: var(--gray2);
  padding: 1rem;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
  margin-left: 500px;
  gap: 1.5rem;
  background: var(--green-dark);
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 2rem; /* Espaço abaixo do Header */

  h1 {
    font-size: 2rem;
    color: var(--white);
  }

  p {
    font-size: 1rem;
    color: var(--gray6);
  }

  h2 {
    font-size: 1.5rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }


  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 0.25rem;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }
  }
`;

