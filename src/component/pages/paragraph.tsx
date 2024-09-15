 type ParagraphProps ={
    edu: string 
    msgNum?: number
    isLogging: boolean
 }

const Paragraph = (props: ParagraphProps) => {
  return (
    <div>{props.isLogging ? 
       ` Welcome to DataBase of  ${props.edu}  U got:: ${props.msgNum} ` : `you are not loggin yet`

        
        }
        
    </div>
  )
}

export default Paragraph