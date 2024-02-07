import { useState } from "react";
import "./ColorBox.css";

function randomPick(c){
  const idx = Math.floor(Math.random() * c.length);
  return c[idx];
}

export default function ColorBox({colors}){
  const [color, setColor] = useState(randomPick(colors));
  const colorSwitch = () => {
    const randomColor = randomPick(colors);
    setColor(randomColor);
  }

  return(
    <div 
      className="ColorBox"
      onClick={colorSwitch}
      style={{backgroundColor: color}}
    >
    </div>
  );
}