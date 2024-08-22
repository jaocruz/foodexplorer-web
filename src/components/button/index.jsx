import { Container } from "./styles";

export function Button({icon: Icon, title, ...rest}){
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={32}/>}
      <h1>{title}</h1>
    </Container>
  )
}