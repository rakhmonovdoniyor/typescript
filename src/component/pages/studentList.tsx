type StudentListProps = {
    name:{
        first: string,
        last: string
    }[];
}
const StudentList = (props: StudentListProps) => {
  return (
    <div>
      {
        props.name.map((name) =>{
            return(
                <h1>{name.first} {name.last} </h1>
            )
        })
      }

    </div>
  )
}

export default StudentList