import { ContactProps } from "../types/data"

 
const Contact = (props: ContactProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Contact