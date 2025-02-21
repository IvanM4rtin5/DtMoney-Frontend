import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Form, Container, CreateAccount } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hook/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useAuth();

  async function handleSignIn(e : React.SyntheticEvent) {
    e.preventDefault(); 
    try {
      await signIn({ email, password });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <h1>Dt Money</h1>
        <p>Aplicação para gerenciar suas finanças</p>
        
        <h2>Faça seu Login</h2>
        
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          required
        />
        
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
          required
        />
        
        <Button 
          title="Entrar"
          type="submit"
          onClick={handleSignIn}
        />

        <CreateAccount>
          <Link to="/register">
            Não tem uma conta? <span>Crie sua conta</span>
          </Link>
        </CreateAccount>
        
        {/* <a href="#">Esqueci minha senha</a> */}
      </Form>
    </Container>
  );
}