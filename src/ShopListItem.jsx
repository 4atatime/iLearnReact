export default function ShopListItem({item}){
  const styles={
    color: item.status ? "grey" : "black", 
    textDecoration: item.status ? "line-through" : "none",
  };
  return(
      <li style={styles}>
        {item.name}: {item.quantity} {item.status===false && <p>- get it!</p>}
      </li>
  );
}