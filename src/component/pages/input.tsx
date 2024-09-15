import { ChangeEvent } from "react"

type InputProps = {
value: string
handleChange: (event: React.ChangeEvent<HTMLInputElement> ) => void
}
const Input = (props: InputProps) => {
    const handleClickValue = (event: ChangeEvent<HTMLInputElement>) =>{
        console.log(event);
    }
  return (
    <input type="text" value={props.value} onChange={handleClickValue} />
  )
}

export default Input