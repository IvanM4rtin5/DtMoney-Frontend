import { styled } from "styled-components";

export const Container = styled.main`
max-width: 1120px;
margin: 0 auto;
padding: 2.5rem 1rem;

@media (max-width: 768px) {
  padding: 15px;
  width: 100%;
  margin: 0;
}

`;