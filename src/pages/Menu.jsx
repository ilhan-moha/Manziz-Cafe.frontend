import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MenuCard from "../components/menu/MenuCard"
import "../styles/menu.css";
import API_URL from "../services/api";

function Menu() {

  const [menuItems, setmenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    axios.get(`${API_URL}/menu`)
    .then((Response) => {
      setmenuItems(Response.data);
    }).catch((error) => {console.error("Error fetching menu", error);
  });
  }, []);

  const categories = [
  "All",
  "Coffee",
  "Tea",
  "Pastry",
  "Desserts",
  "Food",
];

const filteredItems =
  selectedCategory === "All"
    ? menuItems
    : menuItems.filter(
        (item) => item.category === selectedCategory
      );

  return(
    <>
    <Navbar />

    <section className="menu-page">
      <div className="menu-header">
        <h1>Menu</h1>
        <p>Discover our freshly prepared coffee, pastries, desserts, and meals.</p>
      </div>

      <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              } onClick={() => setSelectedCategory(category)}>
              {category} </button>
          ))}
     </div>

      <div className="menu-grid">
       {filteredItems.map((item) => (
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
