type ButtonProps ={
    handleClick: (props: React.MouseEvent<HTMLButtonElement>, id: number ) => void
    
}
const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>HandleClick</button>
  )
}

export default Button