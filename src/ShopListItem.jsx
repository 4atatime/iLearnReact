// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
// Here they even say it's better to use typescript:
// PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.

import PropTypes from "prop-types";

ShopListItem.propTypes = {
 item: PropTypes.objectOf({
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  status: PropTypes.bool,
 }),
};

export default function ShopListItem({ item }) {
 const styles = {
  color: item.status ? "grey" : "black",
  textDecoration: item.status ? "line-through" : "none",
 };
 return (
  <li style={styles}>
   {item.name}: {item.quantity} {item.status === false && <p>- get it!</p>}
  </li>
 );
}
