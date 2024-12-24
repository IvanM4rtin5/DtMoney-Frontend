import { Container } from "./styles";
interface InputProps {
    icon?: React.ComponentType<{ size: number }>;
    // outros props...
  }

export function Input({icon: Icon, ...rest}: InputProps) {
    return(
        <Container>
           {Icon && <Icon size= {20}/>}
            <input {...rest} />
        </Container>

    )
};