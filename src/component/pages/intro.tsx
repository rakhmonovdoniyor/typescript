type IntroProps = {
  name: string,
  msgNum: number,
  isLogging: boolean
};

const Intro = (props: IntroProps) => {
  return (
    <div> {props.isLogging ? (

     
      <h1>Hi {props.name},Welcome, yo got {props.msgNum} new message</h1>
    ):(
      "You r not logging yet"
    )}
      </div>
    
  );
};

export default Intro;
