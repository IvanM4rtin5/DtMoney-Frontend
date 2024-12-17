import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
:root{
    //base
    --background:#121214;
    --gray2:#202024;//primary color
    --gray3:#29292E;//secondary color
    --gray4:#323238;//tertiary color
    --gray5:#7C7C8A;//placeholder color
    --gray6:#C4C4cc;//texto base
    --gray7:#E1E1E6;//titulos
    --white:#FFFFFF; // white

    //Produto

    --green-dark:#015F43;
    --green:#00875F;
    --green-light:#00B37E;
    --red-dark:#AA2834;
    --red:#F75A68;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-none;
}               
html{
    @media(max-width:1080px) {
        font-size: 93.75%; //16px
    }
    @media(max-width:720px) {
        font-size: 87.5%; //14px
    }
}
body {
    background: var(--gray2);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor :not-allowed; 
}
`