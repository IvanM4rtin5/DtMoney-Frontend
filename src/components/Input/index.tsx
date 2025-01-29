import { Container } from "./styles";
interface InputProps {
    placeholder: string;
    type?: "text" | "email" | "password";
    icon?: React.ComponentType<{ size: number }>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    // outros props...
  }

export function Input({icon: Icon, ...rest}: InputProps) {
    return(
        <Container>
           {Icon && <Icon size= {20}/>}
            <input {...rest}
            />
        </Container>

    )
};