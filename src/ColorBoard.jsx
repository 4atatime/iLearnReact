import ColorBox from "./ColorBox";
import "./ColorBoard.css";

export default function({colors}){
  const boxes=[]
  for (let i = 0; i < 3*3; i ++ ){
    boxes.push(<ColorBox colors={colors}/>);
  }
  return(
    <div className="ColorBoard">
      {boxes}
    </div>
  )
}