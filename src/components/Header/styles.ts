import styled from "styled-components";

export const Container = styled.header`
background: var(--background);
width: 100%;
`;
export const Content = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display:flex ;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap; // Permite que os itens quebrem para a próxima linha
    gap: 1rem; // Espaçamento entre os elementos

  @media (max-width: 768px) {
    padding: 1rem 1rem 8rem; // Reduz o padding no celular
    justify-content: center; // Centraliza os itens
    flex-direction: column; // Empilha os elementos verticalmente
    text-align: center;
  }

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--green-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        white-space: nowrap;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: var(--red);
    background: transparent; /* Define o fundo transparente */
    border: none;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-top: 0.5rem; // Espaçamento superior no celular
    }

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  .user {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--green-light);
    gap: 1rem;
    margin-right: 1rem;

    @media (max-width: 468px) {
      font-size: 1.2rem;
      gap: 0.5rem;
      margin: 0; 
      justify-content: center; 
      width: 100%; 
    }

    span {
      font-weight: bold;
    }
  }
`;