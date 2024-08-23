import { Container } from "./styles";

import { PiPlus, PiX } from "react-icons/pi";

export function IngredientButton({isNew = false, value, onClick, ...rest}){
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        { isNew ? <PiPlus/> : <PiX/> }
      </button>
    </Container>
  )
}