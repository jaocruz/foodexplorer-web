import { Container } from "./styles";

export function Input({icon: Icon, placeholder}){
  return (
    <Container>
      {Icon && <Icon size={24}/>}
      <input placeholder={placeholder} />
    </Container>
  )
}