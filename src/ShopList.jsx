import ShopListItem from "./ShopListItem";

export default function ShopList({items}){
    return(
        <ul>
            {items.map((item) => (
                <ShopListItem 
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    );
}


{/* // export default function ShopList({items}){
//     return(
//         <ul>
//             {items.map((i) => (
//                 <li 
//                     key={i.id}
//                     style={{
//                         color: i.status ? "grey" : "black", 
//                         textDecoration: i.status ? "line-through" : "none",
//                     }}
//                 >
//                     {i.name}: {i.quantity} {i.status===false && <p>- get it!</p>}
//                 </li>))}
//         </ul>
//     );
// } */}