import { Container } from "./styles";

export function Input({icon: Icon, title, placeholder}){
  return (
    <Container>
      {title && <label htmlFor="">{title}</label>}

      <section>
        {Icon && <Icon size={24}/>}
        <input placeholder={placeholder} />
      </section>
    </Container>
  )
}