import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: center;
    

    th {
      padding: 1rem 2rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: var(--gray6);
    }

    td {
      padding: 1rem 2rem;
      color: yellow;
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;

      &:first-child {
        color: var(--gray6);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;