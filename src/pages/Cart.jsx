import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/layout/Footer";
import axios from "axios";
import "../styles/cart.css";
import API_URL from "../services/api";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalPrice, increaseQuantity,
  decreaseQuantity,clearCart } = useCart();

  const navigate = useNavigate();

  const handleCheckout = async () => {

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login before checkout");
    navigate("/login");
    return;
  }

  const orderItems = cart.map((item) => ({
    menu_id: item.id,
    quantity: item.quantity
  }));

  try {

    await axios.post(
      `${API_URL}/orders`,
      {
        items: orderItems
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    alert("Order placed successfully!");

    clearCart();

    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Checkout failed"
    );
  }
};

  return (
    <>

      <section className="cart-page">
        <Link to="/menu" className="back-home-btn">
        <FaArrowLeft /> Back to Menu
        </Link>
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-info">
                      <h3>{item.name}</h3>
                       <p>Price: Ksh {item.price}</p>
                       <p>Quantity: {item.quantity}</p>
                       
                 </div>
                 <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>
                        +
                    </button>

                    </div>
                 <div className="cart-actions">
                   <button className="remove-btn"
                   onClick={() => removeFromCart(item.id)}>
                    Remove
                   </button>
                 </div>
               </div>
            ))}

            <div className="cart-summary">
               <h2>Total: Ksh {totalPrice}</h2>
               <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>
            </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;