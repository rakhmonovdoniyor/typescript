 type StudentProps ={
    name:{
        first: string,
        last: string
    }
 }

const Student = (props: StudentProps) => {
  return (
    <div>
        <h2>{props.name.first} {props.name.last} </h2>
    </div>
  )
}

export default Student;