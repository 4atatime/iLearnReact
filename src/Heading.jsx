export default function Heading({color= "green", text, fontSize}){
    return <h1 style={{color: color, fontSize: fontSize}}>{text}</h1>
}