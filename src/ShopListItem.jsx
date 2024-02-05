export default function ShopListItem({name, quantity, status}){
  const styles={
    color: i.status ? "grey" : "black", 
    textDecoration: i.status ? "line-through" : "none",
  };
  return(
      <li style={styles}>
        {name}: {quantity} {i.status===false && <p>- get it!</p>}
      </li>
  );
}