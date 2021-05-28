import "./styles.css";
import { useCart } from "./CartContext";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "kala chashma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "japani jutta",
    price: 10000
  },
  {
    id: 4,
    name: "afghan jalebi",
    price: 50
  }
];

const ProductListing = () => {
  const { setItemsInCart } = useCart();
  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "solid black 1px",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
        >
          <h2>{item.name}</h2>
          <p>Rs. {item.price}</p>
          <button
            onClick={() =>
              setItemsInCart((currentItems) => [...currentItems, item])
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const CartHeader = () => {
  const { itemsInCart } = useCart();
  //console.log(itemsInCart);
  return (
    <>
      <h1>Items in Cart: {itemsInCart.length}</h1>
    </>
  );
};

function ShowItem({ item }) {
  return (
    <div
      key={item.id}
      style={{
        border: "solid black 1px",
        margin: "0.5rem",
        padding: "0.5rem"
      }}
    >
      <h2>{item.name}</h2>
      <p>Rs. {item.price}</p>
      {/* <button
      onClick={() => setItemsInCart((items) => [...items, { item }])}
    >
      Add to Cart
    </button> */}
    </div>
  );
}

const Cart = () => {
  const { itemsInCart } = useCart();
  return (
    <>
      <h1>Cart</h1>
      {itemsInCart.map((item) => (
        <ShowItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h2>useContext Class</h2>
      <CartHeader />
      <button onClick={() => setRoute("products")}>Products</button>

      <button onClick={() => setRoute("cart")}>Cart</button>

      {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />}
    </div>
  );
}
