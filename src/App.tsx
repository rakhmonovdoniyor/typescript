 
import './App.css';
import Button from './component/pages/button';
import Contact from './component/pages/cobtact';
import Input from './component/pages/input';
import Intro from './component/pages/intro';
import Paragraph from './component/pages/paragraph';
import Status from './component/pages/status';
import Student from './component/pages/student';
import StudentList from './component/pages/studentList';
import Title from './component/pages/title';
import Wrapper from './component/pages/Wrapper';

function App() {
  const studentName ={
    first: "Sherzod",
  last:'Khudoynazarov'
  };

  const studentList =[ 
    {
      first: "Default  ",
      last: "Name1"
    },
    {
      first: "Default  ",
      last: "Name1"
    },
    {
      first: "Default  ",
      last: "Name1"
    },
    {
      first: "Default  ",
      last: "Name1"
    },
    {
      first: "Default  ",
      last: "Name4"
    }
  ]
  return (
    <div className="App">
      <Intro  name="Welcome" msgNum={2} isLogging={true}/>
       <Student name={studentName}/>
       <StudentList name ={studentList}/>
       <Status status="Loading"/>
       <Contact>Lorem ipsum dolor sit amet.</Contact>
       <Title><Contact>Lorem ipsum dolor sit amet.</Contact></Title>
       <Paragraph edu="Be Coder" msgNum={2} isLogging={true}/>
       <Button handleClick={(event, id) => {
        console.log("Bismillah", event , id);
       }}/>
       <Input value="" handleChange={(event) => console.log(event)}/>
       <Wrapper styles={{border: "3px solid"}}/>
    </div>
  );
}

export default App;
