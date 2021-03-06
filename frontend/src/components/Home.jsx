import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../features/redux/products/cartSlice";
import { useGetAllProductsQuery } from "../features/redux/products/productsApi";
import productsSlice from "../features/redux/products/productsSlice";
import ItemCard from "./ItemCard";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  //USING CREATHUNK TO ACCESS THE STATE
  const { items, status, messege } = useSelector((state) => state.products);

  //ACCESS THE STATE USING RTK QUERY
  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart")
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>erro ocured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              < ItemCard style={{margin: '20px'}} product={product} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
