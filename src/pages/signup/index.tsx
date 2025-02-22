import { api } from "../../service/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form, Container, CreateAccount } from "./styles";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")

  const navigate = useNavigate()

  async function handleSingup() {
    if (!name || !email || !password || !confPassword) {
      return alert("Por favor, preencha todos os campos!")
    }
    if (confPassword !== password) {
      return alert("senha não confere")
    }
    await api
      .post("/auth/register", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert("Email já cadastrado")
        } else {
          alert(" Não foi possivel cadastrar")
        }
      })
  }
    return (
      <Container>
        <Form>
          <h1>Dt Money</h1>
          <p>Aplicação para gerenciar suas finanças</p>
  
          <h2>Crie sua Conta</h2>
  
          <Input 
            placeholder="Nome" 
            type="Text" 
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
            {...({ placeholder: "Nome" } as any)}
            // onChange ={e => setEmail(e.target.value)}
          />
  
          <Input 
            placeholder="E-mail" 
            type="Text" 
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...({ placeholder: "E-mail" } as any)}
            // onChange ={e => setEmail(e.target.value)}
          />
  
          <Input 
            placeholder="Senha" 
            type="Password" 
            icon={FiLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...({ placeholder: "Senha" } as any)}
            // onChange ={ e => setPassword(e.target.value)}
          />
          <Input 
            placeholder="Confirme a Senha" 
            type="Password" 
            icon={FiLock}
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            {...({ placeholder: "Confirme a Senha" } as any)}
          />
  
          <div className="buttons">
          <Button
            type="submit"
            onClick={handleSingup}
            title="Cadastrar"
          />
          </div>
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
  