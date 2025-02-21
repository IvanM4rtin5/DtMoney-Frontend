import logoImg from "../../assets/Logo.svg"
import { RiShutDownLine } from "react-icons/ri";
import { Container, Content } from './styles';
import { useAuth } from "../../hook/auth";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
  }
  
  export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    const { user, signOut } = useAuth();
    return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      { user && <span className="user">Bem-vindo! { user.name}</span>}
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        <button className="logout" 
         type="button"
         onClick={signOut}
         >
          <RiShutDownLine size={22} />
        </button>
      </div>
      </Content>
    </Container>
    );
  };