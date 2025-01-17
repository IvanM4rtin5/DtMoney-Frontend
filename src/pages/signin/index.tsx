import { Link } from "react-router-dom"
import { Button, } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Form, Container, CreateAccount } from "./styles";

export function SignIn() {
    return (
      <Container>
        <Form>
          <h1>Dt Money</h1>
          <p>Aplicação para gerenciar suas finanças</p>
  
          <h2>Faça seu Login</h2>
  
          <Input 
            placeholder="E-mail" 
            type="Text" 
            icon={FiMail}
            {...({ placeholder: "E-mail" } as any)}
            // onChange ={e => setEmail(e.target.value)}
          />
  
          <Input 
            placeholder="Senha" 
            type="Password" 
            icon={FiLock}
            {...({ placeholder: "Senha" } as any)}
            // onChange ={ e => setPassword(e.target.value)}
          />
  
          <Button
            title="Entrar"
          />
        <CreateAccount >
        <Link to="/register"> Não tem uma conta? <span> Crie sua conta</span></Link>
        </CreateAccount>
          <a href="#" >Esqueci minha senha</a>
        </Form>
      </Container>
    );
  }
  