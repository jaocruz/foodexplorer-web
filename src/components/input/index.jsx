import { Container } from "./styles";

export function Input({icon: Icon, title, placeholder, children, ...rest}){
  return (
    <Container>
      {title && <label htmlFor="">{title}</label>}

      <section>
        {Icon && <Icon size={24}/>}

        {children}
        {placeholder && <input placeholder={placeholder} {...rest}/>}
      </section>
    </Container>
  )
}