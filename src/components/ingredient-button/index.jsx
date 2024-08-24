import { useEffect, useRef } from "react";
import { Container } from "./styles";
import { PiPlus, PiX } from "react-icons/pi";

export function IngredientButton({isNew = false, value, onClick, ...rest}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${Math.max(20, inputRef.current.scrollWidth)}px`;
    }
  }, [value]);

  return (
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value} 
        readOnly={!isNew} 
        ref={inputRef}
        {...rest} 
      />
      <button type="button" onClick={onClick}>
        { isNew ? <PiPlus /> : <PiX /> }
      </button>
    </Container>
  )
}
