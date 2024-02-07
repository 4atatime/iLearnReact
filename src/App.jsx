import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDie from "./DoubleDie";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShopList from "./ShopList";
import ShopListItem from "./ShopListItem";
import Clicker from "./Clicker";
import Toggle from "./Toggle";
import ToggleCount from "./Toggle";
import ColorBox from "./ColorBox";
import ColorBoard from "./ColorBoard";

// const data=[
//   {id:1, name:"eggs", quantity: 12, status: false},
//   {id:2, name:"milk", quantity: 7, status: true},
//   {id:3, name:"cookies", quantity: 4, status: false},
//   {id:4, name:"apples", quantity: 10, status: true},
//   {id:5, name:"pineapples", quantity: 7, status: true},
//   {id:6, name:"kiwi", quantity: 12, status: true},
// ]

const colors= [
  "#FF5733",
  "#6C5CE7",
  "#F7DC6F",
  "#3498DB",
  "#58D68D",
  "#E74C3C",
  "#9B59B6",
];


function App() {
 return (
  <div>
    <ColorBoard colors={colors}/>
    {/* <ToggleCount /> */}
    {/* <Clicker buttonText={"Click here"} message={"good job!"}/> */}
   {/* <ShopList items={data} /> */}
   {/* <ColorList colors={["red", "blue","yellow"]} fontSize="24px"/> */}
   {/* <Heading color="red" text="heyho!" fontSize="20px"/> */}
   {/* <DoubleDie />
      <DoubleDie />
      <ListPicker values = {[1, 2, 3]}/>
      <ListPicker values = {["a", "b", "c"]}/>
      <Greeter person="Aya"/>
      <Die numSides={20}/>
      <Die numSides={7}/>  */}
  </div>
 );
}

export default App;
