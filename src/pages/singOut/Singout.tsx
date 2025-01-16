import { Button, } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Form, Container } from "./styles";

export function SingOut() {
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
          <Input 
            placeholder="Confirme a Senha" 
            type="Password" 
            icon={FiLock}
            {...({ placeholder: "Confirme a Senha" } as any)}
            // onChange ={ e => setPassword(e.target.value)}
          />
  
          <Button
            title="Criar Conta"
          />
        </Form>
      </Container>
    );
  }
  