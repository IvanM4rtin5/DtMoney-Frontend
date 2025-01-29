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


> input {
    height:auto ;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--white);
    
    color:var(--gray2) ; 
    border: 0;
    
    &:placeholder{
        color: var(--gray4); 
    }
}

input:focus {
    outline: none;
    box-shadow: none;
    background-color: var(--white);
}
> svg {
        color: var(--gray5); 
        margin-left: -115px;
    }
`;