import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: var(--white);
  color: var(--gray2); 
  margin-bottom: 8px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  position: relative; 

  > input {
    height: auto;
    width: 200px;
    padding: 10px 10px 10px 30px; 
    border-radius: 10px;
    background-color: var(--white);
    color: var(--gray2); 
    border: 0;
    position: relative;
    
    &:focus {
      outline: none;
      box-shadow: none;
      background-color: var(--white);
    }

    &::placeholder {
      color: var(--gray4);   
    }
  }

  > svg {
    position: absolute;
    left: 8px; 
    top: 50%;
    transform: translateY(-50%); 
    color: var(--gray5);
  }
`;
