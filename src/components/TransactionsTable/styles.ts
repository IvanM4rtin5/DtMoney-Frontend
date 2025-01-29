import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto; /* Permite rolagem horizontal em telas pequenas */

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: center;
    border-radius: 0.25rem;
  }

  thead {
    background: var(--background);
  }

  th, td {
    padding: 1rem 2rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray6);
    text-align: center;
  }

  td {
    color: yellow;
    background: var(--shape);
    border: 1px solid var(--gray4);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--gray6);
    }
  }

  .deposit {
    color: var(--green);
  }

  .withdraw {
    color: var(--red);
  }

  button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
    font-size: 1rem;
    color: white;
    margin-right: 1rem;
    cursor: pointer;  
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      display: none; /* Oculta os cabeçalhos */
    }

    tbody tr {
      display: block;
      margin-bottom: 1rem;
      border: 1px solid var(--gray4);
      border-radius: 0.5rem;
      padding: 1rem;
      background: var(--background);
    }

    tbody td {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      border-bottom: 1px solid var(--gray3);

      &:last-child {
        border-bottom: none;
      }

      &:before {
        content: attr(data-label); /* Adiciona rótulos */
        font-weight: bold;
        color: var(--gray6);
      }
    }
  }
`;
