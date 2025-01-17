import { Link } from "react-router-dom";
import { Button, } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Form, Container, CreateAccount } from "./styles";

export function SignUp() {
    return (
      <Container>
        <Form>
          <h1>Dt Money</h1>
          <p>Aplicação para gerenciar suas finanças</p>
  
          <h2>Crie sua Conta</h2>
  
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
          <Input 
            placeholder="Confirme a Senha" 
            type="Password" 
            icon={FiLock}
            {...({ placeholder: "Confirme a Senha" } as any)}
            // onChange ={ e => setPassword(e.target.value)}
          />
  
          <Button
            type="submit"
            // onClick={handleCreateNewTransaction}
            title="Cadastrar"
          />
  
          <CreateAccount >
            <p>Ja possui uma conta?</p>
            <Link to="/">
            <span>Faça seu Login </span>
            </Link>
          </CreateAccount>
        </Form>
      </Container>
    );
  }
  