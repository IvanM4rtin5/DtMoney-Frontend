import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 100vh;
  background: var(--gray2);
  padding: 1rem;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1.5rem;
  background: var(--green-dark);
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

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

  a {
    display: block;
    margin-top: 0.5rem;
    color: var(--white);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  } 

  @media (max-width: 680px) {
    margin: 3rem 3.5rem;
    padding: 2.5rem 1rem;
    border-radius: 0.25rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;  
      padding: 0.75rem 0.5rem;
    }
  }
`;
export const CreateAccount = styled.a`
margin-top: 1rem;
font-size: 0.9rem;
color: var(--gray6);
text-decoration: none;

span {
  color: var(--green-light);
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--green);
  }
}`
;