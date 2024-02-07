import { useState } from "react";
import "./Toggle.css";

export default function ToggleCount(){
  const [angel, setAngel] = useState(true);
  const [count, setCount] = useState(0);
  
  const toggleFace = () => setAngel(! angel);
  const incrementCount = () => setCount(count +1);

  return(
    <div>
      <h2 className="Toggle" onClick={()=> {
          toggleFace();
          incrementCount();
        }}
      >
        {angel ? "😇" : "😈"}
      </h2>
      <p>count is: {count}</p>
    </div>
  );
}