import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MenuCard from "../components/menu/MenuCard"
import "../styles/menu.css";

function Menu() {

  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/menu")
    .then((Response) => {
      setmenuItems(Response.data);
    }).catch((error) => {console.error("Error fetching menu", error);
  });
  }, []);

  return(
    <>
    <Navbar />

    <section className="menu-page">
      <div className="menu-header">
        <h1>Menu</h1>
        <p>Discover our freshly prepared coffee, pastries, desserts, and meals.</p>
      </div>

      <div className="menu-grid">
         {menuItems.map((item)=> (
          <MenuCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            />
         ))}
      </div>
    </section>

    <Footer/>
    </>
  );
}

export default Menu;
