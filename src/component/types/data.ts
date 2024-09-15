 
export type IntroProps = {
    name: string,
    msgNum: number,
    isLogging: boolean
};

export type StudentProps ={
    name:{
        first: string,
        last: string
    }
 }


export   type ContactProps ={
    children: string
 }

 export type TitleProps = {
    children: React.ReactNode
 }

export type ButtonProps ={
    handleClick: (props: React.MouseEvent<HTMLButtonElement> ) => void
    id: number
}