import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDie from './DoubleDie'
import Heading from './Heading'
import ColorList from './ColorList'
import ShopList from './ShopList'
import ShopListItem from './ShopListItem'

const data=[
  {id:1, name:"eggs", quantity: 12, status: false},
  {id:2, name:"milk", quantity: 7, status: true},
  {id:3, name:"cookies", quantity: 4, status: false},
  {id:4, name:"apples", quantity: 10, status: true},
]

function App() {
  return (
    <div>
      <ShopList items = {data}/>
      {/* <ColorList colors={["red", "blue","yellow"]} fontSize="24px"/> */}
      {/* <Heading color="red" text="heyho!" fontSize="20px"/> */}
      {/* <DoubleDie />
      <DoubleDie />
      <ListPicker values = {[1, 2, 3]}/>
      <ListPicker values = {["a", "b", "c"]}/>
      <Chicken/>
      <Greeter person="Aya"/>
      <Die numSides={20}/>
      <Die numSides={7}/>  */}
    </div>
  );
}

export default App
