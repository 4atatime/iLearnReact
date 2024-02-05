export default function Greeter(props){
    console.log(props.person);
    return <h1>helloooo, {props.person}!</h1>;
}