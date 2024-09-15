 type StatusProps ={
    status: 'Loading' | 'success' | 'Errrror'
 }

const Status = (props: StatusProps) => {
    let msg;
    if (props.status === "Loading"){
        msg ='Loading...'
    }
    else if(props.status === "success"){
        msg ='Loading'
    }
    else if(props.status === "Errrror"){
        msg ='ERROR'
    }
  return (
    <div>
        <h1> Status {msg} </h1>
    </div>
  )
}

export default Status