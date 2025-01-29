import styled from "styled-components";

export const Container = styled.header`
background: var(--background);
`;
export const Content = styled.div`
    max-width: 900px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display:flex ;
    align-items: center;
    justify-content:space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--green-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

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

    @media (max-width: 768px) {
      font-size: 1.2rem;
      gap: 0.5rem;
      margin-left: 1.5rem; 
    }

    span {
      font-weight: bold;
    }
  }
`;