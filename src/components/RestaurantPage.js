import React from "react";
import { useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import CartItem from "./CartItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const RestaurantPage = () => {
  const menu = useSelector((state) => state.menu.value);
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  console.log(menu[0].deserts);
  return (
    <>
      <header className="App-header">
        <h1 className="head-title">White Lotus</h1>
        <div className="cred-cont">
          <h3>
            Name | <a>Orders</a> | <a>Logout</a>
          </h3>
        </div>
      </header>

      <div className="rest-page-cont">
        <div className="menu-cont">
          <div className="starter-cont">
            <div className="h-cont">
              <h1 className="s1">Starters</h1>
            </div>
            {menu[0].starters.map((e, i) => (
              <FoodItemCard title={e} />
            ))}
          </div>
          <div className="main-course-cont">
            <div className="h-cont">
              <h1 className="s1">Main Course</h1>
            </div>
            {menu[0].mainCourse.map((e, i) => (
              <FoodItemCard title={e} />
            ))}
          </div>
          <div className="bread-cont">
            <div className="h-cont">
              <h1 className="s1">Breads</h1>
            </div>
            {menu[0].breads.map((e, i) => (
              <FoodItemCard title={e} />
            ))}
          </div>
          <div className="desert-cont">
            <div className="h-cont">
              <h1 className="s1">Deserts</h1>
            </div>

            {menu[0].deserts.map((e, i) => (
              <FoodItemCard title={e} />
            ))}
          </div>
        </div>
        <div className="menu-cart">
          <h1 className="cart-h1  ">Cart</h1>

          {Object.entries(cart).map(([name, count]) => (
            <CartItem title={name} count={count > 0 ? `(${count})` : ""} />
          ))}
          <div className="chekOut-cont">
            <button className="checkOut">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
